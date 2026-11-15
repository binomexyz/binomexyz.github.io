// Genera public/og-default.png (1200×630) con las fuentes del proyecto. Uso: node scripts/make-og.mjs
import { chromium } from 'playwright-core';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';
import { writeFileSync, rmSync } from 'node:fs';
const nm = (p) => pathToFileURL(join(process.cwd(), 'node_modules', p)).href;
const html = `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:F;src:url(${nm('@fontsource/funnel-display/files/funnel-display-latin-700-normal.woff2')});font-weight:700}
@font-face{font-family:F;src:url(${nm('@fontsource/funnel-display/files/funnel-display-latin-ext-700-normal.woff2')});font-weight:700;unicode-range:U+0100-02BA}
@font-face{font-family:S;src:url(${nm('@fontsource/dm-serif-text/files/dm-serif-text-latin-400-italic.woff2')});font-style:italic}
@font-face{font-family:B;src:url(${nm('@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2')})}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;background:#FDF9F0;color:#0A0A0A;padding:64px 72px;display:flex;flex-direction:column;justify-content:space-between;font-family:B;overflow:hidden;position:relative}
.logo{font:700 44px/1 F;letter-spacing:-0.04em}
h1{font:700 92px/1.02 F;letter-spacing:-0.035em;max-width:900px}
h1 em{font:italic 400 92px/1.02 S;color:#DB4A38;letter-spacing:-0.01em}
.pie{display:flex;gap:16px;font-size:26px;color:#5F5A52;align-items:center}
.punto{width:14px;height:14px;background:#F26654;display:inline-block}
.m{position:absolute;right:72px;top:64px;width:260px;height:16px;background:#F26654}
</style><div class="logo">binōme</div><div class="m"></div>
<h1>Tu marca al nivel que tu negocio <em>merece.</em></h1>
<div class="pie"><span class="punto"></span>Estudio digital boutique · Madrid</div>`;
const b = await chromium.launch({ channel: 'chrome', args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
const tmp = join(process.cwd(), '.og-tmp.html'); writeFileSync(tmp, html);
await p.goto(pathToFileURL(tmp).href); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og-default.png' });
await b.close(); rmSync(tmp, { force: true }); console.log('✔ public/og-default.png');
