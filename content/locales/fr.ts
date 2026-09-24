import type { SiteContent } from "@/content/types";

/**
 * French dictionary.
 *
 * DRAFT — machine-assisted translation pending native review before launch.
 * `en.ts` is the master copy; this file must always satisfy the same
 * `SiteContent` shape. Identifiers (slugs, icon names, hrefs, image paths) are
 * intentionally left in English.
 */
const fr: SiteContent = {
  meta: {
    title: "AZM Nexus — Hub technologique international et partenaire de transformation",
    description:
      "AZM Nexus est un hub technologique à vocation internationale et un partenaire de transformation des entreprises. Nous relions présence numérique, ingénierie logicielle, cloud, intelligence artificielle, automatisation et données au sein d'un seul système d'exploitation intelligent et évolutif.",
    keywords: [
      "transformation des entreprises",
      "hub technologique",
      "ingénierie logicielle",
      "infrastructure cloud",
      "intelligence artificielle",
      "automatisation des processus",
      "plateformes de données",
      "présence numérique",
    ],
    localeName: "Français",
  },

  common: {
    wordmark: "AZM Nexus",
    tagline: "Hub technologique · Transformation des entreprises",
    copyright: "© 2026 AZM Nexus Limited. Tous droits réservés.",
  },

  nav: {
    links: [
      { label: "Services", href: "/services" },
      { label: "Secteurs", href: "/industries" },
      { label: "Méthode", href: "/approach" },
      { label: "Analyses", href: "/insights" },
      { label: "À propos", href: "/about" },
    ],
    ctaText: "Devenez notre partenaire",
    localeSwitcherLabel: "Choisir la langue",
    openMenuLabel: "Ouvrir le menu de navigation",
    closeMenuLabel: "Fermer le menu de navigation",
  },

  hero: {
    label: "Hub technologique international · Transformation des entreprises",
    headline: "Nous relions votre entreprise dans un seul système d'exploitation intelligent",
    subtext:
      "AZM Nexus est un hub technologique à vocation internationale et un partenaire de transformation des entreprises. Par l'intermédiaire de notre division Services Technologiques, nous permettons aux organisations de se moderniser, de s'automatiser et de croître en reliant présence numérique, ingénierie logicielle, cloud, intelligence artificielle, automatisation et données.",
    ctaPrimary: "Découvrir nos capacités",
    ctaSecondary: "Devenez notre partenaire",
    backgroundImage: "/images/hero_image.jpg",
    backgroundAlt: "Environnement technologique d'entreprise AZM Nexus",
  },

  ticker: [
    "Présence numérique",
    "Ingénierie logicielle",
    "Cloud",
    "Intelligence artificielle",
    "Automatisation",
    "Données",
    "Livraison internationale",
    "Transformation des entreprises",
  ],

  proposition: {
    label: "Notre proposition",
    statement: "Nous ne nous contentons pas de numériser des zones isolées d'une entreprise.",
    emphasis:
      "Nous relions sa présence numérique, son acquisition client, sa communication, ses logiciels, ses données et ses processus internes au sein d'un système d'exploitation intelligent et évolutif.",
    supporting:
      "Cette distinction définit notre façon de travailler. Chaque mission se mesure à la capacité opérationnelle qu'elle crée, non aux livrables qu'elle laisse derrière elle.",
  },

  capabilities: {
    label: "Capacités",
    title: "Six capacités. Un seul système connecté.",
    subtext:
      "Notre division Services Technologiques réunit six disciplines, conçues pour fonctionner comme une capacité unique plutôt que comme six prestataires séparés.",
    carouselPrevLabel: "Afficher la capacité précédente",
    carouselNextLabel: "Afficher la capacité suivante",
    items: [
      {
        slug: "digital-presence",
        title: "Présence numérique",
        short: "Une présence numérique conçue comme un système commercial.",
        description:
          "Nous concevons et développons la présence numérique comme une extension de votre modèle opérationnel — des plateformes qui tiennent commercialement, communiquent avec autorité et restent cohérentes à mesure que vous abordez de nouveaux marchés et de nouvelles langues.",
        iconName: "Monitor",
        outcomes: [
          "Plateformes numériques internationales multilingues",
          "Architecture de l'information guidée par le positionnement",
          "Fondations de performance, d'accessibilité et de référencement",
        ],
      },
      {
        slug: "software-engineering",
        title: "Ingénierie logicielle",
        short: "Des logiciels d'entreprise conçus pour durer et pour évoluer.",
        description:
          "Nous construisons les logiciels internes et clients dont dépend votre activité — conçus autour des flux de travail réels, pensés pour la maintenabilité et intégrés aux systèmes qui font déjà tourner votre entreprise.",
        iconName: "Code2",
        outcomes: [
          "Plateformes sur mesure et systèmes internes",
          "Intégration d'API et de systèmes",
          "Pratiques d'ingénierie qui survivent à la transmission",
        ],
      },
      {
        slug: "cloud",
        title: "Cloud",
        short: "Des fondations cloud qui évoluent sans reprise.",
        description:
          "Nous concevons, migrons et exploitons des infrastructures cloud qui vous apportent résilience, maîtrise des coûts et liberté d'expansion. Les décisions d'architecture sont prises en fonction de la direction de l'entreprise, pas seulement de sa situation actuelle.",
        iconName: "Cloud",
        outcomes: [
          "Architecture et migration cloud",
          "Fiabilité, sécurité et gouvernance des coûts",
          "Infrastructure conçue pour la croissance",
        ],
      },
      {
        slug: "artificial-intelligence",
        title: "Intelligence artificielle",
        short: "Une IA appliquée, liée à des résultats opérationnels.",
        description:
          "Nous appliquons l'intelligence artificielle là où elle change un résultat opérationnel — aide à la décision, traitement documentaire et des connaissances, qualité de service, prévision — avec une gouvernance qui rend l'adoption défendable.",
        iconName: "BrainCircuit",
        outcomes: [
          "IA appliquée et flux de travail intelligents",
          "Intelligence documentaire et des connaissances",
          "Gouvernance responsable de l'IA",
        ],
      },
      {
        slug: "automation",
        title: "Automatisation",
        short: "Une automatisation qui supprime la friction opérationnelle.",
        description:
          "Nous retirons le travail manuel, répétitif et source d'erreurs des processus qui freinent votre croissance, en connectant les systèmes pour que l'information circule sans relais humain.",
        iconName: "Workflow",
        outcomes: [
          "Automatisation des processus et des flux",
          "Orchestration de système à système",
          "Contrôle et visibilité opérationnels",
        ],
      },
      {
        slug: "data",
        title: "Données",
        short: "Des données réellement exploitables pour décider.",
        description:
          "Nous consolidons des données fragmentées en fondations gouvernées et fiables, puis nous les restituons là où les décisions se prennent — offrant à la direction une vision unique et cohérente de l'entreprise.",
        iconName: "Database",
        outcomes: [
          "Plateformes de données et consolidation",
          "Reporting et tableaux de bord décisionnels",
          "Qualité et gouvernance des données",
        ],
      },
    ],
  },

  approach: {
    label: "Notre méthode",
    title: "Une méthode ancrée dans la réalité opérationnelle",
    subtext:
      "Nous ne sommes pas une agence web ni une agence marketing conventionnelle. Nos missions suivent une séquence délibérée : comprendre l'exploitation, architecturer pour l'échelle, livrer en toute transparence, puis transférer la capacité.",
    stages: [
      {
        step: "01",
        title: "Diagnostiquer",
        description:
          "Nous cartographions le fonctionnement réel de votre organisation — les systèmes, les points de relais, les frictions et les contraintes — avant de proposer la moindre solution.",
      },
      {
        step: "02",
        title: "Architecturer",
        description:
          "Nous définissons la capacité opérationnelle cible et l'architecture qui y mène, séquencée pour que la valeur arrive avant la fin de la transformation.",
      },
      {
        step: "03",
        title: "Livrer",
        description:
          "Nous construisons par incréments fonctionnels avec une progression visible, afin que les parties prenantes voient le système prendre forme plutôt que d'attendre un lancement unique.",
      },
      {
        step: "04",
        title: "Intégrer",
        description:
          "Nous connectons la nouvelle capacité aux systèmes, aux données et aux équipes qui l'entourent, pour qu'elle fonctionne comme partie d'un tout et non comme un outil isolé.",
      },
      {
        step: "05",
        title: "Transférer",
        description:
          "Nous documentons, formons et transmettons. L'objectif est la maîtrise autonome, par votre organisation, du système que nous avons bâti ensemble.",
      },
    ],
  },

  industries: {
    label: "Secteurs",
    title: "Où nos capacités s'appliquent",
    subtext:
      "Nos capacités technologiques servent des organisations de secteurs où la complexité opérationnelle est élevée et où le coût des systèmes déconnectés est bien réel.",
    items: [
      {
        title: "Services financiers",
        description:
          "Plateformes réglementées, canaux numériques, traitement sécurisé des données et automatisation des opérations à fort volume de transactions.",
        iconName: "Landmark",
      },
      {
        title: "Santé et santé numérique",
        description:
          "Systèmes de flux cliniques, plateformes destinées aux patients et fondations de données qui améliorent la prise en charge.",
        iconName: "Stethoscope",
      },
      {
        title: "Agriculture et agro-industrie",
        description:
          "Approvisionnement, logistique et accès aux marchés soutenus par des systèmes opérationnels et des données appliquées.",
        iconName: "Sprout",
      },
      {
        title: "Commerce, distribution et vente au détail",
        description:
          "Stocks, canaux et exécution des commandes réunis en une vision unique à travers les sites.",
        iconName: "Store",
      },
      {
        title: "Construction et immobilier",
        description:
          "Systèmes de pilotage de projets, de gestion d'actifs et de reporting pour des chantiers et portefeuilles de long terme.",
        iconName: "Building2",
      },
      {
        title: "Énergie et infrastructures",
        description:
          "Surveillance opérationnelle, flux de maintenance et reporting pour les environnements à forte intensité d'actifs.",
        iconName: "Zap",
      },
      {
        title: "Secteur public et institutions",
        description:
          "Plateformes de service, gouvernance des données et automatisation pour les environnements soumis à obligation de rendre des comptes.",
        iconName: "ShieldCheck",
      },
      {
        title: "Services professionnels et fonctions corporate",
        description:
          "Systèmes de connaissance, opérations clients et automatisation pour les fonctions de conseil et corporate.",
        iconName: "Briefcase",
      },
    ],
  },

  insights: {
    label: "Analyses",
    title: "Regards sur la transformation des entreprises",
    subtext:
      "Notre réflexion sur la modernisation, l'automatisation et la croissance d'organisations complexes. Cette section est en cours d'élaboration — les analyses publiées apparaîtront ici.",
    ctaText: "Échanger sur un sujet",
    items: [
      {
        category: "Transformation des entreprises",
        title: "Pourquoi la transformation échoue aux jointures, pas dans les systèmes",
        summary:
          "La plupart des programmes de transformation n'échouent pas à l'intérieur d'un système, mais dans les relais entre eux — c'est de ces jointures que nous partons.",
        date: "Bientôt disponible",
      },
      {
        category: "Automatisation",
        title: "L'automatisation avant l'intelligence artificielle",
        summary:
          "Pour la plupart des organisations, le gain le plus important n'est pas un modèle, mais le travail de relais manuel que personne n'a jamais cartographié.",
        date: "Bientôt disponible",
      },
      {
        category: "Données",
        title: "Le coût d'une entreprise à quatre versions de la vérité",
        summary:
          "Les décisions de direction se dégradent silencieusement lorsque les reportings se contredisent. La consolidation est une décision opérationnelle avant d'être technique.",
        date: "Bientôt disponible",
      },
    ],
  },

  about: {
    label: "À propos d'AZM Nexus",
    title: "Un hub technologique à vocation internationale",
    subtext:
      "AZM Nexus est un partenaire de transformation des entreprises. Par l'intermédiaire de notre division Services Technologiques, nous aidons les organisations à se moderniser, à s'automatiser et à croître en reliant leur présence numérique, leurs logiciels, leur cloud, leurs données et leurs processus internes au sein d'un seul système d'exploitation intelligent.",
    storyLabel: "Notre position",
    story: [
      "AZM Nexus a été construit autour d'une observation simple : les organisations souffrent rarement de l'absence d'un système. Elles souffrent parce que les systèmes, canaux, données et processus qu'elles exploitent déjà n'ont jamais été conçus pour fonctionner comme un tout.",
      "Nous nous plaçons donc délibérément en dehors du modèle d'agence conventionnel. Nous ne sommes pas une agence web et nous ne sommes pas une agence marketing. Nous sommes un hub technologique et un partenaire de transformation, responsables de la capacité opérationnelle que notre travail crée.",
      "Notre division Services Technologiques intervient sur six disciplines connectées — présence numérique, ingénierie logicielle, cloud, intelligence artificielle, automatisation et données — et les délivre comme une capacité intégrée plutôt que comme une série de projets déconnectés.",
      "Nous travaillons avec des organisations qui entendent croître au-delà de leur marché actuel, et nous nous tenons aux exigences de la livraison internationale : clarté, gouvernance, documentation et résultat opérationnel mesurable.",
    ],
    missionLabel: "Notre mission",
    mission:
      "Relier la présence numérique, l'acquisition client, la communication, les logiciels, les données et les processus internes d'organisations ambitieuses au sein de systèmes d'exploitation intelligents et évolutifs.",
    valuesLabel: "Nos engagements",
    values: [
      {
        title: "Connecté par défaut",
        description:
          "Nous concevons pour l'ensemble du modèle opérationnel. Les solutions ponctuelles qui ignorent leur environnement créent les problèmes de la génération suivante.",
      },
      {
        title: "Le résultat opérationnel d'abord",
        description:
          "Une technologie n'a de valeur que si elle change la performance de l'organisation. C'est le standard auquel nous tenons notre travail.",
      },
      {
        title: "Standard international",
        description:
          "Gouvernance, documentation et discipline de livraison ne sont pas des options. C'est ce qui rend l'échelle possible.",
      },
      {
        title: "Transfert de capacité",
        description:
          "Nous mesurons le succès à l'autonomie de nos clients, non à leur dépendance. Nous construisons pour transmettre.",
      },
    ],
    credentialsLabel: "Caractéristiques de livraison",
    credentials: [
      "Standards de livraison à vocation internationale",
      "Ingénierie, cloud, IA et données sous une seule équipe responsable",
      "Gouvernance d'entreprise, documentation et discipline de transmission",
      "Architecture conçue pour dépasser le marché actuel",
    ],
  },

  team: {
    label: "Direction",
    title: "Direction",
    subtext:
      "AZM Nexus est dirigé par un praticien de la technologie, non par une fonction marketing. Notre direction s'articule autour du Directeur Général.",
    members: [
      {
        name: "Abubakar Sadiq Abdulhameed",
        role: "Directeur Général",
        bio: "Un technologue orienté résultats, fort de six années d'expérience en IA, ingénierie logicielle et apprentissage automatique. Compétent en développement, algorithmes et science des données — avec une expérience avérée de la traduction de concepts complexes en résultats clairs et exploitables.",
        imageUrl: "/images/team/ceo.jpg",
        linkedin: "https://www.linkedin.com/in/abubakar-sadiq-abdulhameed/",
      },
    ],
  },

  contact: {
    label: "Démarrer un échange",
    title: "Examinons votre modèle opérationnel",
    subtext:
      "Que vous soyez une entreprise, une institution, un investisseur ou un partenaire — nous accueillons les demandes sérieuses portant sur la modernisation, l'automatisation et la croissance de votre organisation.",
    details: [
      {
        icon: "MapPin",
        label: "Siège social",
        value: "Lagos, Nigéria",
        href: "https://www.google.com/maps/search/?api=1&query=Lagos%2C+Nigeria",
      },
      {
        icon: "Mail",
        label: "Demandes par e-mail",
        value: "info@azmnexus.com",
        href: "mailto:info@azmnexus.com",
      },
      {
        icon: "Phone",
        label: "Ligne directe",
        value: "+234 901 557 1955",
        href: "tel:+2349015571955",
      },
    ],
    form: {
      fullNameLabel: "Nom complet",
      fullNamePlaceholder: "Saisissez votre nom complet",
      emailLabel: "Adresse e-mail",
      emailPlaceholder: "Saisissez votre adresse e-mail",
      companyLabel: "Entreprise / Organisation",
      companyPlaceholder: "Nom de l'organisation",
      inquiryTypeLabel: "Type de demande",
      inquiryTypeOptions: [
        "Transformation des entreprises",
        "Ingénierie logicielle",
        "Cloud et infrastructure",
        "Intelligence artificielle",
        "Automatisation",
        "Données et analytique",
        "Partenariat",
        "Général",
      ],
      messageLabel: "Message",
      messagePlaceholder: "Que souhaitez-vous moderniser, automatiser ou faire croître ?",
      submitButton: "Envoyer la demande",
      successTitle: "Demande envoyée avec succès",
      successMessage:
        "Merci de nous avoir contactés. Un membre de l'équipe AZM Nexus vous répondra prochainement.",
      resetButton: "Envoyer une autre demande",
      errorMessage: "Une erreur est survenue. Veuillez réessayer.",
    },
  },

  ctaBand: {
    title: "Prêt à connecter l'ensemble du système ?",
    subtext:
      "Dites-nous comment votre organisation fonctionne aujourd'hui. Nous vous dirons comment elle pourrait fonctionner — et ce qu'il faut pour y parvenir.",
    button: "Devenez notre partenaire",
  },

  footer: {
    links: [
      { label: "Services", href: "/services" },
      { label: "Secteurs", href: "/industries" },
      { label: "Méthode", href: "/approach" },
      { label: "Analyses", href: "/insights" },
      { label: "À propos", href: "/about" },
    ],
    note: "Hub technologique international · Partenaire de transformation des entreprises",
  },

  pages: {
    services: {
      label: "Services Technologiques",
      title: "Une capacité d'entreprise livrée comme un seul système",
      subtext:
        "Notre division Services Technologiques relie six disciplines en une capacité unique — pour que la modernisation arrive comme un système d'exploitation et non comme une série de projets déconnectés.",
      capabilitiesLabel: "Les six disciplines",
      engagementLabel: "Comment nous intervenons",
    },
    about: {
      label: "À propos",
      title: "Conçu pour connecter, non pour numériser en isolation",
      subtext:
        "Nous sommes un hub technologique et un partenaire de transformation, alignés sur les exigences de la livraison internationale.",
    },
    approach: {
      label: "Méthode",
      title: "Une séquence délibérée, pas un catalogue de services",
      subtext:
        "Notre méthode est conçue pour produire une capacité opérationnelle qui perdure après la fin de la mission.",
    },
    industries: {
      label: "Secteurs",
      title: "Des opérations complexes, connectées",
      subtext:
        "Nous intervenons là où la complexité opérationnelle est élevée, où les systèmes sont fragmentés et où le coût de la déconnexion est mesurable.",
    },
    insights: {
      label: "Analyses",
      title: "Regards sur la transformation des entreprises",
      subtext:
        "Notre réflexion sur la modernisation, l'automatisation et la croissance d'organisations complexes.",
    },
  },
};

export default fr;
