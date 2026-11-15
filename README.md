# Binōme · web

Sitio de Binōme (estudio digital boutique, Madrid) reconstruido en **Astro** estático, fuera de Webflow.
Incluye el **design system** (tokens DTCG → CSS) y validación automática de contraste, WCAG y SEO.

## Empezar
```bash
nvm use            # Node 22
npm ci
cp .env.example .env
npm run dev        # http://localhost:4321
```

## Scripts
| Comando | Qué hace |
|---|---|
| `npm run tokens` | Genera `src/styles/tokens.css` desde `design-system/tokens.json` |
| `npm run check:contrast` | Valida los pares de `design-system/contrast-pairs.json` (falla si < AA) |
| `npm run check` | `astro check` (tipos + colecciones) |
| `npm run build` | tokens + contraste + build estático en `dist/` |
| `npm run test:a11y` | axe-core (WCAG 2.2 AA) + checks SEO sobre `dist/` |
| `node scripts/make-og.mjs` | Regenera `public/og-default.png` |

## Estructura
- `design-system/` fuente única de tokens y pares de contraste. Guía viva en `/design-system/` (noindex).
- `src/styles/` tokens (generado), base, layout, components.
- `src/data/` NAP, servicios, textos de home. `src/content/` proyectos y artículos (Markdown, por idioma).
- `src/i18n/` configuración, rutas por idioma (`config.ts`), cadenas de UI (`ui.ts`), contenido por idioma (`copy/`) y estado de cada traducción (`estado.mjs`).
  ES original; FR/EN traducidos pero **provisionales** (pendientes de revisión nativa): solo se construyen con `PUBLIC_PREVIEW_LOCALES=true`.
- `src/views/` plantillas de página parametrizadas por idioma; `src/pages/` las monta (ES en raíz, FR/EN en `[locale]/[...slug]`).
- `src/pages/` rutas, incl. `llms.txt`, `llms-full.txt`, `robots.txt` dinámicos.
- `docs/` auditoría, dirección creativa, SEO/GEO, accesibilidad, migración y pendientes.

## Variables de entorno
`SITE_URL`, `BASE_PATH`, `PUBLIC_NOINDEX`, `PUBLIC_FORMSPREE_ID`, `PUBLIC_BOOKING_URL` (ver `.env.example`).

## Despliegue
Staging privado en Cloudflare Pages con Access y `noindex` (ver `docs/07-staging.md`). Producción recomendada en Cloudflare Pages o Netlify
(301 y cabeceras de seguridad; ver `public/_headers`, `public/_redirects` y `docs/05-migracion-dominio.md`).
