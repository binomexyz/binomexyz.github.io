import { getCollection, type CollectionEntry } from 'astro:content';

export type Proyecto = CollectionEntry<'proyectos'> & { slug: string };

/** Slug a partir del id del loader (es/contazara → contazara). La URL pública es /proyecto/<slug>/ como en Webflow. */
export const slugDe = (id: string) => id.split('/').pop()!.replace(/\.md$/, '');

export async function getProyectos(lang: 'es' | 'fr' | 'en' = 'es'): Promise<Proyecto[]> {
  const all = await getCollection('proyectos', (p) => p.data.lang === lang);
  return all.map((p) => ({ ...p, slug: slugDe(p.id) })).sort((a, b) => a.data.orden - b.data.orden);
}

export type Articulo = CollectionEntry<'articulos'> & { slug: string };
export async function getArticulos(lang: 'es' | 'fr' | 'en' = 'es'): Promise<Articulo[]> {
  const all = await getCollection('articulos', (a) => a.data.lang === lang && !a.data.borrador);
  return all.map((a) => ({ ...a, slug: slugDe(a.id) })).sort((a, b) => b.data.fecha.getTime() - a.data.fecha.getTime());
}
