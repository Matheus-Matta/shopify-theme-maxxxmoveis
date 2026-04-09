import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const files = [
  'sections/header.liquid',
  'sections/page-agendamento.liquid',
  'sections/cart-page-custom.liquid',
  'sections/collection-plp-reusable.liquid',
];

const replacements = [
  ['Ã§', 'ç'],
  ['Ã¡', 'á'],
  ['Ãº', 'ú'],
  ['Ã³', 'ó'],
  ['Ã­', 'í'],
  ['Ã£', 'ã'],
  ['Ã©', 'é'],
  ['Ãµ', 'õ'],
  ['Ãª', 'ê'],
  ['Ã¢', 'â'],
  ['Ã‡', 'Ç'],
  ['Ã‰', 'É'],
  ['Ã\u008D', 'Í'],
  ['Ã\u0081', 'Á'],
  ['Ã\u0082', 'Â'],
  ['Ã\u008A', 'Ê'],
  ['Ã\u0095', 'Õ'],
  ['Ã\u009A', 'Ú'],
];

for (const f of files) {
  const filePath = join(root, f);
  let content = readFileSync(filePath, 'utf8');
  const orig = content;
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  if (content !== orig) {
    writeFileSync(filePath, content, 'utf8');
    const count = (orig.match(/Ã./g) || []).length;
    console.log(`✔ Corrigido (~${count} ocorrências): ${f}`);
  } else {
    console.log(`– Sem alterações: ${f}`);
  }
}
console.log('Concluído.');
