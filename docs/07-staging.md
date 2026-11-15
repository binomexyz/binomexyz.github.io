# 07 · Staging privado (Cloudflare Pages)

**Por qué no GitHub Pages:** en repos privados exige plan de pago (Pro/Team/Enterprise) y, aun así, el sitio publicado
es accesible por URL para cualquiera (solo es privado en Enterprise Cloud). `noindex` evita la indexación, no el acceso.
Cloudflare Pages + Access da staging con login por email, gratis hasta 50 usuarios.

El staging **nunca** usa el dominio `binome.xyz`: vive en `<proyecto>.pages.dev` (o un subdominio `staging.` cuando se decida).

## Activación (una sola vez, ~10 min, requiere cuenta de Cloudflare)
1. Cloudflare → **Workers & Pages → Create → Pages → Direct Upload**; crear el proyecto `binome-web-staging`
   (si usas otro nombre, define la variable de repo `CF_PAGES_PROJECT`).
2. Cloudflare → **My Profile → API Tokens → Create Token**, plantilla *Edit Cloudflare Workers* o permiso
   `Account · Cloudflare Pages · Edit`. Copia también el **Account ID**.
3. GitHub → repo → **Settings → Secrets and variables → Actions**:
   - Secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
   - Variables (opcionales): `SITE_URL` (p. ej. `https://binome-web-staging.pages.dev`), `PUBLIC_FORMSPREE_ID`.
4. Cloudflare → **Zero Trust → Access → Applications → Add → Self-hosted**: dominio `binome-web-staging.pages.dev`
   (y `*.binome-web-staging.pages.dev` para previews), política *Allow* con los emails de Tom y Betsabé (One-time PIN).
5. GitHub → **Actions → Deploy staging → Run workflow**.

Hasta el paso 3 el workflow termina en verde sin desplegar nada.

## Staging para validar: GitHub Pages en `binomexyz/binomexyz.github.io`
Mientras se valida (FR/EN, textos, diseño) basta un enlace abierto con `noindex`. El proyecto vive en el repo **público**
`binomexyz/binomexyz.github.io`, así que Pages es gratis y compila con Actions (`deploy-pages.yml`). Sin claves.
URL: `https://binomexyz.github.io/`. **Al ser público, el repo muestra código, `docs/` y `CLAUDE.md`.**

1. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**. No configurar dominio propio.
2. El workflow debe estar en la rama por defecto (`main`); el entorno `github-pages` solo despliega desde ella.
3. Cada push a `main` compila (noindex + FR/EN provisionales) y publica. También se puede lanzar a mano en *Actions*.

Variables opcionales (Settings → Secrets and variables → Actions → Variables): `STAGING_SITE_URL`, `STAGING_BASE_PATH`, `PUBLIC_FORMSPREE_ID`.
Limitaciones: la URL es abierta (solo `noindex` en meta y `robots.txt`; Pages no admite cabeceras propias ni login).

## Garantías de noindex
`PUBLIC_NOINDEX=true` en el build (meta robots + `robots.txt` Disallow) y `X-Robots-Tag: noindex, nofollow` añadido solo
en el despliegue de staging. Producción no cambia `public/_headers`.

## Alternativa
Netlify (protección por contraseña es de pago) o Vercel. Cloudflare es la opción recomendada también para producción
(301 y cabeceras; ver `05-migracion-dominio.md`).
