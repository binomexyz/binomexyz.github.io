// Constructores de JSON-LD (schema.org). Un único grafo de entidades enlazadas por @id,
// pensado para buscadores y para motores de respuesta/LLMs (GEO/AEO).
import { site } from '../data/site';
import { servicios } from '../data/servicios';
import { getCopy } from '../i18n/copy';
import { htmlLang, link, type Locale } from '../i18n/config';
import type { ServicioSlug } from '../i18n/copy/es';

type Json = Record<string, unknown>;

export const ids = (origin: string) => ({
  org: `${origin}/#organization`,
  web: `${origin}/#website`,
  person: (id: string) => `${origin}/nosotros/#${id}`,
});

export function organization(origin: string, locale: Locale = 'es'): Json {
  const i = ids(origin);
  const c = getCopy(locale);
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': i.org,
    name: site.name,
    legalName: site.legalName,
    alternateName: ['Binome', 'Binōme Studio'],
    url: `${origin}/`,
    description: c.orgDescripcion,
    slogan: c.slogan,
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {}),
    foundingDate: String(site.founded),
    address: { '@type': 'PostalAddress', addressLocality: site.city, addressRegion: site.region, addressCountry: site.country },
    areaServed: [
      { '@type': 'City', name: 'Madrid' },
      { '@type': 'Country', name: c.pais },
    ],
    knowsLanguage: [...site.languages],
    sameAs: Object.values(site.social),
    founder: site.founders.map((f) => ({ '@id': i.person(f.id) })),
    employee: site.founders.map((f) => ({ '@id': i.person(f.id) })),
    knowsAbout: c.conocimientos,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: c.catalogo,
      itemListElement: servicios.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: c.servicios.items[s.slug].nombre, description: c.servicios.items[s.slug].resumen, url: `${origin}${link('servicio', locale, s.slug)}` },
      })),
    },
  };
}

export function website(origin: string, locale: Locale = 'es'): Json {
  const i = ids(origin);
  return {
    '@type': 'WebSite',
    '@id': i.web,
    url: `${origin}/`,
    name: site.name,
    inLanguage: htmlLang[locale],
    publisher: { '@id': i.org },
  };
}

export function persons(origin: string, locale: Locale = 'es'): Json[] {
  const i = ids(origin);
  const c = getCopy(locale);
  return site.founders.map((f) => ({
    '@type': 'Person',
    '@id': i.person(f.id),
    name: f.name,
    alternateName: f.alias,
    jobTitle: c.fundadores[f.id].jobTitle,
    description: c.fundadores[f.id].bio,
    worksFor: { '@id': i.org },
    url: `${origin}${link('nosotros', locale)}`,
  }));
}

export function breadcrumbs(items: { name: string; url: string }[]): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({ '@type': 'ListItem', position: idx + 1, name: it.name, item: it.url })),
  };
}

export function faqPage(faqs: { q: string; a: string }[]): Json {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function service(origin: string, s: (typeof servicios)[number], locale: Locale = 'es'): Json {
  const c = getCopy(locale);
  const it = c.servicios.items[s.slug as ServicioSlug];
  const url = `${origin}${link('servicio', locale, s.slug)}`;
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: it.nombre,
    description: it.resumen,
    url,
    provider: { '@id': ids(origin).org },
    areaServed: { '@type': 'Country', name: c.pais },
    serviceType: it.nombre,
  };
}

export function creativeWork(origin: string, locale: Locale, p: { slug: string; nombre: string; resumen: string; cliente?: string; web?: string; categorias: string[] }): Json {
  const url = `${origin}${link('proyecto', locale, p.slug)}`;
  return {
    '@type': 'CreativeWork',
    '@id': `${url}#work`,
    name: p.nombre,
    description: p.resumen,
    url,
    creator: { '@id': ids(origin).org },
    keywords: p.categorias.join(', '),
    ...(p.cliente ? { sponsor: { '@type': 'Organization', name: p.cliente, ...(p.web ? { url: p.web } : {}) } } : {}),
  };
}

export function blogPosting(origin: string, a: { slug: string; titulo: string; descripcion: string; fecha: Date; actualizado?: Date; autor: string; image: string }): Json {
  const i = ids(origin);
  return {
    '@type': 'BlogPosting',
    '@id': `${origin}/archivo/${a.slug}/#article`,
    headline: a.titulo,
    description: a.descripcion,
    datePublished: a.fecha.toISOString(),
    dateModified: (a.actualizado ?? a.fecha).toISOString(),
    inLanguage: 'es-ES',
    mainEntityOfPage: `${origin}/archivo/${a.slug}/`,
    image: a.image,
    author: { '@id': i.person(a.autor) },
    publisher: { '@id': i.org },
  };
}

/** Envuelve entidades en un único @graph. */
export const graph = (...nodes: (Json | Json[] | undefined)[]): Json => ({
  '@context': 'https://schema.org',
  '@graph': nodes.flat().filter(Boolean),
});
