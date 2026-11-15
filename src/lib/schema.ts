// Constructores de JSON-LD (schema.org). Un único grafo de entidades enlazadas por @id,
// pensado para buscadores y para motores de respuesta/LLMs (GEO/AEO).
import { site } from '../data/site';
import { servicios } from '../data/servicios';

type Json = Record<string, unknown>;

export const ids = (origin: string) => ({
  org: `${origin}/#organization`,
  web: `${origin}/#website`,
  person: (id: string) => `${origin}/nosotros/#${id}`,
});

export function organization(origin: string): Json {
  const i = ids(origin);
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': i.org,
    name: site.name,
    legalName: site.legalName,
    alternateName: ['Binome', 'Binōme Studio'],
    url: `${origin}/`,
    description:
      'Estudio digital boutique en Madrid formado por dos diseñadores. Branding, páginas web, producto digital (UX/UI) y estrategia digital para empresas que quieren ganar autoridad online.',
    slogan: 'Tu marca al nivel que tu negocio merece.',
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {}),
    foundingDate: String(site.founded),
    address: { '@type': 'PostalAddress', addressLocality: site.city, addressRegion: site.region, addressCountry: site.country },
    areaServed: [
      { '@type': 'City', name: 'Madrid' },
      { '@type': 'Country', name: 'España' },
    ],
    knowsLanguage: [...site.languages],
    sameAs: Object.values(site.social),
    founder: site.founders.map((f) => ({ '@id': i.person(f.id) })),
    employee: site.founders.map((f) => ({ '@id': i.person(f.id) })),
    knowsAbout: ['Branding', 'Diseño web', 'Webflow', 'UX/UI', 'Design systems', 'Motion design', 'SEO técnico', 'Accesibilidad web'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Binōme',
      itemListElement: servicios.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.nombre, description: s.resumen, url: `${origin}/servicios/${s.slug}/` },
      })),
    },
  };
}

export function website(origin: string): Json {
  const i = ids(origin);
  return {
    '@type': 'WebSite',
    '@id': i.web,
    url: `${origin}/`,
    name: site.name,
    inLanguage: 'es-ES',
    publisher: { '@id': i.org },
  };
}

export function persons(origin: string): Json[] {
  const i = ids(origin);
  return site.founders.map((f) => ({
    '@type': 'Person',
    '@id': i.person(f.id),
    name: f.name,
    alternateName: f.alias,
    jobTitle: f.jobTitle,
    description: f.bio,
    worksFor: { '@id': i.org },
    url: `${origin}/nosotros/`,
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

export function service(origin: string, s: (typeof servicios)[number]): Json {
  return {
    '@type': 'Service',
    '@id': `${origin}/servicios/${s.slug}/#service`,
    name: s.nombre,
    description: s.resumen,
    url: `${origin}/servicios/${s.slug}/`,
    provider: { '@id': ids(origin).org },
    areaServed: { '@type': 'Country', name: 'España' },
    serviceType: s.nombre,
  };
}

export function creativeWork(origin: string, p: { slug: string; nombre: string; resumen: string; cliente?: string; web?: string; categorias: string[] }): Json {
  return {
    '@type': 'CreativeWork',
    '@id': `${origin}/proyecto/${p.slug}/#work`,
    name: p.nombre,
    description: p.resumen,
    url: `${origin}/proyecto/${p.slug}/`,
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
