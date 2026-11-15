// Servicios. Textos migrados de binome.xyz/servicios y reordenados (01–04 coherentes).
// Color por servicio: usa la paleta secundaria (antes Páginas web y Estrategia repetían lavanda).
export type Servicio = {
  slug: string;
  nombre: string;
  tono: 'coral' | 'lavender' | 'yellow' | 'green';
  resumen: string; // 1 frase (tarjetas, llms.txt, JSON-LD)
  descripcion: string[]; // párrafos de la página de detalle
  incluye: string[];
  paraQuien: string;
  metaTitle: string;
  metaDescription: string;
  schemaType: string;
};

export const servicios: Servicio[] = [
  {
    slug: 'branding',
    nombre: 'Branding',
    tono: 'coral',
    resumen: 'Marcas claras y coherentes que te diferencian y conectan con tu audiencia.',
    descripcion: [
      'Un branding sólido transmite confianza y coherencia en cada punto de contacto.',
      'Desde el logo hasta el tono de voz, te ayudamos a construir una identidad clara, memorable y con criterio.',
    ],
    incluye: ['Logotipo', 'Estrategia de marca', 'Brandbook', 'Tono de voz'],
    paraQuien: 'Empresas que han crecido más que su imagen y necesitan una marca a la altura de su negocio.',
    metaTitle: 'Branding en Madrid: identidad de marca con criterio | Binōme',
    metaDescription:
      'Creamos identidades de marca claras y coherentes: logotipo, estrategia, tono de voz y brandbook. Estudio boutique en Madrid.',
    schemaType: 'Service',
  },
  {
    slug: 'paginas-web',
    nombre: 'Páginas web',
    tono: 'lavender',
    resumen: 'Webs pensadas para atraer clientes, generar confianza y convertir visitas en oportunidades reales.',
    descripcion: [
      'Diseñamos y construimos sitios rápidos, seguros y optimizados, pensados para generar confianza desde el primer segundo y convertir visitas en clientes.',
      'Estructura sólida, SEO técnico, accesibilidad y rendimiento forman parte de cada proyecto, no son un extra.',
    ],
    incluye: ['Arquitectura web', 'CMS', 'Marketplace', 'Landing pages', 'SEO técnico', 'Accesibilidad'],
    paraQuien: 'Negocios que quieren una web que trabaje por ellos: que se encuentre, se entienda y convierta.',
    metaTitle: 'Diseño y desarrollo web en Madrid: rápido y accesible | Binōme',
    metaDescription:
      'Diseñamos y construimos webs rápidas, accesibles y optimizadas para SEO: arquitectura, CMS, landing pages y marketplace. Estudio en Madrid.',
    schemaType: 'Service',
  },
  {
    slug: 'producto-digital',
    nombre: 'Producto digital',
    tono: 'yellow',
    resumen: 'Experiencias claras y fáciles de usar que tus clientes entienden a la primera.',
    descripcion: [
      'El diseño digital es la base de una presencia online que inspira confianza y genera resultados.',
      'Unimos estrategia y creatividad para que tu web, app o tienda online sea clara, atractiva y eficaz.',
    ],
    incluye: ['Diseño de experiencia (UX)', 'Diseño de interfaz (UI)', 'Prototipos interactivos', 'Design systems'],
    paraQuien: 'Equipos que lanzan o rediseñan una app, plataforma o tienda online y necesitan criterio de producto.',
    metaTitle: 'Diseño UX/UI y producto digital en Madrid | Binōme',
    metaDescription:
      'Diseño de experiencia (UX), interfaz (UI), prototipos interactivos y design systems para webs, apps y tiendas online.',
    schemaType: 'Service',
  },
  {
    slug: 'estrategia-digital',
    nombre: 'Estrategia digital',
    tono: 'green',
    resumen: 'Sistemas de contenido y plantillas para que tu marca se vea igual de bien en cada canal.',
    descripcion: [
      'Tu marca no puede verse distinta en cada canal.',
      'Diseñamos un sistema de contenido y presencia digital —redes sociales, plantillas, tono de voz— que mantiene tu marca coherente y reconocible allá donde te busquen, con el mismo estándar que tu web corporativa.',
    ],
    incluye: ['Calendario editorial', 'Diseño personalizado', 'Plantillas para redes', 'Métricas'],
    paraQuien: 'Marcas que ya tienen identidad y web, y necesitan sostener esa calidad en redes y campañas.',
    metaTitle: 'Estrategia digital y contenido de marca en Madrid | Binōme',
    metaDescription:
      'Sistemas de contenido, calendario editorial y plantillas para redes que mantienen tu marca coherente en todos los canales.',
    schemaType: 'Service',
  },
];

export const servicioPorSlug = (slug: string) => servicios.find((s) => s.slug === slug);
