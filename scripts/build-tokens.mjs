// Genera src/styles/tokens.css desde design-system/tokens.json
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { readTokens, flatten, resolveValue, paths } from './lib/tokens.mjs';

const tree = readTokens();
const lines = [];
const emit = (name, value) => lines.push(`  --${name}: ${value};`);

// 1) Primitivas y escalas (todo salvo "semantic")
const { semantic, ...primitives } = tree;
for (const t of flatten(primitives)) {
  const [group, ...rest] = t.path;
  const name = group === 'step' ? `step-${rest.join('-')}` : t.path.join('-');
  emit(name.replace(/^font-family-/, 'font-').replace(/^font-weight-/, 'peso-'), resolveValue(tree, t.value));
}
const primitivesCss = lines.splice(0).join('\n');

// 2) Roles semánticos por tono
const tone = (key) => {
  for (const t of flatten({ [key]: semantic[key] })) emit(t.path.slice(1).join('-'), resolveValue(tree, t.value));
  return lines.splice(0).join('\n');
};

const css = `/* GENERADO por scripts/build-tokens.mjs desde design-system/tokens.json — NO EDITAR A MANO */
:root {
${primitivesCss}

  /* Tono por defecto: claro */
${tone('light')}
  color-scheme: light;
}

[data-tone='light'] {
${tone('light')}
  color-scheme: light;
}

[data-tone='dark'] {
${tone('dark')}
  color-scheme: dark;
}
`;

mkdirSync(dirname(paths.css), { recursive: true });
writeFileSync(paths.css, css);
console.log(`✔ tokens.css generado (${css.split('\n').length} líneas)`);
