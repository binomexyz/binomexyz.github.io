import { estadoTraduccion as estado } from './estado.mjs';

export const locales = ['es', 'fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const htmlLang: Record<Locale, string> = { es: 'es-ES', fr: 'fr-FR', en: 'en-GB' };
export const ogLocale: Record<Locale, string> = { es: 'es_ES', fr: 'fr_FR', en: 'en_GB' };


/** Ver src/i18n/estado.mjs para el significado de cada estado. */
export const estadoTraduccion: Record<Locale, 'original' | 'provisional' | 'revisada'> = estado;

export const esProvisional = (l: Locale) => estadoTraduccion[l] === 'provisional';

const preview = import.meta.env.PUBLIC_PREVIEW_LOCALES === 'true' || import.meta.env.DEV;

/** Idiomas que existen en este build (ES siempre; FR/EN provisionales solo en preview). */
export const localesActivos: Locale[] = locales.filter((l) => estadoTraduccion[l] !== 'provisional' || preview);
/** Idiomas que se anuncian a buscadores (hreflang, sitemap, llms.txt): solo los revisados. */
export const localesIndexables: Locale[] = locales.filter((l) => estadoTraduccion[l] === 'original' || estadoTraduccion[l] === 'revisada');
export const nombreIdioma: Record<Locale, string> = { es: 'Español', fr: 'Français', en: 'English' };

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

// ─── Tabla de rutas ───────────────────────────────────────────────────────────
// Una clave por página; el segmento de cada idioma. `:slug` es el parámetro dinámico.
export const rutas = {
  inicio: { es: '/', fr: '/', en: '/' },
  proyectos: { es: '/proyectos/', fr: '/projets/', en: '/projects/' },
  proyecto: { es: '/proyecto/:slug/', fr: '/projet/:slug/', en: '/project/:slug/' },
  servicios: { es: '/servicios/', fr: '/services/', en: '/services/' },
  servicio: { es: '/servicios/:slug/', fr: '/services/:slug/', en: '/services/:slug/' },
  nosotros: { es: '/nosotros/', fr: '/a-propos/', en: '/about/' },
  contacto: { es: '/contacto/', fr: '/contact/', en: '/contact/' },
  archivo: { es: '/archivo/', fr: '/archives/', en: '/archive/' },
  legal: { es: '/aviso-legal-y-privacidad/', fr: '/mentions-legales-et-confidentialite/', en: '/legal-notice-and-privacy/' },
  cookies: { es: '/politica-de-cookies/', fr: '/politique-de-cookies/', en: '/cookie-policy/' },
} as const;
export type RutaKey = keyof typeof rutas;

/** Slugs de servicio por idioma (la clave es el slug ES, que es el id estable). */
export const slugServicio: Record<string, Record<Locale, string>> = {
  branding: { es: 'branding', fr: 'branding', en: 'branding' },
  'paginas-web': { es: 'paginas-web', fr: 'sites-web', en: 'websites' },
  'producto-digital': { es: 'producto-digital', fr: 'produit-digital', en: 'digital-product' },
  'estrategia-digital': { es: 'estrategia-digital', fr: 'strategie-digitale', en: 'digital-strategy' },
};

/** Ruta (sin base ni prefijo de idioma) de una página en un idioma. `slug` = slug ES del servicio o slug del proyecto. */
export function rutaDe(key: RutaKey, locale: Locale, slug?: string): string {
  let r: string = rutas[key][locale];
  if (slug !== undefined) {
    const s = key === 'servicio' ? (slugServicio[slug]?.[locale] ?? slug) : slug;
    r = r.replace(':slug', s);
  }
  return r;
}

/** href final de una página con nombre: link('servicio', 'fr', 'paginas-web') → /fr/services/sites-web/ */
export const link = (key: RutaKey, locale: Locale, slug?: string) => href(rutaDe(key, locale, slug), locale);

/** Equivalentes de una página en cada idioma activo (para selector de idioma y hreflang). */
export function equivalentes(key: RutaKey, slug?: string, solo: Locale[] = localesActivos): Partial<Record<Locale, string>> {
  return Object.fromEntries(solo.map((l) => [l, link(key, l, slug)])) as Partial<Record<Locale, string>>;
}
