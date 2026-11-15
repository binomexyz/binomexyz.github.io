# CLAUDE.md · Binōme web

Web de Binōme (estudio digital boutique, Madrid) en **Astro estático**, reconstruida fuera de Webflow.
Contexto: `README.md`, `PRODUCT.md` y `docs/` (01–07). Trabajar siempre **en español** con Tom.

## Reglas de trabajo
1. **No publicar nada en `binome.xyz`** ni tocar su DNS, ni Webflow. Staging solo en `*.pages.dev` o en el repo público de staging de la otra cuenta (ver `docs/07-staging.md`); nunca con dominio propio.
2. **Avisar antes de cada paso grande** (qué se va a hacer) y dar el resultado real: si algo falla o se omite, decirlo.
3. **Nunca inventar contenido de cliente**: testimonios, cifras, textos legales, teléfonos, precios. Si falta, marcarlo `[VALIDAR]` / `PENDIENTE` y anotarlo en `docs/06-pendientes.md`.
4. **Ramas y PRs**: desarrollar en la rama de sesión; no empujar a `master`; no abrir PR sin que se pida. Commits con mensaje en español.
5. **Calidad antes de dar por hecho**: `npm run check`, `npm run build` y `npm run test:a11y` deben pasar. Tras tocar plantillas, confirmar que el HTML en español no cambia salvo lo intencionado.
6. **Diseño** (`docs/02`, `PRODUCT.md`): sin eyebrows, sin texto con degradado, sin glass, sin sombras duras; coral sobre crema; movimiento respetando `prefers-reduced-motion`. Contraste y tokens salen de `design-system/` (no editar `src/styles/tokens.css`, es generado).
7. **Secretos**: nunca en el repo. Cloudflare/Formspree van como secrets/variables de GitHub.

## Comandos
| Comando | Uso |
|---|---|
| `npm ci` | instalar (Node 22, `.nvmrc`) |
| `npm run dev` | desarrollo (incluye FR/EN) |
| `npm run check` | tipos y colecciones (`astro check`) |
| `npm run build` | tokens + contraste + build; producción = solo ES |
| `PUBLIC_PREVIEW_LOCALES=true npm run build` | build con FR/EN provisionales (lo que usan CI y staging) |
| `npm run test:a11y` | axe-core WCAG 2.2 AA + SEO sobre `dist/` (audita lo que haya construido) |

## Arquitectura clave
- **i18n**: `src/i18n/config.ts` (tabla `rutas`, `link()`, `equivalentes()`), `ui.ts` (cadenas de interfaz), `copy/{es,fr,en}.ts` (contenido de páginas; `es.ts` es la fuente y fija el tipo), `estado.mjs` (estado de cada traducción).
- **Páginas**: plantillas en `src/views/*.astro` con prop `locale`. ES las monta desde `src/pages/` (raíz); FR/EN desde `src/pages/[locale]/[...slug].astro` con URLs localizadas (`/fr/services/sites-web/`, `/en/about/`).
- **Contenido**: `src/content/proyectos/{es,fr,en}` y `articulos/es` (Markdown; el campo `lang` filtra). `src/data/` deriva de `copy/es.ts`.
- **Añadir un texto**: ponerlo en `copy/es.ts` y traducirlo en `fr.ts` y `en.ts` (el tipo obliga). Añadir una página: nueva clave en `rutas`, vista y entrada en la ruta dinámica.

## Traducciones FR/EN: provisionales
Redactadas por IA, **sin revisión nativa**. Mientras `estado.mjs` las marque `provisional`: aviso visible, `noindex`, fuera de sitemap/hreflang/`llms.txt`, y **no se construyen en producción** (solo con `PUBLIC_PREVIEW_LOCALES=true`). Al validarlas, cambiar a `'revisada'`. Los artículos del archivo siguen solo en ES.

## CI y despliegue
- `ci.yml`: check + build + axe en push a `main`/`master`, PRs y lanzamiento manual. Verde en GitHub sobre la rama de trabajo (workflow_dispatch).
- `deploy-staging.yml`: Cloudflare Pages, `noindex` + `X-Robots-Tag`. **No despliega hasta que existan** los secretos `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID` (guía en `docs/07-staging.md`; falta crear el proyecto y la política de Access).
- `deploy-staging-github.yml`: validación rápida y abierta con `noindex`: compila en el repo privado y sube solo `dist/` a un repo público de otra cuenta (`binomexyz/binome.github.io`, Pages desde `main`). Necesita el secret `STAGING_DEPLOY_KEY` (guía en `docs/07-staging.md`); sin él no despliega. GitHub Pages directo desde este repo no es posible: es privado y su plan no lo permite.
- Producción (Cloudflare Pages o Netlify, 301, cabeceras): `docs/05-migracion-dominio.md`. Sin decidir.

## Estado actual (2026-11-15)
- Hecho: build, check y auditoría axe en verde (ES: 28 páginas; con preview: 66 en ES+FR+EN). CI verificado en GitHub. Workflows corregidos (disparaban en `main`, la rama por defecto es `master`). i18n FR/EN completo y provisional.
- Bloqueado por Tom/Betsabé (`docs/06-pendientes.md`): maquetas y fotos, logo SVG, teléfono, textos legales, contenido de 5 proyectos en borrador, Search Console, coral y año de fundación, copy `[VALIDAR]`, IDs de Formspree y reservas, hosting de producción, revisión nativa FR/EN.
- Conocido: `aviso-legal` y `cookies` van con `noindex` pero entran en el sitemap ES; resolver al migrar el texto legal.
