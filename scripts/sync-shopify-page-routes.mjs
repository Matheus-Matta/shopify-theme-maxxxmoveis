import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

function resolveRoot() {
  const cwdRoot = process.cwd();
  const scriptRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const cwdRoutes = path.join(cwdRoot, 'config', 'shopify.page-routes.json');
  const scriptRoutes = path.join(scriptRoot, 'config', 'shopify.page-routes.json');

  if (fs.existsSync(cwdRoutes)) return cwdRoot;
  if (fs.existsSync(scriptRoutes)) return scriptRoot;
  return cwdRoot;
}

const ROOT = resolveRoot();
const ROUTES_FILE = path.join(ROOT, 'config', 'shopify.page-routes.json');
const STATE_FILE = path.join(ROOT, '.shopify', 'page-routes-state.json');

function loadDotEnv() {
  const envPath = path.join(ROOT, '.env');
  if (!fs.existsSync(envPath)) return;

  const raw = fs.readFileSync(envPath, 'utf8');
  const lines = raw.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex <= 0) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function normalizeStoreDomain(value) {
  const trimmed = String(value || '').trim();
  if (!trimmed) return '';

  return trimmed
    .replace(/^https?:\/\//i, '')
    .replace(/\/+$/, '');
}

loadDotEnv();

const STORE = normalizeStoreDomain(process.env.SHOPIFY_STORE_DOMAIN);
const TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
const API_VERSION = process.env.SHOPIFY_ADMIN_API_VERSION || '2025-01';

function assertEnv() {
  if (!STORE || !TOKEN) {
    throw new Error('Defina SHOPIFY_STORE_DOMAIN e SHOPIFY_ADMIN_ACCESS_TOKEN no ambiente.');
  }
}

function readJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;

  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const normalized = raw.charCodeAt(0) === 0xfeff ? raw.slice(1) : raw;
    return JSON.parse(normalized);
  } catch (error) {
    const detail = error?.message ? ` (${error.message})` : '';
    throw new Error(`JSON invalido em ${filePath}${detail}`);
  }
}

function readJsonSafe(filePath, fallback) {
  try {
    return readJson(filePath, fallback);
  } catch {
    return fallback;
  }
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function writeJsonIfChanged(filePath, value) {
  const next = `${JSON.stringify(value, null, 2)}\n`;
  const current = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : null;
  if (current === next) {
    return false;
  }

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, next, 'utf8');
  return true;
}

function parseHandleFromUrl(url) {
  const value = String(url || '').trim();
  const match = value.match(/^\/pages\/([a-z0-9][a-z0-9\-_]*)$/i);
  if (!match) {
    throw new Error(`URL invalida para page: ${value}. Use o formato /pages/seu-handle`);
  }
  return match[1].toLowerCase();
}

function validateRoutes(config) {
  const routes = Array.isArray(config?.routes) ? config.routes : [];
  const ids = new Set();
  const urls = new Set();

  for (const route of routes) {
    if (!route?.id) throw new Error('Cada rota precisa de id imutavel.');
    if (ids.has(route.id)) throw new Error(`ID duplicado: ${route.id}`);
    ids.add(route.id);

    if (!route?.url) throw new Error(`Rota ${route.id} sem url.`);
    const normalizedUrl = String(route.url).toLowerCase();
    if (urls.has(normalizedUrl)) throw new Error(`URL duplicada: ${route.url}`);
    urls.add(normalizedUrl);

    if (!route?.templateSuffix) {
      throw new Error(`Rota ${route.id} sem templateSuffix.`);
    }

    parseHandleFromUrl(route.url);
  }

  return routes;
}

async function gql(query, variables = {}) {
  const endpoint = `https://${STORE}/admin/api/${API_VERSION}/graphql.json`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': TOKEN
    },
    body: JSON.stringify({ query, variables })
  });

  if (!response.ok) {
    throw new Error(`Falha GraphQL (${response.status}): ${await response.text()}`);
  }

  const payload = await response.json();
  if (payload.errors?.length) {
    throw new Error(`GraphQL errors: ${JSON.stringify(payload.errors)}`);
  }
  return payload.data;
}

async function findPageById(pageId) {
  const data = await gql(
    `query ($id: ID!) {
      node(id: $id) {
        ... on Page {
          id
          handle
          title
          templateSuffix
        }
      }
    }`,
    { id: pageId }
  );

  return data?.node || null;
}

async function findPageByHandle(handle) {
  const data = await gql(
    `query ($query: String!) {
      pages(first: 1, query: $query) {
        nodes {
          id
          handle
          title
          templateSuffix
        }
      }
    }`,
    { query: `handle:${handle}` }
  );

  return data?.pages?.nodes?.[0] || null;
}

async function createPage(input) {
  const data = await gql(
    `mutation ($page: PageCreateInput!) {
      pageCreate(page: $page) {
        page {
          id
          handle
          title
          templateSuffix
        }
        userErrors {
          field
          message
        }
      }
    }`,
    { page: input }
  );

  const errors = data?.pageCreate?.userErrors || [];
  if (errors.length) {
    throw new Error(`pageCreate falhou: ${JSON.stringify(errors)}`);
  }

  return data.pageCreate.page;
}

async function updatePage(input) {
  const { id, ...pageInput } = input;
  if (!id) {
    throw new Error('updatePage exige id.');
  }

  const data = await gql(
    `mutation ($id: ID!, $page: PageUpdateInput!) {
      pageUpdate(id: $id, page: $page) {
        page {
          id
          handle
          title
          templateSuffix
        }
        userErrors {
          field
          message
        }
      }
    }`,
    { id, page: pageInput }
  );

  const errors = data?.pageUpdate?.userErrors || [];
  if (errors.length) {
    throw new Error(`pageUpdate falhou: ${JSON.stringify(errors)}`);
  }

  return data.pageUpdate.page;
}

async function deletePage(pageId) {
  const data = await gql(
    `mutation ($id: ID!) {
      pageDelete(id: $id) {
        deletedPageId
        userErrors {
          field
          message
        }
      }
    }`,
    { id: pageId }
  );

  const errors = data?.pageDelete?.userErrors || [];
  if (errors.length) {
    throw new Error(`pageDelete falhou: ${JSON.stringify(errors)}`);
  }

  return data?.pageDelete?.deletedPageId || null;
}

function ensureTemplateFile(route) {
  const templatePath = path.join(ROOT, 'templates', `page.${route.templateSuffix}.json`);
  const sectionType = route.sectionType || `page-${route.templateSuffix}-custom`;

  const payload = {
    sections: {
      main: {
        type: sectionType,
        settings: {}
      }
    },
    order: ['main']
  };

  const changed = writeJsonIfChanged(templatePath, payload);
  if (changed) {
    console.log(`Template local atualizado: page.${route.templateSuffix}.json`);
  }
}

function removeTemplateFile(templateSuffix) {
  const templatePath = path.join(ROOT, 'templates', `page.${templateSuffix}.json`);
  if (fs.existsSync(templatePath)) {
    fs.unlinkSync(templatePath);
  }
}

export async function syncRoutes() {
  assertEnv();

  const config = readJson(ROUTES_FILE, null);
  if (!config) {
    throw new Error(`Arquivo de rotas nao encontrado: ${ROUTES_FILE}`);
  }

  const routes = validateRoutes(config);
  const state = readJsonSafe(STATE_FILE, { version: 1, routes: {} });
  const nextState = { version: 1, routes: { ...(state.routes || {}) } };
  const configRouteIds = new Set(routes.map((route) => route.id));
  const activeTemplateSuffixes = new Set(routes.map((route) => route.templateSuffix));

  for (const route of routes) {
    ensureTemplateFile(route);

    const handle = parseHandleFromUrl(route.url);
    const stateItem = nextState.routes[route.id] || {};
    let page = null;

    if (stateItem.shopifyPageId) {
      page = await findPageById(stateItem.shopifyPageId);
    }

    if (!page) {
      page = await findPageByHandle(handle);
    }

    const published = route.published !== false;

    if (!page) {
      page = await createPage({
        title: route.title,
        handle,
        templateSuffix: route.templateSuffix,
        isPublished: published
      });
      console.log(`Criada page ${route.id}: /pages/${page.handle}`);
    } else {
      page = await updatePage({
        id: page.id,
        title: route.title,
        handle,
        templateSuffix: route.templateSuffix,
        isPublished: published
      });
      console.log(`Atualizada page ${route.id}: /pages/${page.handle}`);
    }

    nextState.routes[route.id] = {
      id: route.id,
      shopifyPageId: page.id,
      lastHandle: page.handle,
      templateSuffix: route.templateSuffix,
      updatedAt: new Date().toISOString()
    };
  }

  // Limpeza de rotas removidas do config: apaga page na Shopify e remove template local quando não utilizado.
  const previousRoutes = state.routes || {};
  const removedRouteIds = Object.keys(previousRoutes).filter((id) => !configRouteIds.has(id));

  for (const removedRouteId of removedRouteIds) {
    const removed = previousRoutes[removedRouteId] || {};
    const removedPageId = removed.shopifyPageId;
    const removedLastHandle = removed.lastHandle;
    let pageToDelete = null;

    if (removedPageId) {
      pageToDelete = await findPageById(removedPageId);
    }

    if (!pageToDelete && removedLastHandle) {
      pageToDelete = await findPageByHandle(removedLastHandle);
    }

    if (pageToDelete?.id) {
      await deletePage(pageToDelete.id);
      console.log(`Excluida page orfa ${removedRouteId}: /pages/${pageToDelete.handle}`);
    } else {
      console.log(`Rota orfa ${removedRouteId}: page ja inexistente na Shopify.`);
    }

    if (removed.templateSuffix && !activeTemplateSuffixes.has(removed.templateSuffix)) {
      removeTemplateFile(removed.templateSuffix);
      console.log(`Template local removido: page.${removed.templateSuffix}.json`);
    }

    delete nextState.routes[removedRouteId];
  }

  writeJson(STATE_FILE, nextState);
  console.log('Sincronizacao finalizada com sucesso.');
}

const isDirectRun = process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;

if (isDirectRun) {
  syncRoutes().catch((error) => {
    console.error(error.message || error);
    process.exit(1);
  });
}
