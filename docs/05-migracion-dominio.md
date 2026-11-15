# 05 · Migración al dominio

1. Subir el repo a GitHub; `ci.yml` valida cada push.
2. Staging con `deploy-staging.yml` (noindex). Preferible subdominio `staging.binome.xyz`.
3. Elegir hosting de producción: **Cloudflare Pages o Netlify** (GitHub Pages no admite 301 ni cabeceras propias).
4. Rellenar `public/_redirects` con el mapa de URLs antiguas de Webflow (confirmar patrón `/blog/` vs `/archivo/`).
5. Variables en producción: `SITE_URL=https://binome.xyz`, sin `PUBLIC_NOINDEX`, `PUBLIC_FORMSPREE_ID`.
6. Cambiar DNS al final; mantener Webflow 48 h como respaldo. Enviar sitemap a Search Console y revisar cobertura.
7. Comprobar 301, canonical, `llms.txt`, formulario y cabeceras.
