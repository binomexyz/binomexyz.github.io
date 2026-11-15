// Traduction française. PROVISOIRE : rédigée par IA, à relire par une personne francophone (voir estado.mjs).
import type { Copy } from './es';

export const fr: Copy = {
  tagline: 'Studio digital boutique à Madrid',
  orgDescripcion:
    'Studio digital boutique à Madrid, composé de deux designers. Branding, sites web, produit digital (UX/UI) et stratégie digitale pour les entreprises qui veulent gagner en autorité en ligne.',
  slogan: 'Votre marque au niveau que votre activité mérite.',
  ogAlt: 'Binōme — studio digital boutique à Madrid',
  catalogo: 'Services de Binōme',
  pais: 'Espagne',
  conocimientos: ['Branding', 'Design web', 'Webflow', 'UX/UI', 'Design systems', 'Motion design', 'SEO technique', 'Accessibilité web'],
  sobreBinome: 'À propos de Binōme',
  contactoNombre: 'Contact — Binōme',

  nav: { proyectos: 'projets', servicios: 'services', nosotros: 'à propos', contacto: 'contact' },

  fundadores: {
    tom: {
      role: 'Design et Web',
      jobTitle: 'Designer de produits digitaux et cofondateur',
      bio: 'Plus de 15 ans à créer des produits digitaux. Son expérience du motion design et du cinéma apporte un regard narratif qui transforme des idées complexes en marques mémorables.',
    },
    betsabe: {
      role: 'Branding et UX',
      jobTitle: 'Architecte et designer UX, cofondatrice',
      bio: "Architecte de formation et designer digitale. Elle conçoit des parcours qui se comprennent sans effort, pas seulement de belles interfaces.",
    },
  },

  home: {
    title: 'Binōme | Studio de branding et de design web à Madrid',
    description:
      'Studio digital boutique à Madrid : branding, sites web et produit digital pour les entreprises qui veulent gagner en autorité en ligne.',
    h1: 'Votre marque au niveau que votre activité <em class="acento">mérite.</em>',
    lead: 'Branding, sites web et produit digital pour les entreprises qui veulent offrir en ligne la même qualité qu’en personne.',
    destacados: 'Projets à la une',
    estudio: 'Studio digital',
    enunciado: 'Chaque point de contact avec vos clients est une opportunité.',
    enunciadoApoyo: 'Chez binōme, nous faisons en sorte que, où qu’on vous trouve, on sache que c’est vous.',
    serviciosTitulo: 'Ce que nous faisons pour vous',
    nuestrosServicios: 'Nos services',
    casosTitulo: 'Réalisations récentes',
    todosProyectos: 'Tous les projets',
    nosotrosTitulo: 'Deux designers. Un seul regard.',
    nosotrosTexto: 'Nous pensons, concevons et construisons avec vous chaque élément de votre présence digitale.',
    conocenos: 'Faisons connaissance',
    procesoTitulo: 'Comment nous travaillons avec vous',
    porqueTitulo: 'Ce qui nous distingue',
    faqTitulo: 'Questions fréquentes',
    marquee: 'Projets et clients',
    palabraOscura: 'duo',
    casosAria: 'Réalisations récentes',
    porQueNosotros: [
      { titulo: 'Un design stratégique, jamais improvisé', texto: 'Avant de concevoir, nous analysons votre projet, votre activité et votre public.' },
      { titulo: 'Un processus clair et accompagné', texto: 'Vous savez où nous en sommes à chaque instant, sans jargon opaque.' },
      { titulo: 'Deux profils, une même mission', texto: 'Branding et UX d’un côté, design et web de l’autre. Nous travaillons ensemble sur tout le projet.' },
      { titulo: 'Nous restons à vos côtés après la mise en ligne', texto: 'Nous vous accompagnons pendant les premiers mois pour que le projet fonctionne.' },
    ],
    proceso: [
      { titulo: 'Nous écoutons', texto: 'Nous comprenons votre activité, votre public et ce que vous voulez accomplir.' },
      { titulo: 'Nous définissons', texto: 'Stratégie, structure et cap avant d’ouvrir le moindre outil de design.' },
      { titulo: 'Nous concevons et construisons', texto: 'Marque, interface et site reposent sur un même système, testé sur de vrais écrans.' },
      { titulo: 'Nous publions et accompagnons', texto: 'Nous lançons le projet avec vous et restons proches pendant les premiers mois.' },
    ],
    faqs: [
      {
        q: 'Que fait Binōme ?',
        a: 'Binōme est un studio digital boutique à Madrid, composé de deux designers. Nous faisons du branding, des sites web, du produit digital (UX/UI) et de la stratégie digitale pour les entreprises qui veulent offrir en ligne la même qualité qu’en personne.',
      },
      {
        q: 'Avec qui vais-je travailler ?',
        a: 'Directement avec les deux associés, Álvaro Fabre (design et web) et Betsabé Meneses (branding et UX), sans intermédiaires, du premier brief au résultat final.',
      },
      {
        q: 'Combien coûte un site web ou une identité de marque ?',
        a: 'Cela dépend de l’ampleur du projet, du contenu et des fonctionnalités. Parlez-nous de votre projet et nous vous répondons sous 24 heures avec une proposition adaptée.',
      },
      {
        q: 'Continuez-vous à travailler avec moi une fois le site publié ?',
        a: 'Oui. Nous accompagnons nos clients pendant les premiers mois qui suivent la mise en ligne pour répondre aux questions, ajuster et nous assurer que le projet donne les résultats attendus.',
      },
      {
        q: 'Travaillez-vous dans d’autres langues ?',
        a: 'Nous travaillons en espagnol, en français et en anglais.',
      },
    ],
  },

  servicios: {
    title: 'Services | Design web, branding et stratégie de marque — Binōme',
    description:
      'Branding, sites web, produit digital et stratégie digitale pour les entreprises qui veulent se démarquer en ligne. Studio boutique à Madrid.',
    h1: 'Nous vous aidons à <em class="acento">grandir.</em>',
    lead: 'Quatre services qui se complètent : une marque claire, un site qui convertit, un produit qui se comprend et une présence qui dure.',
    migas: 'Services',
    aria: 'Services',
    detalleDe: (nombre: string) => `Détail : ${nombre}`,
    paraQuien: 'Pour qui',
    queIncluye: 'Ce qui est inclus',
    otros: 'Autres services',
    items: {
      branding: {
        nombre: 'Branding',
        resumen: 'Des marques claires et cohérentes, qui vous distinguent et touchent votre public.',
        descripcion: [
          'Un branding solide inspire confiance et cohérence à chaque point de contact.',
          'Du logo au ton de voix, nous vous aidons à construire une identité claire, mémorable et affirmée.',
        ],
        incluye: ['Logotype', 'Stratégie de marque', 'Brandbook', 'Ton de voix'],
        paraQuien: 'Les entreprises qui ont grandi plus vite que leur image et ont besoin d’une marque à la hauteur de leur activité.',
        metaTitle: 'Branding à Madrid : une identité de marque affirmée | Binōme',
        metaDescription:
          'Nous créons des identités de marque claires et cohérentes : logotype, stratégie, ton de voix et brandbook. Studio boutique à Madrid.',
      },
      'paginas-web': {
        nombre: 'Sites web',
        resumen: 'Des sites conçus pour attirer des clients, inspirer confiance et transformer les visites en vraies opportunités.',
        descripcion: [
          'Nous concevons et construisons des sites rapides, sûrs et optimisés, pensés pour inspirer confiance dès la première seconde et transformer les visiteurs en clients.',
          'Structure solide, SEO technique, accessibilité et performance font partie de chaque projet : ce ne sont pas des options.',
        ],
        incluye: ['Architecture web', 'CMS', 'Marketplace', 'Landing pages', 'SEO technique', 'Accessibilité'],
        paraQuien: 'Les entreprises qui veulent un site qui travaille pour elles : qu’on le trouve, qu’on le comprenne et qu’il convertisse.',
        metaTitle: 'Design et développement web à Madrid : rapide et accessible | Binōme',
        metaDescription:
          'Nous concevons et construisons des sites rapides, accessibles et optimisés pour le SEO : architecture, CMS, landing pages et marketplace. Studio à Madrid.',
      },
      'producto-digital': {
        nombre: 'Produit digital',
        resumen: 'Des expériences claires et simples à utiliser, que vos clients comprennent du premier coup.',
        descripcion: [
          'Le design digital est le socle d’une présence en ligne qui inspire confiance et produit des résultats.',
          'Nous associons stratégie et créativité pour que votre site, application ou boutique en ligne soit clair, attrayant et efficace.',
        ],
        incluye: ['Design d’expérience (UX)', 'Design d’interface (UI)', 'Prototypes interactifs', 'Design systems'],
        paraQuien: 'Les équipes qui lancent ou refondent une application, une plateforme ou une boutique en ligne et ont besoin d’un regard produit.',
        metaTitle: 'Design UX/UI et produit digital à Madrid | Binōme',
        metaDescription:
          'Design d’expérience (UX), d’interface (UI), prototypes interactifs et design systems pour sites, applications et boutiques en ligne.',
      },
      'estrategia-digital': {
        nombre: 'Stratégie digitale',
        resumen: 'Des systèmes de contenu et des modèles pour que votre marque soit tout aussi belle sur chaque canal.',
        descripcion: [
          'Votre marque ne peut pas avoir un visage différent sur chaque canal.',
          'Nous concevons un système de contenu et de présence digitale — réseaux sociaux, modèles, ton de voix — qui garde votre marque cohérente et reconnaissable partout où on la cherche, avec la même exigence que votre site corporate.',
        ],
        incluye: ['Calendrier éditorial', 'Design sur mesure', 'Modèles pour les réseaux', 'Indicateurs de performance'],
        paraQuien: 'Les marques qui ont déjà une identité et un site, et doivent maintenir cette qualité sur les réseaux et dans leurs campagnes.',
        metaTitle: 'Stratégie digitale et contenu de marque à Madrid | Binōme',
        metaDescription:
          'Systèmes de contenu, calendrier éditorial et modèles pour les réseaux qui gardent votre marque cohérente sur tous les canaux.',
      },
    },
  },

  proyectos: {
    title: 'Projets | Branding, UX/UI, web et motion — Binōme',
    description:
      'Réalisations de branding, design UX/UI, sites web et motion de Binōme : de Contazara à Happy Life. Studio digital boutique à Madrid.',
    h1: 'Nous transformons les idées en <em class="acento">résultats</em>',
    migas: 'Projets',
    aria: 'Réalisations',
  },

  proyecto: {
    cliente: 'Client',
    sector: 'Secteur',
    entregables: 'Livrables',
    web: 'Site web',
    contexto: 'Contexte',
    reto: 'Le défi',
    propuesta: 'Notre proposition',
    resultados: 'Résultats',
    otros: 'Autres projets',
    testimonio: 'Témoignage du client',
    enPreparacion: 'Nous préparons l’étude de cas complète.',
    borradorDev: (slug: string) =>
      'BROUILLON (visible uniquement en développement) : compléter contexte, défi, proposition, livrables, résultats mesurables et maquettes dans src/assets/proyectos/' +
      slug +
      '/portada.jpg. Tant qu’elle est en brouillon, cette page est en noindex.',
  },

  nosotros: {
    title: 'À propos | Un duo créatif basé à Madrid — Binōme',
    description:
      'Nous sommes Binōme : Álvaro Fabre et Betsabé Meneses. Deux designers, un contact direct, un regard affirmé et un vrai engagement sur chaque projet.',
    h1: 'Nous sommes Binōme. Un <em class="acento">duo créatif</em> basé à Madrid.',
    migas: 'À propos',
    aria: 'Qui nous sommes',
    p1: 'Après des années en agence et sur des projets très différents, nous avons décidé de faire les choses à notre façon : un contact direct, un regard affirmé et un vrai engagement sur chaque projet. Sans couches. Sans intermédiaires. Juste nous deux, du premier brief au résultat final.',
    p2: 'Nous créons des expériences digitales fluides, qui créent du lien et qu’on n’oublie pas. Nous aimons le détail, mais ce qui nous anime avant tout, c’est le résultat.',
    lema: 'Jamais seul. Toujours chez Binōme.',
    equipoTitulo: 'Deux créatifs, une vision partagée',
    valoresTitulo: 'Notre façon de concevoir le travail',
    valores: [
      { t: 'Un contact direct', d: 'Vous parlez à celles et ceux qui conçoivent et construisent votre projet. Sans intermédiaires.' },
      { t: 'Un regard affirmé', d: 'Nous donnons notre avis, nous proposons et nous argumentons chaque décision de design.' },
      { t: 'Un engagement réel', d: 'Chaque projet est le nôtre, du premier brief au résultat final.' },
      { t: 'Le souci du détail', d: 'Nous aimons le détail, mais ce qui nous anime avant tout, c’est le résultat.' },
    ],
  },

  contacto: {
    title: 'Contact | Parlez-nous de votre projet — Binōme',
    description:
      'Vous voulez repenser votre marque ou votre site ? Écrivez-nous ou prenez rendez-vous : nous répondons sous 24 heures. Studio à Madrid.',
    h1: 'Contact',
    lead: 'Que vous vouliez parler d’un nouveau projet ou simplement faire connaissance, nous serions ravis de vous lire. Nous répondons sous 24 heures.',
    aria: 'Moyens de contact',
    escribenos: 'Écrivez-nous',
    redes: 'Réseaux',
    reunete: 'Rencontrons-nous',
    agenda: 'Prendre rendez-vous',
    asuntoReunion: 'Prendre rendez-vous — Binōme',
    asuntoForm: 'Nouveau message depuis binome.xyz',
    formTitulo: 'Laissez-nous un message',
    noRellenar: 'Ne pas remplir',
    nombre: 'Nom',
    errorNombre: 'Dites-nous comment vous vous appelez.',
    email: 'E-mail',
    errorEmail: 'Nous avons besoin de votre e-mail pour vous répondre.',
    errorEmailFormato: 'Vérifiez l’e-mail : il semble manquer quelque chose (nom@entreprise.com).',
    ayudaEmail: 'Nous vous répondons à cette adresse.',
    telefono: 'Téléphone',
    opcional: '(facultatif)',
    mensaje: 'Parlez-nous de votre projet',
    errorMensaje: 'Dites-nous brièvement ce dont vous avez besoin.',
    legalPre: 'Nous utiliserons vos données uniquement pour vous répondre. Plus d’informations dans les ',
    legalEnlace: 'mentions légales et la politique de confidentialité',
    legalPost: '.',
  },

  archivo: {
    title: 'Archives | Inspiration, conseils et processus créatifs — Binōme',
    description:
      'Idées, guides et ressources sur le design web, le branding, l’UX/UI, le motion et l’IA, depuis le studio.',
    h1: 'Archives',
    lead: 'Inspiration, conseils et processus créatifs.',
    migas: 'Archives',
    aria: 'Articles',
    filtrar: 'Filtrer par catégorie',
    todo: 'Tout',
    soloEs: 'Pour l’instant, nos articles ne sont disponibles qu’en espagnol.',
  },

  legal: {
    title: 'Mentions légales et confidentialité | Binōme',
    description: 'Mentions légales et politique de confidentialité de Binōme.',
    h1: 'Mentions légales et confidentialité',
    pendiente:
      'À MIGRER : coller ici le texte juridique intégral en vigueur du site Webflow actuel et le relire (éditeur, NIF, adresse, base juridique, droits, cookies réels du nouveau site). Cette page reste en noindex d’ici là.',
  },
  cookies: {
    title: 'Politique de cookies | Binōme',
    description: 'Informations sur l’utilisation des cookies sur binome.xyz.',
    h1: 'Politique de cookies',
    pendiente:
      'À MIGRER : coller ici le texte juridique intégral en vigueur du site Webflow actuel et le relire (éditeur, NIF, adresse, base juridique, droits, cookies réels du nouveau site). Cette page reste en noindex d’ici là.',
  },
};
