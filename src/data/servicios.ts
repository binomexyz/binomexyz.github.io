// Servicios en español (idioma base). Los textos viven en src/i18n/copy/es.ts; las traducciones, en fr.ts y en.ts.
// Color por servicio: usa la paleta secundaria (antes Páginas web y Estrategia repetían lavanda).
import { es, tonosServicio, type Servicio as ServicioCopy, type ServicioSlug } from '../i18n/copy/es';

export type Servicio = ServicioCopy & {
  slug: ServicioSlug;
  tono: 'coral' | 'lavender' | 'yellow' | 'green';
  schemaType: string;
};

export const servicios: Servicio[] = (Object.keys(es.servicios.items) as ServicioSlug[]).map((slug) => ({
  slug,
  tono: tonosServicio[slug],
  schemaType: 'Service',
  ...es.servicios.items[slug],
}));

export const servicioPorSlug = (slug: string) => servicios.find((s) => s.slug === slug);
