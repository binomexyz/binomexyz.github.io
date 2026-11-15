import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { servicios } from '../data/servicios';
import { getProyectos, getArticulos } from '../lib/proyectos';

// llms.txt (https://llmstxt.org): índice curado y legible por máquinas. Se genera desde el contenido, así nunca queda desactualizado.
export const GET: APIRoute = async ({ site: origin }) => {
  const o = (origin ?? new URL('https://binome.xyz')).toString().replace(/\/$/, '');
  const proyectos = (await getProyectos('es')).filter((p) => !p.data.borrador);
  const articulos = await getArticulos('es');
  const l: string[] = [];
  l.push(`# ${site.name}`, '');
  l.push(`> ${site.name} es un estudio digital boutique en ${site.city} (España), formado por dos diseñadores: ${site.founders.map((f) => `${f.name} (${f.role})`).join(' y ')}. Ofrece branding, páginas web, producto digital (UX/UI) y estrategia digital para empresas que quieren transmitir online la misma calidad que ofrecen en persona. Trabaja en español, francés e inglés.`, '');
  l.push('Datos de entidad:', '', `- Nombre: ${site.name}`, `- Ubicación: ${site.city}, ${site.country}`, `- Email: ${site.email}`, `- Instagram: ${site.social.instagram}`, `- LinkedIn: ${site.social.linkedin}`, '');
  l.push('## Servicios', '', ...servicios.map((s) => `- [${s.nombre}](${o}/servicios/${s.slug}/): ${s.resumen}`), '');
  if (proyectos.length) l.push('## Proyectos', '', ...proyectos.map((p) => `- [${p.data.nombre}](${o}/proyecto/${p.slug}/): ${p.data.resumen}`), '');
  l.push('## Estudio', '', `- [Nosotros](${o}/nosotros/): quiénes somos y cómo trabajamos`, `- [Contacto](${o}/contacto/): formulario, email y agenda de reuniones`, '');
  if (articulos.length) l.push('## Archivo (artículos)', '', ...articulos.map((a) => `- [${a.data.titulo}](${o}/archivo/${a.slug}/): ${a.data.descripcion}`), '');
  l.push('## Opcional', '', `- [Texto completo para LLMs](${o}/llms-full.txt)`, '');
  return new Response(l.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
