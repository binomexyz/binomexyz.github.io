// Cadenas de interfaz. ES completo; FR/EN sembrados para activar el multilingüe sin tocar componentes.
import type { Locale } from './config';

const es = {
  skip: 'Saltar al contenido',
  menu: 'menú',
  cerrar: 'Cerrar',
  menuTitulo: 'Menú principal',
  navPrincipal: 'Navegación principal',
  volverArriba: 'Volver arriba',
  verProyectos: 'Ver proyectos',
  empiezaProyecto: 'Empieza tu proyecto',
  verCaso: 'Ver caso',
  verDetalle: 'Ver detalle',
  contactanos: 'Contáctanos',
  ctaTitulo: '¿Listo para <em class="acento">crear</em> algo nuevo?',
  ctaTexto: 'Hablemos de tu proyecto',
  legal: 'Aviso legal y privacidad',
  cookies: 'Política de cookies',
  archivo: 'archivo',
  migas: 'Ruta de navegación',
  enviar: 'Enviar mensaje',
  enviando: 'Enviando…',
  gracias: '¡Gracias! Hemos recibido tu mensaje y te responderemos en menos de 24 horas.',
  errorEnvio: 'No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbenos a hola@binome.xyz.',
  derechos: 'Todos los derechos reservados',
};

const fr: typeof es = {
  ...es, // TODO traducir: mientras tanto cae al español
  skip: 'Aller au contenu',
  menu: 'menu',
  cerrar: 'Fermer',
  menuTitulo: 'Menu principal',
  navPrincipal: 'Navigation principale',
  volverArriba: 'Retour en haut',
  verProyectos: 'Voir les projets',
  empiezaProyecto: 'Lancez votre projet',
  contactanos: 'Contactez-nous',
};

const en: typeof es = {
  ...es, // TODO traducir
  skip: 'Skip to content',
  menu: 'menu',
  cerrar: 'Close',
  menuTitulo: 'Main menu',
  navPrincipal: 'Main navigation',
  volverArriba: 'Back to top',
  verProyectos: 'See projects',
  empiezaProyecto: 'Start your project',
  contactanos: 'Get in touch',
};

export const ui = { es, fr, en } as const;
export type UiKey = keyof typeof es;
export const t = (locale: Locale, key: UiKey): string => ui[locale][key];
