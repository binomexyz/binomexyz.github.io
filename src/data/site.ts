// Hechos de entidad (NAP + redes). Única fuente para UI, JSON-LD y llms.txt.
// ⚠ Pendiente de decidir: teléfono público (en Webflow el texto y el enlace tel: difieren).
export const site = {
  name: 'Binōme',
  legalName: 'Binōme Studio',
  domain: 'binome.xyz',
  tagline: 'Estudio digital boutique en Madrid',
  email: 'hola@binome.xyz',
  phone: null as string | null, // p. ej. '+34 614 19 17 32' — confirmar antes de publicar
  city: 'Madrid',
  region: 'Comunidad de Madrid',
  country: 'ES',
  founded: 2023, // TODO confirmar año de fundación del estudio
  languages: ['es', 'fr', 'en'],
  social: {
    instagram: 'https://www.instagram.com/binome.xyz/',
    linkedin: 'https://www.linkedin.com/company/binomestudio',
    facebook: 'https://www.facebook.com/Binome.xyz',
  },
  founders: [
    {
      id: 'tom',
      name: 'Álvaro Fabre',
      alias: 'Tom',
      role: 'Diseño y Web',
      jobTitle: 'Diseñador de producto digital y cofundador',
      bio: 'Más de 15 años creando productos digitales. Su experiencia en motion y cine aporta una mirada narrativa que convierte ideas complejas en marcas memorables.',
    },
    {
      id: 'betsabe',
      name: 'Betsabé Meneses',
      alias: 'Betsabé',
      role: 'Branding y UX',
      jobTitle: 'Arquitecta y diseñadora UX, cofundadora',
      bio: 'Arquitecta de formación y diseñadora digital. Diseña flujos que se entienden sin esfuerzo, no solo interfaces atractivas.',
    },
  ],
} as const;

export const nav = [
  { key: 'proyectos', label: 'proyectos', href: '/proyectos/' },
  { key: 'servicios', label: 'servicios', href: '/servicios/' },
  { key: 'nosotros', label: 'nosotros', href: '/nosotros/' },
  { key: 'contacto', label: 'contacto', href: '/contacto/' },
] as const;
