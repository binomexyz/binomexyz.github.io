export const locales = ['es', 'fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const htmlLang: Record<Locale, string> = { es: 'es-ES', fr: 'fr-FR', en: 'en-GB' };
export const ogLocale: Record<Locale, string> = { es: 'es_ES', fr: 'fr_FR', en: 'en_GB' };

const base = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');

/** Ruta interna con base, prefijo de idioma (solo FR/EN) y barra final. Ej.: href('/servicios/') */
export function href(path: string, locale: Locale = defaultLocale): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const clean = ('/' + path.replace(/^\/+/, '')).replace(/\/*$/, '/');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return `${base}${prefix}${clean === '//' ? '/' : clean}`;
}

/** URL absoluta canónica (usa `site` de astro.config). */
export function absolute(path: string, site: URL | string, locale: Locale = defaultLocale): string {
  return new URL(href(path, locale), site).toString();
}
