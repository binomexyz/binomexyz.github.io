import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { servicios } from '../data/servicios';
import { faqs, porQueNosotros, proceso } from '../data/home';
import { getProyectos, getArticulos } from '../lib/proyectos';

// Versión extendida: el contenido esencial de la web en Markdown plano, sin navegación ni ruido.
export const GET: APIRoute = async ({ site: origin }) => {
  const o = (origin ?? new URL('https://binome.xyz')).toString().replace(/\/$/, '');
  const proyectos = (await getProyectos('es')).filter((p) => !p.data.borrador);
  const articulos = await getArticulos('es');
  const l: string[] = [`# ${site.name} — contenido completo`, '', `Fuente: ${o}/`, ''];
  l.push('## Quiénes somos', '', ...site.founders.map((f) => `- **${f.name}** (${f.role}): ${f.bio}`), '');
  l.push('## Servicios', '');
  for (const s of servicios) l.push(`### ${s.nombre}`, '', ...s.descripcion, '', `Incluye: ${s.incluye.join(', ')}.`, `Para quién: ${s.paraQuien}`, `URL: ${o}/servicios/${s.slug}/`, '');
  l.push('## Cómo trabajamos', '', ...proceso.map((p, i) => `${i + 1}. **${p.titulo}**: ${p.texto}`), '');
  l.push('## Por qué elegirnos', '', ...porQueNosotros.map((p) => `- **${p.titulo}**: ${p.texto}`), '');
  if (proyectos.length) {
    l.push('## Proyectos', '');
    for (const p of proyectos) l.push(`### ${p.data.nombre}`, '', p.data.resumen, ...(p.data.reto ? ['', `Reto: ${p.data.reto}`] : []), ...(p.data.propuesta ? ['', `Propuesta: ${p.data.propuesta}`] : []), '', `URL: ${o}/proyecto/${p.slug}/`, '');
  }
  l.push('## Preguntas frecuentes', '');
  for (const f of faqs) l.push(`**${f.q}**`, '', f.a, '');
  if (articulos.length) { l.push('## Artículos', ''); for (const a of articulos) l.push(`- [${a.data.titulo}](${o}/archivo/${a.slug}/): ${a.data.descripcion}`); l.push(''); }
  l.push('## Contacto', '', `Email: ${site.email}`, `Ubicación: ${site.city}, ${site.country}`, '');
  return new Response(l.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
