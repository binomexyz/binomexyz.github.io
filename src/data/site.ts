// Hechos de entidad (NAP + redes). Única fuente para UI, JSON-LD y llms.txt.
import { es } from '../i18n/copy/es';

// ⚠ Pendiente de decidir: teléfono público (en Webflow el texto y el enlace tel: difieren).
export const site = {
  name: 'Binōme',
  legalName: 'Binōme Studio',
  domain: 'binome.xyz',
  tagline: es.tagline,
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
      role: es.fundadores.tom.role,
      jobTitle: es.fundadores.tom.jobTitle,
      bio: es.fundadores.tom.bio,
    },
    {
      id: 'betsabe',
      name: 'Betsabé Meneses',
      alias: 'Betsabé',
      role: es.fundadores.betsabe.role,
      jobTitle: es.fundadores.betsabe.jobTitle,
      bio: es.fundadores.betsabe.bio,
    },
  ],
} as const;

export const nav = [
  { key: 'proyectos', label: 'proyectos', href: '/proyectos/' },
  { key: 'servicios', label: 'servicios', href: '/servicios/' },
  { key: 'nosotros', label: 'nosotros', href: '/nosotros/' },
  { key: 'contacto', label: 'contacto', href: '/contacto/' },
] as const;
