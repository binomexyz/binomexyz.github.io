// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL: dominio final (producción) o URL del staging. BASE_PATH: solo si se sirve en subruta (GitHub Pages de proyecto).
const site = process.env.SITE_URL ?? 'https://binome.xyz';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  // ES completo primero; FR y EN quedan estructurados (hreflang y rutas /fr, /en listos para activar).
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (url) => !/\/(design-system|404)\/?$/.test(url),
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', fr: 'fr-FR', en: 'en-GB' } },
    }),
  ],
});
