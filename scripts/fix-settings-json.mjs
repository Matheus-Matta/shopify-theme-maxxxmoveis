/**
 * Remove o bloco de comentario /* ... * / que o Shopify CLI injeta no topo
 * de arquivos JSON a cada pull. JSON puro nao aceita comentarios.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const DIRS = ['config', 'templates'];

function fixFile(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const cleaned = content.replace(/^\/\*[\s\S]*?\*\/\s*/, '');
  if (cleaned !== content) {
    writeFileSync(filePath, cleaned, 'utf8');
    console.log('[fix-settings] Comentario removido de', filePath);
  }
}

for (const dir of DIRS) {
  let files;
  try {
    files = readdirSync(dir);
  } catch {
    continue;
  }
  for (const file of files) {
    if (file.endsWith('.json')) {
      fixFile(join(dir, file));
    }
  }
}
