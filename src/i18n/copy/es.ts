// Contenido de página en español: fuente de verdad. fr.ts y en.ts deben cumplir `typeof es`.
// ⚠ Los bloques marcados "VALIDAR" son propuestas de copy derivadas de la web actual: Tom y Betsabé deben confirmarlos.

type Tono = 'coral' | 'lavender' | 'yellow' | 'green';
export type Servicio = {
  nombre: string;
  resumen: string; // 1 frase (tarjetas, llms.txt, JSON-LD)
  descripcion: string[]; // párrafos de la página de detalle
  incluye: string[];
  paraQuien: string;
  metaTitle: string;
  metaDescription: string;
};
export type ServicioSlug = 'branding' | 'paginas-web' | 'producto-digital' | 'estrategia-digital';
export const tonosServicio: Record<ServicioSlug, Tono> = {
  branding: 'coral',
  'paginas-web': 'lavender',
  'producto-digital': 'yellow',
  'estrategia-digital': 'green',
};

export const es = {
  tagline: 'Estudio digital boutique en Madrid',
  orgDescripcion:
    'Estudio digital boutique en Madrid formado por dos diseñadores. Branding, páginas web, producto digital (UX/UI) y estrategia digital para empresas que quieren ganar autoridad online.',
  slogan: 'Tu marca al nivel que tu negocio merece.',
  ogAlt: 'Binōme — estudio digital boutique en Madrid',
  catalogo: 'Servicios de Binōme',
  pais: 'España',
  conocimientos: ['Branding', 'Diseño web', 'Webflow', 'UX/UI', 'Design systems', 'Motion design', 'SEO técnico', 'Accesibilidad web'],
  sobreBinome: 'Sobre Binōme',
  contactoNombre: 'Contacto — Binōme',

  nav: { proyectos: 'proyectos', servicios: 'servicios', nosotros: 'nosotros', contacto: 'contacto' },

  fundadores: {
    tom: {
      role: 'Diseño y Web',
      jobTitle: 'Diseñador de producto digital y cofundador',
      bio: 'Más de 15 años creando productos digitales. Su experiencia en motion y cine aporta una mirada narrativa que convierte ideas complejas en marcas memorables.',
    },
    betsabe: {
      role: 'Branding y UX',
      jobTitle: 'Arquitecta y diseñadora UX, cofundadora',
      bio: 'Arquitecta de formación y diseñadora digital. Diseña flujos que se entienden sin esfuerzo, no solo interfaces atractivas.',
    },
  },

  home: {
    title: 'Binōme | Estudio de branding y diseño web en Madrid',
    description:
      'Estudio digital boutique en Madrid: branding, páginas web y producto digital para empresas que quieren ganar autoridad online.',
    h1: 'Tu marca al nivel que tu negocio <em class="acento">merece.</em>',
    lead: 'Branding, webs y producto digital para empresas que quieren transmitir online la misma calidad que en persona.',
    destacados: 'Proyectos destacados',
    estudio: 'Estudio digital',
    enunciado: 'Cada punto de contacto con tu cliente es una oportunidad.',
    enunciadoApoyo: 'En binōme, hacemos que donde quiera que te encuentren, sepan que eres tú.',
    serviciosTitulo: 'Lo que hacemos por ti',
    nuestrosServicios: 'Nuestros servicios',
    casosTitulo: 'Casos recientes',
    todosProyectos: 'Todos los proyectos',
    nosotrosTitulo: 'Dos diseñadores. Un solo criterio.',
    nosotrosTexto: 'Pensamos, diseñamos y construimos contigo cada parte de tu presencia digital.',
    conocenos: 'Conócenos',
    procesoTitulo: 'Así trabajamos contigo',
    porqueTitulo: 'Lo que nos hace diferentes',
    faqTitulo: 'Preguntas frecuentes',
    marquee: 'Proyectos y clientes',
    palabraOscura: 'dúo',
    casosAria: 'Casos recientes',
    porQueNosotros: [
      { titulo: 'Diseño estratégico, no improvisado', texto: 'Antes de diseñar, analizamos tu proyecto, tu negocio y a quién te diriges.' },
      { titulo: 'Proceso claro y acompañado', texto: 'Sabes en qué punto estamos en cada momento, sin lenguaje opaco.' },
      { titulo: 'Dos perfiles distintos, una misma misión', texto: 'Branding y UX por un lado, diseño y web por otro. Trabajamos juntos en todo el proyecto.' },
      { titulo: 'Seguimos contigo después de publicar', texto: 'Te acompañamos durante los primeros meses para que el proyecto funcione.' },
    ],
    // VALIDAR: fases genéricas coherentes con "Por qué elegirnos". Sin plazos ni cifras.
    proceso: [
      { titulo: 'Escuchamos', texto: 'Entendemos tu negocio, tu audiencia y lo que necesitas lograr.' },
      { titulo: 'Definimos', texto: 'Estrategia, estructura y criterio antes de abrir ninguna herramienta de diseño.' },
      { titulo: 'Diseñamos y construimos', texto: 'Marca, interfaz y web con un mismo sistema, probados en pantallas reales.' },
      { titulo: 'Publicamos y acompañamos', texto: 'Lanzamos contigo y seguimos cerca los primeros meses.' },
    ],
    // VALIDAR: respuestas prudentes, sin precios ni plazos.
    faqs: [
      {
        q: '¿Qué hace Binōme?',
        a: 'Binōme es un estudio digital boutique en Madrid formado por dos diseñadores. Hacemos branding, páginas web, producto digital (UX/UI) y estrategia digital para empresas que quieren transmitir online la misma calidad que ofrecen en persona.',
      },
      {
        q: '¿Con quién voy a trabajar?',
        a: 'Directamente con los dos socios, Álvaro Fabre (diseño y web) y Betsabé Meneses (branding y UX), sin intermediarios, desde el primer brief hasta el resultado final.',
      },
      {
        q: '¿Cuánto cuesta una web o una identidad de marca?',
        a: 'Depende del alcance, del contenido y de las funcionalidades. Cuéntanos tu proyecto y te respondemos en menos de 24 horas con una propuesta ajustada.',
      },
      {
        q: '¿Seguís trabajando conmigo cuando la web está publicada?',
        a: 'Sí. Acompañamos a los clientes durante los primeros meses tras la publicación para resolver dudas, ajustar y asegurar que el proyecto rinde como esperamos.',
      },
      {
        q: '¿Trabajáis en otros idiomas?',
        a: 'Trabajamos en español, francés e inglés.',
      },
    ],
  },

  servicios: {
    title: 'Servicios | Diseño web, branding y estrategia de marca — Binōme',
    description:
      'Branding, páginas web, producto digital y estrategia digital para empresas que quieren destacar online. Estudio boutique en Madrid.',
    h1: 'Te ayudamos a <em class="acento">crecer.</em>',
    lead: 'Cuatro servicios que se apoyan entre sí: una marca clara, una web que convierte, un producto que se entiende y una presencia que se sostiene.',
    migas: 'Servicios',
    aria: 'Servicios',
    detalleDe: (nombre: string) => `Detalle de ${nombre}`,
    paraQuien: 'Para quién',
    queIncluye: 'Qué incluye',
    otros: 'Otros servicios',
    items: {
      branding: {
        nombre: 'Branding',
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
      },
      'paginas-web': {
        nombre: 'Páginas web',
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
      },
      'producto-digital': {
        nombre: 'Producto digital',
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
      },
      'estrategia-digital': {
        nombre: 'Estrategia digital',
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
      },
    } satisfies Record<ServicioSlug, Servicio>,
  },

  proyectos: {
    title: 'Proyectos | Branding, UX/UI, web y motion — Binōme',
    description:
      'Casos de branding, diseño UX/UI, webs y motion de Binōme: de Contazara a Happy Life. Estudio digital boutique en Madrid.',
    h1: 'Convertimos ideas en <em class="acento">resultados</em>',
    migas: 'Proyectos',
    aria: 'Casos',
  },

  proyecto: {
    cliente: 'Cliente',
    sector: 'Sector',
    entregables: 'Entregables',
    web: 'Web',
    contexto: 'Contexto',
    reto: 'El reto',
    propuesta: 'Nuestra propuesta',
    resultados: 'Resultados',
    otros: 'Otros proyectos',
    testimonio: 'Testimonio del cliente',
    enPreparacion: 'Estamos preparando el caso completo.',
    borradorDev: (slug: string) =>
      'BORRADOR (solo visible en desarrollo): completar contexto, reto, propuesta, entregables, resultados medibles y mockups en src/assets/proyectos/' +
      slug +
      '/portada.jpg. Mientras esté en borrador, esta página va con noindex.',
  },

  nosotros: {
    title: 'Nosotros | Un dúo creativo con base en Madrid — Binōme',
    description:
      'Somos Binōme: Álvaro Fabre y Betsabé Meneses. Dos diseñadores con trato directo, criterio propio y compromiso real en cada proyecto.',
    h1: 'Somos Binōme. Un <em class="acento">dúo creativo</em> con base en Madrid.',
    migas: 'Nosotros',
    aria: 'Quiénes somos',
    p1: 'Después de años en agencias y proyectos muy distintos, decidimos hacer las cosas a nuestra manera: con trato directo, criterio propio y un compromiso real con cada proyecto. Sin capas. Sin intermediarios. Solo nosotros dos, desde el primer brief hasta el resultado final.',
    p2: 'Creamos experiencias digitales que fluyen, que conectan y que no se olvidan. Nos encanta el detalle, pero sobre todo nos mueve el resultado.',
    lema: 'Nunca solo. Siempre en Binōme.',
    equipoTitulo: 'Dos creadores, una visión compartida',
    valoresTitulo: 'Cómo entendemos el trabajo',
    valores: [
      { t: 'Trato directo', d: 'Hablas con quienes diseñan y construyen tu proyecto. Sin intermediarios.' },
      { t: 'Criterio propio', d: 'Opinamos, proponemos y razonamos cada decisión de diseño.' },
      { t: 'Compromiso real', d: 'Cada proyecto es nuestro desde el primer brief hasta el resultado final.' },
      { t: 'Atención al detalle', d: 'Nos encanta el detalle, pero sobre todo nos mueve el resultado.' },
    ],
  },

  contacto: {
    title: 'Contacto | Cuéntanos tu proyecto — Binōme',
    description:
      '¿Necesitas rediseñar tu marca o tu web? Escríbenos o agenda una reunión: te respondemos en menos de 24 horas. Estudio en Madrid.',
    h1: 'Contacto',
    lead: 'Ya sea que quieras hablar sobre un nuevo proyecto o simplemente conocernos un poco más, nos encantaría saber de ti. Respondemos en menos de 24 horas.',
    aria: 'Formas de contacto',
    escribenos: 'Escríbenos',
    redes: 'Redes',
    reunete: 'Reúnete con nosotros',
    agenda: 'Agenda una reunión',
    asuntoReunion: 'Agendar una reunión — Binōme',
    asuntoForm: 'Nuevo mensaje desde binome.xyz',
    formTitulo: 'Deja un mensaje',
    noRellenar: 'No rellenar',
    nombre: 'Nombre',
    errorNombre: 'Dinos cómo te llamas.',
    email: 'Email',
    errorEmail: 'Necesitamos tu email para responderte.',
    errorEmailFormato: 'Revisa el email: parece que falta algo (nombre@empresa.com).',
    ayudaEmail: 'Te contestamos aquí.',
    telefono: 'Teléfono',
    opcional: '(opcional)',
    mensaje: 'Cuéntanos tu proyecto',
    errorMensaje: 'Cuéntanos brevemente qué necesitas.',
    legalPre: 'Usaremos tus datos solo para responderte. Más información en el ',
    legalEnlace: 'aviso legal y privacidad',
    legalPost: '.',
  },

  archivo: {
    title: 'Archivo | Inspiración, consejos y procesos creativos — Binōme',
    description:
      'Ideas, guías y recursos sobre diseño web, branding, UX/UI, motion e IA desde el estudio. Aprende con lo que usamos cada día.',
    h1: 'Archivo',
    lead: 'Inspiración, consejos y procesos creativos.',
    migas: 'Archivo',
    aria: 'Artículos',
    filtrar: 'Filtrar por categoría',
    todo: 'Todo',
    soloEs: '', // solo FR/EN
  },

  legal: {
    title: 'Aviso legal y privacidad | Binōme',
    description: 'Aviso legal y política de privacidad de Binōme.',
    h1: 'Aviso legal y privacidad',
    pendiente:
      'PENDIENTE DE MIGRAR: pegar aquí el texto legal íntegro vigente de la web actual de Webflow y revisarlo (titular, NIF, domicilio, base jurídica, derechos, cookies reales del nuevo sitio). Esta página va con noindex hasta entonces.',
  },
  cookies: {
    title: 'Política de cookies | Binōme',
    description: 'Información sobre el uso de cookies en binome.xyz.',
    h1: 'Política de cookies',
    pendiente:
      'PENDIENTE DE MIGRAR: pegar aquí el texto legal íntegro vigente de la web actual de Webflow y revisarlo (titular, NIF, domicilio, base jurídica, derechos, cookies reales del nuevo sitio). Esta página va con noindex hasta entonces.',
  },
};

export type Copy = typeof es;
