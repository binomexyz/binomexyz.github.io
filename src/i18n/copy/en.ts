// English translation (British spelling). PROVISIONAL: AI-drafted, to be reviewed by a native speaker (see estado.mjs).
import type { Copy } from './es';

export const en: Copy = {
  tagline: 'Boutique digital studio in Madrid',
  orgDescripcion:
    'A boutique digital studio in Madrid run by two designers. Branding, websites, digital product (UX/UI) and digital strategy for companies that want to build authority online.',
  slogan: 'Your brand, at the level your business deserves.',
  ogAlt: 'Binōme — boutique digital studio in Madrid',
  catalogo: 'Binōme services',
  pais: 'Spain',
  conocimientos: ['Branding', 'Web design', 'Webflow', 'UX/UI', 'Design systems', 'Motion design', 'Technical SEO', 'Web accessibility'],
  sobreBinome: 'About Binōme',
  contactoNombre: 'Contact — Binōme',

  nav: { proyectos: 'projects', servicios: 'services', nosotros: 'about', contacto: 'contact' },

  fundadores: {
    tom: {
      role: 'Design and Web',
      jobTitle: 'Digital product designer and co-founder',
      bio: 'Over 15 years creating digital products. His background in motion and film brings a storyteller’s eye that turns complex ideas into memorable brands.',
    },
    betsabe: {
      role: 'Branding and UX',
      jobTitle: 'Architect and UX designer, co-founder',
      bio: 'Trained as an architect, now a digital designer. She designs flows that make sense without effort, not just attractive interfaces.',
    },
  },

  home: {
    title: 'Binōme | Branding and web design studio in Madrid',
    description:
      'Boutique digital studio in Madrid: branding, websites and digital product for companies that want to build authority online.',
    h1: 'Your brand, at the level your business <em class="acento">deserves.</em>',
    lead: 'Branding, websites and digital product for companies that want to deliver the same quality online as they do in person.',
    destacados: 'Featured projects',
    estudio: 'Digital studio',
    enunciado: 'Every touchpoint with your customer is an opportunity.',
    enunciadoApoyo: 'At binōme, we make sure that wherever people find you, they know it’s you.',
    serviciosTitulo: 'What we do for you',
    nuestrosServicios: 'Our services',
    casosTitulo: 'Recent work',
    todosProyectos: 'All projects',
    nosotrosTitulo: 'Two designers. One point of view.',
    nosotrosTexto: 'We think, design and build every part of your digital presence together with you.',
    conocenos: 'Meet us',
    procesoTitulo: 'How we work with you',
    porqueTitulo: 'What makes us different',
    faqTitulo: 'Frequently asked questions',
    marquee: 'Projects and clients',
    palabraOscura: 'duo',
    casosAria: 'Recent work',
    porQueNosotros: [
      { titulo: 'Strategic design, never improvised', texto: 'Before we design, we study your project, your business and who you are speaking to.' },
      { titulo: 'A clear process, with support', texto: 'You know where we are at every moment, with no opaque jargon.' },
      { titulo: 'Two different profiles, one mission', texto: 'Branding and UX on one side, design and web on the other. We work together on the whole project.' },
      { titulo: 'We stay with you after launch', texto: 'We support you through the first months so the project works.' },
    ],
    proceso: [
      { titulo: 'We listen', texto: 'We understand your business, your audience and what you need to achieve.' },
      { titulo: 'We define', texto: 'Strategy, structure and direction before we open a single design tool.' },
      { titulo: 'We design and build', texto: 'Brand, interface and website on one system, tested on real screens.' },
      { titulo: 'We launch and support', texto: 'We launch with you and stay close through the first months.' },
    ],
    faqs: [
      {
        q: 'What does Binōme do?',
        a: 'Binōme is a boutique digital studio in Madrid run by two designers. We do branding, websites, digital product (UX/UI) and digital strategy for companies that want to deliver the same quality online as they do in person.',
      },
      {
        q: 'Who will I be working with?',
        a: 'Directly with the two partners, Álvaro Fabre (design and web) and Betsabé Meneses (branding and UX), with no intermediaries, from the first brief to the final result.',
      },
      {
        q: 'How much does a website or a brand identity cost?',
        a: 'It depends on scope, content and functionality. Tell us about your project and we will reply within 24 hours with a tailored proposal.',
      },
      {
        q: 'Do you keep working with me once the site is live?',
        a: 'Yes. We support clients through the first months after launch to answer questions, fine-tune and make sure the project performs as we expect.',
      },
      {
        q: 'Do you work in other languages?',
        a: 'We work in Spanish, French and English.',
      },
    ],
  },

  servicios: {
    title: 'Services | Web design, branding and brand strategy — Binōme',
    description:
      'Branding, websites, digital product and digital strategy for companies that want to stand out online. Boutique studio in Madrid.',
    h1: 'We help you <em class="acento">grow.</em>',
    lead: 'Four services that support each other: a clear brand, a website that converts, a product people understand and a presence that lasts.',
    migas: 'Services',
    aria: 'Services',
    detalleDe: (nombre: string) => `Details: ${nombre}`,
    paraQuien: 'Who it’s for',
    queIncluye: 'What’s included',
    otros: 'Other services',
    items: {
      branding: {
        nombre: 'Branding',
        resumen: 'Clear, consistent brands that set you apart and connect with your audience.',
        descripcion: [
          'Strong branding builds trust and consistency at every touchpoint.',
          'From the logo to the tone of voice, we help you build an identity that is clear, memorable and well thought through.',
        ],
        incluye: ['Logo', 'Brand strategy', 'Brandbook', 'Tone of voice'],
        paraQuien: 'Companies that have outgrown their image and need a brand that matches their business.',
        metaTitle: 'Branding in Madrid: brand identity with a point of view | Binōme',
        metaDescription:
          'We create clear, consistent brand identities: logo, strategy, tone of voice and brandbook. Boutique studio in Madrid.',
      },
      'paginas-web': {
        nombre: 'Websites',
        resumen: 'Websites built to attract customers, build trust and turn visits into real opportunities.',
        descripcion: [
          'We design and build fast, secure, optimised sites made to build trust from the very first second and turn visitors into customers.',
          'Solid structure, technical SEO, accessibility and performance are part of every project, not extras.',
        ],
        incluye: ['Web architecture', 'CMS', 'Marketplace', 'Landing pages', 'Technical SEO', 'Accessibility'],
        paraQuien: 'Businesses that want a website that works for them: easy to find, easy to understand and built to convert.',
        metaTitle: 'Web design and development in Madrid: fast and accessible | Binōme',
        metaDescription:
          'We design and build fast, accessible, SEO-optimised websites: architecture, CMS, landing pages and marketplace. Studio in Madrid.',
      },
      'producto-digital': {
        nombre: 'Digital product',
        resumen: 'Clear, easy-to-use experiences your customers understand at first glance.',
        descripcion: [
          'Digital design is the foundation of an online presence that inspires trust and delivers results.',
          'We combine strategy and creativity so your website, app or online shop is clear, attractive and effective.',
        ],
        incluye: ['Experience design (UX)', 'Interface design (UI)', 'Interactive prototypes', 'Design systems'],
        paraQuien: 'Teams launching or redesigning an app, platform or online shop who need product thinking.',
        metaTitle: 'UX/UI design and digital product in Madrid | Binōme',
        metaDescription:
          'Experience design (UX), interface design (UI), interactive prototypes and design systems for websites, apps and online shops.',
      },
      'estrategia-digital': {
        nombre: 'Digital strategy',
        resumen: 'Content systems and templates so your brand looks just as good on every channel.',
        descripcion: [
          'Your brand can’t look different on every channel.',
          'We design a content and digital presence system — social media, templates, tone of voice — that keeps your brand consistent and recognisable wherever people look for you, to the same standard as your corporate website.',
        ],
        incluye: ['Editorial calendar', 'Custom design', 'Social media templates', 'Metrics'],
        paraQuien: 'Brands that already have an identity and a website and need to keep that quality across social media and campaigns.',
        metaTitle: 'Digital strategy and brand content in Madrid | Binōme',
        metaDescription:
          'Content systems, editorial calendar and social media templates that keep your brand consistent across every channel.',
      },
    },
  },

  proyectos: {
    title: 'Projects | Branding, UX/UI, web and motion — Binōme',
    description:
      'Branding, UX/UI design, web and motion case studies by Binōme: from Contazara to Happy Life. Boutique digital studio in Madrid.',
    h1: 'We turn ideas into <em class="acento">results</em>',
    migas: 'Projects',
    aria: 'Case studies',
  },

  proyecto: {
    cliente: 'Client',
    sector: 'Sector',
    entregables: 'Deliverables',
    web: 'Website',
    contexto: 'Background',
    reto: 'The challenge',
    propuesta: 'Our approach',
    resultados: 'Results',
    otros: 'Other projects',
    testimonio: 'Client testimonial',
    enPreparacion: 'We are preparing the full case study.',
    borradorDev: (slug: string) =>
      'DRAFT (visible in development only): complete background, challenge, approach, deliverables, measurable results and mockups in src/assets/proyectos/' +
      slug +
      '/portada.jpg. While it is a draft, this page is noindex.',
  },

  nosotros: {
    title: 'About | A creative duo based in Madrid — Binōme',
    description:
      'We are Binōme: Álvaro Fabre and Betsabé Meneses. Two designers with a direct approach, a point of view and real commitment to every project.',
    h1: 'We are Binōme. A <em class="acento">creative duo</em> based in Madrid.',
    migas: 'About',
    aria: 'Who we are',
    p1: 'After years in agencies and on very different projects, we decided to do things our own way: a direct approach, a point of view and real commitment to every project. No layers. No intermediaries. Just the two of us, from the first brief to the final result.',
    p2: 'We create digital experiences that flow, connect and stay with people. We love the detail, but what really drives us is the result.',
    lema: 'Never alone. Always in Binōme.',
    equipoTitulo: 'Two creators, one shared vision',
    valoresTitulo: 'How we see the work',
    valores: [
      { t: 'Direct contact', d: 'You talk to the people who design and build your project. No intermediaries.' },
      { t: 'A point of view', d: 'We give our opinion, make proposals and explain every design decision.' },
      { t: 'Real commitment', d: 'Every project is ours from the first brief to the final result.' },
      { t: 'Attention to detail', d: 'We love the detail, but what really drives us is the result.' },
    ],
  },

  contacto: {
    title: 'Contact | Tell us about your project — Binōme',
    description:
      'Need to rethink your brand or your website? Write to us or book a meeting: we reply within 24 hours. Studio in Madrid.',
    h1: 'Contact',
    lead: 'Whether you want to talk about a new project or simply get to know us a little better, we’d love to hear from you. We reply within 24 hours.',
    aria: 'Ways to get in touch',
    escribenos: 'Write to us',
    redes: 'Social',
    reunete: 'Meet us',
    agenda: 'Book a meeting',
    asuntoReunion: 'Book a meeting — Binōme',
    asuntoForm: 'New message from binome.xyz',
    formTitulo: 'Leave a message',
    noRellenar: 'Do not fill in',
    nombre: 'Name',
    errorNombre: 'Tell us your name.',
    email: 'Email',
    errorEmail: 'We need your email to reply.',
    errorEmailFormato: 'Check your email: something seems to be missing (name@company.com).',
    ayudaEmail: 'We’ll reply here.',
    telefono: 'Phone',
    opcional: '(optional)',
    mensaje: 'Tell us about your project',
    errorMensaje: 'Briefly tell us what you need.',
    legalPre: 'We will only use your data to reply to you. More information in the ',
    legalEnlace: 'legal notice and privacy policy',
    legalPost: '.',
  },

  archivo: {
    title: 'Archive | Inspiration, advice and creative processes — Binōme',
    description:
      'Ideas, guides and resources on web design, branding, UX/UI, motion and AI, from the studio.',
    h1: 'Archive',
    lead: 'Inspiration, advice and creative processes.',
    migas: 'Archive',
    aria: 'Articles',
    filtrar: 'Filter by category',
    todo: 'All',
    soloEs: 'For now, our articles are only available in Spanish.',
  },

  legal: {
    title: 'Legal notice and privacy | Binōme',
    description: 'Legal notice and privacy policy of Binōme.',
    h1: 'Legal notice and privacy',
    pendiente:
      'TO MIGRATE: paste here the full legal text currently in force on the existing Webflow site and review it (owner, tax ID, address, legal basis, rights, real cookies of the new site). This page stays noindex until then.',
  },
  cookies: {
    title: 'Cookie policy | Binōme',
    description: 'Information about the use of cookies on binome.xyz.',
    h1: 'Cookie policy',
    pendiente:
      'TO MIGRATE: paste here the full legal text currently in force on the existing Webflow site and review it (owner, tax ID, address, legal basis, rights, real cookies of the new site). This page stays noindex until then.',
  },
};
