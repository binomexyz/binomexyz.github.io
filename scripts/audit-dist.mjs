// Auditoría automática del build: sirve dist/, recorre todas las páginas en escritorio y móvil y ejecuta axe-core (WCAG 2.2 A/AA).
// También detecta desbordes horizontales, errores de consola y comprueba SEO básico por página (title, description, canonical, h1 único, lang).
import { createServer } from 'node:http';
import { readFile, stat, readdir } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { createRequire } from 'node:module';
import { chromium } from 'playwright-core';

const require = createRequire(import.meta.url);
const axeSource = await readFile(require.resolve('axe-core/axe.min.js'), 'utf8');
const dist = join(process.cwd(), 'dist');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.woff': 'font/woff' };

const server = createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let f = join(dist, p);
  try {
    if ((await stat(f)).isDirectory()) f = join(f, 'index.html');
  } catch { f = join(dist, '404.html'); res.statusCode = 404; }
  try { res.setHeader('Content-Type', types[extname(f)] ?? 'application/octet-stream'); res.end(await readFile(f)); }
  catch { res.statusCode = 404; res.end('not found'); }
}).listen(0);
const base = `http://localhost:${server.address().port}`;

async function paginas(dir = dist, acc = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const f = join(dir, e.name);
    if (e.isDirectory()) await paginas(f, acc);
    else if (e.name === 'index.html') acc.push(f.slice(dist.length).replace(/index\.html$/, ''));
  }
  return acc;
}
const rutas = (await paginas()).sort();

const browser = await chromium.launch({ channel: 'chrome', args: ['--no-sandbox'] });
let fallos = 0;
const log = (m) => { fallos++; console.log('  ✘', m); };

for (const [vp, size] of Object.entries({ escritorio: { width: 1440, height: 900 }, móvil: { width: 390, height: 844 } })) {
  const ctx = await browser.newContext({ viewport: size, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  const consola = [];
  page.on('console', (m) => ['error', 'warning'].includes(m.type()) && consola.push(m.text()));
  page.on('pageerror', (e) => consola.push(String(e)));
  console.log(`\n== ${vp} ==`);
  for (const ruta of rutas) {
    consola.length = 0;
    await page.goto(base + ruta, { waitUntil: 'networkidle' });
    await page.evaluate(axeSource);
    const axe = await page.evaluate(() => window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] } }));
    const meta = await page.evaluate(() => ({
      title: document.title,
      desc: document.querySelector('meta[name=description]')?.content ?? '',
      canon: document.querySelector('link[rel=canonical]')?.href ?? '',
      h1: document.querySelectorAll('h1').length,
      lang: document.documentElement.lang,
      desborde: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      robots: document.querySelector('meta[name=robots]')?.content ?? '',
    }));
    const noindex = /noindex/.test(meta.robots);
    const problemas = [];
    if (!meta.title || meta.title.length > 70) problemas.push(`title (${meta.title.length} car.)`);
    if (!noindex && (meta.desc.length < 70 || meta.desc.length > 165)) problemas.push(`description (${meta.desc.length} car.)`);
    if (!meta.canon) problemas.push('sin canonical');
    if (meta.h1 !== 1 && ruta !== '/404.html') problemas.push(`${meta.h1} h1`);
    if (!meta.lang) problemas.push('sin lang');
    if (meta.desborde > 0) problemas.push(`desborde horizontal ${meta.desborde}px`);
    if (consola.length) problemas.push(`consola: ${consola[0]}`);
    const violaciones = axe.violations;
    console.log(`${violaciones.length || problemas.length ? '✘' : '✔'} ${ruta || '/'}`);
    problemas.forEach(log);
    for (const v of violaciones) { log(`axe ${v.id} [${v.impact}] ${v.help} — ${v.nodes.length} nodo(s): ${v.nodes[0].target.join(' ')}`); }
  }
  await ctx.close();
}
await browser.close();
server.close();
if (fallos) { console.error(`\n${fallos} problema(s) encontrados.`); process.exit(1); }
console.log('\nAuditoría OK: sin violaciones axe ni problemas SEO básicos.');
