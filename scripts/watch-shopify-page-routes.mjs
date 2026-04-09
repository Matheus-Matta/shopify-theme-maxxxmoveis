import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { syncRoutes } from './sync-shopify-page-routes.mjs';

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
const WATCH_PATTERNS = [/^config[\\/]shopify\.page-routes\.json$/i, /^templates[\\/]page\..+\.json$/i, /^sections[\\/]page-.+\.liquid$/i];

let timer = null;
let running = false;
let pending = false;

async function runSync(reason) {
  if (running) {
    pending = true;
    return;
  }

  running = true;
  console.log(`[watch] sincronizando (${reason})...`);

  try {
    await syncRoutes();
  } catch (error) {
    console.error(`[watch] erro: ${error.message || error}`);
  } finally {
    running = false;
    if (pending) {
      pending = false;
      await runSync('fila pendente');
    }
  }
}

function schedule(reason) {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    void runSync(reason);
  }, 600);
}

function normalizeRelative(filePath) {
  const relative = path.relative(ROOT, filePath);
  return relative.replace(/\\/g, '/');
}

if (!fs.existsSync(ROUTES_FILE)) {
  console.error(`[watch] arquivo nao encontrado: ${ROUTES_FILE}`);
  process.exit(1);
}

console.log('[watch] monitorando alteracoes de rotas/pages...');
void runSync('inicial');

fs.watch(ROOT, { recursive: true }, (_eventType, filename) => {
  if (!filename) return;
  const normalized = String(filename).replace(/\\/g, '/');
  const shouldSync = WATCH_PATTERNS.some((pattern) => pattern.test(normalized));
  if (!shouldSync) return;

  const rel = normalizeRelative(path.join(ROOT, normalized));
  schedule(rel);
});
