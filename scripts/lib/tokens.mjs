// Utilidades compartidas: lectura/resolución de tokens DTCG y cálculo de contraste WCAG.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Los scripts y el build de Astro se ejecutan siempre desde la raíz del proyecto.
const root = process.cwd();
export const paths = {
  root,
  tokens: resolve(root, 'design-system/tokens.json'),
  pairs: resolve(root, 'design-system/contrast-pairs.json'),
  css: resolve(root, 'src/styles/tokens.css'),
};

export function readTokens() {
  return JSON.parse(readFileSync(paths.tokens, 'utf8'));
}

/** Aplana el árbol DTCG: devuelve [{ path:[…], type, value }] */
export function flatten(node, path = []) {
  const out = [];
  for (const [key, val] of Object.entries(node)) {
    if (key.startsWith('$')) continue;
    if (val && typeof val === 'object' && '$value' in val) {
      out.push({ path: [...path, key], type: val.$type, value: val.$value });
    } else if (val && typeof val === 'object') {
      out.push(...flatten(val, [...path, key]));
    }
  }
  return out;
}

export function getToken(tree, dotted) {
  const t = dotted.split('.').reduce((n, k) => (n ? n[k] : undefined), tree);
  if (!t || !('$value' in t)) throw new Error(`Token no encontrado: ${dotted}`);
  return t.$value;
}

/** Resuelve alias {a.b.c} de forma recursiva. */
export function resolveValue(tree, value, seen = new Set()) {
  if (typeof value !== 'string') return value;
  return value.replace(/\{([^}]+)\}/g, (_, ref) => {
    if (seen.has(ref)) throw new Error(`Alias circular: ${ref}`);
    return resolveValue(tree, getToken(tree, ref), new Set([...seen, ref]));
  });
}

// ---- Contraste WCAG 2.x ----
export function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? [...h].map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
const lin = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
export function luminance(hex) {
  const [r, g, b] = hexToRgb(hex);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}
export function contrast(fg, bg) {
  const [a, b] = [luminance(fg), luminance(bg)].sort((x, y) => y - x);
  return (a + 0.05) / (b + 0.05);
}

/** Evalúa todos los pares declarados. */
export function evaluatePairs() {
  const tree = readTokens();
  const pairs = JSON.parse(readFileSync(paths.pairs, 'utf8'));
  return pairs.map((p) => {
    const fg = resolveValue(tree, getToken(tree, p.fg));
    const bg = resolveValue(tree, getToken(tree, p.bg));
    const ratio = contrast(fg, bg);
    return { ...p, fgHex: fg, bgHex: bg, ratio, ok: ratio >= p.min };
  });
}
