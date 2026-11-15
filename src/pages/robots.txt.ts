import type { APIRoute } from 'astro';

// Rastreadores de IA permitidos de forma explícita (decisión de visibilidad GEO: que los buscadores de respuesta puedan citar la web).
const ia = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'CCBot', 'Bytespider'];

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://binome.xyz')).toString().replace(/\/$/, '');
  // En staging (PUBLIC_NOINDEX=true) se bloquea todo para evitar contenido duplicado.
  if (import.meta.env.PUBLIC_NOINDEX === 'true') {
    return new Response('User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }
  const body = [
    '# robots.txt de binome.xyz',
    'User-agent: *',
    'Allow: /',
    'Disallow: /design-system/',
    '',
    '# Rastreadores de IA: permitidos',
    ...ia.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${origin}/sitemap-index.xml`,
    `# Resumen para LLMs: ${origin}/llms.txt`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
