// Estado de cada traducción. Fuente única: la leen src/i18n/config.ts y astro.config.mjs.
// - 'original'    : idioma base.
// - 'provisional' : redactada por IA, pendiente de revisión nativa. Aviso visible, noindex, fuera de sitemap,
//                   hreflang y llms.txt; solo se construye con PUBLIC_PREVIEW_LOCALES=true (staging, CI, dev).
// - 'revisada'    : validada por una persona nativa; se publica y se indexa. Cambiar aquí al validarla.
/** @type {Record<'es'|'fr'|'en', 'original'|'provisional'|'revisada'>} */
export const estadoTraduccion = {
  es: 'original',
  fr: 'provisional',
  en: 'provisional',
};
