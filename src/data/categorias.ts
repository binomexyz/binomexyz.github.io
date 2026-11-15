// Categorías del Archivo (filtros actuales de binome.xyz/archivo). Cada una es una URL indexable.
export const categorias = [
  { slug: 'diseno-ux-ui', nombre: 'Diseño UX UI', tono: 'coral', descripcion: 'Experiencia de usuario, interfaces y design systems.' },
  { slug: 'web', nombre: 'Web', tono: 'lavender', descripcion: 'Diseño web, Webflow, rendimiento y SEO técnico.' },
  { slug: 'branding', nombre: 'Branding', tono: 'yellow', descripcion: 'Identidad de marca, estrategia y posicionamiento.' },
  { slug: 'motion', nombre: 'Motion', tono: 'green', descripcion: 'Motion design, Lottie y GSAP para interfaces.' },
  { slug: 'ia', nombre: 'IA', tono: 'lavender', descripcion: 'Inteligencia artificial aplicada al diseño.' },
  { slug: 'otros', nombre: 'Otros', tono: 'ink', descripcion: 'Inspiración, series y reflexiones del estudio.' },
] as const;

export type CategoriaSlug = (typeof categorias)[number]['slug'];
export const categoriaPorSlug = (slug: string) => categorias.find((c) => c.slug === slug);
