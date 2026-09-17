import { readFileSync } from 'node:fs';

export function getMain(file) {
  const html = readFileSync(file, 'utf-8');
  return html.match(/<main\b[^>]*>[\s\S]*?<\/main>/i)?.[0] ?? '';
}
