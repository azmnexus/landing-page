import type { SiteContent } from "@/content/types";

/**
 * German dictionary.
 *
 * DRAFT — machine-assisted translation pending native review before launch.
 * `en.ts` is the master copy; this file must always satisfy the same
 * `SiteContent` shape. Identifiers (slugs, icon names, hrefs, image paths) are
 * intentionally left in English.
 */
const de: SiteContent = {
  meta: {
    title: "AZM Nexus — Internationaler Technologie-Hub und Partner für Unternehmenstransformation",
    description:
      "AZM Nexus ist ein international ausgerichteter Technologie-Hub und Partner für Unternehmenstransformation. Wir verbinden digitale Präsenz, Software-Engineering, Cloud, künstliche Intelligenz, Automatisierung und Daten zu einem intelligenten, skalierbaren Betriebssystem.",
    keywords: [
      "Unternehmenstransformation",
      "Technologie-Hub",
      "Software-Engineering",
      "Cloud-Infrastruktur",
      "künstliche Intelligenz",
      "Prozessautomatisierung",
      "Datenplattformen",
      "digitale Präsenz",
    ],
    localeName: "Deutsch",
  },

  common: {
    wordmark: "AZM Nexus",
    tagline: "Technologie-Hub · Unternehmenstransformation",
    copyright: "© 2026 AZM Nexus Limited. Alle Rechte vorbehalten.",
  },

  nav: {
    links: [
      { label: "Leistungen", href: "/services" },
      { label: "Branchen", href: "/industries" },
      { label: "Vorgehen", href: "/approach" },
      { label: "Perspektiven", href: "/insights" },
      { label: "Über uns", href: "/about" },
    ],
    ctaText: "Partner werden",
    localeSwitcherLabel: "Sprache wählen",
    openMenuLabel: "Navigationsmenü öffnen",
    closeMenuLabel: "Navigationsmenü schließen",
  },

  hero: {
    label: "Internationaler Technologie-Hub · Unternehmenstransformation",
    headline: "Wir verbinden Ihr Unternehmen zu einem intelligenten Betriebssystem",
    subtext:
      "AZM Nexus ist ein international ausgerichteter Technologie-Hub und Partner für Unternehmenstransformation. Über unsere Division Technology Services befähigen wir Organisationen, sich zu modernisieren, zu automatisieren und zu skalieren, indem wir digitale Präsenz, Software-Engineering, Cloud, künstliche Intelligenz, Automatisierung und Daten verbinden.",
    ctaPrimary: "Leistungen entdecken",
    ctaSecondary: "Partner werden",
    backgroundImage: "/images/hero_image.jpg",
    backgroundAlt: "Technologieumgebung von AZM Nexus",
  },

  ticker: [
    "Digitale Präsenz",
    "Software-Engineering",
    "Cloud",
    "Künstliche Intelligenz",
    "Automatisierung",
    "Daten",
    "Internationale Lieferung",
    "Unternehmenstransformation",
  ],

  proposition: {
    label: "Unser Ansatz",
    statement: "Wir digitalisieren nicht bloß einzelne Bereiche eines Unternehmens.",
    emphasis:
      "Wir verbinden seine digitale Präsenz, Kundengewinnung, Kommunikation, Software, Daten und internen Prozesse zu einem intelligenten, skalierbaren Betriebssystem.",
    supporting:
      "Dieser Unterschied bestimmt unsere Arbeitsweise. Jedes Engagement wird an der operativen Fähigkeit gemessen, die es schafft — nicht an den Artefakten, die es hinterlässt.",
  },

  capabilities: {
    label: "Leistungen",
    title: "Sechs Disziplinen. Ein verbundenes System.",
    subtext:
      "Unsere Division Technology Services vereint sechs Disziplinen, die als eine Fähigkeit wirken sollen — nicht als sechs getrennte Dienstleister.",
    carouselPrevLabel: "Vorherige Leistung anzeigen",
    carouselNextLabel: "Nächste Leistung anzeigen",
    items: [
      {
        slug: "digital-presence",
        title: "Digitale Präsenz",
        short: "Digitale Präsenz als kommerzielles System.",
        description:
          "Wir entwerfen und entwickeln digitale Präsenz als Erweiterung Ihres Betriebsmodells — Plattformen, die kommerziell bestehen, mit Autorität kommunizieren und kohärent bleiben, während Sie neue Märkte und Sprachen erschließen.",
        iconName: "Monitor",
        outcomes: [
          "Internationale, mehrsprachige digitale Plattformen",
          "Informationsarchitektur auf Basis der Positionierung",
          "Grundlagen für Performance, Barrierefreiheit und Suche",
        ],
      },
      {
        slug: "software-engineering",
        title: "Software-Engineering",
        short: "Unternehmenssoftware, gebaut um zu bleiben und sich zu ändern.",
        description:
          "Wir bauen die internen und kundenorientierten Systeme, auf denen Ihr Betrieb beruht — entworfen entlang realer Abläufe, entwickelt für Wartbarkeit und integriert in die Systeme, die Ihr Geschäft bereits steuern.",
        iconName: "Code2",
        outcomes: [
          "Individuelle Plattformen und interne Systeme",
          "API- und Systemintegration",
          "Engineering-Praktiken, die die Übergabe überstehen",
        ],
      },
      {
        slug: "cloud",
        title: "Cloud",
        short: "Cloud-Grundlagen, die ohne Nacharbeit skalieren.",
        description:
          "Wir entwerfen, migrieren und betreiben Cloud-Infrastruktur, die Resilienz, Kostenkontrolle und Expansionsfreiheit schafft. Architekturentscheidungen richten sich danach, wohin das Unternehmen geht — nicht nur, wo es steht.",
        iconName: "Cloud",
        outcomes: [
          "Cloud-Architektur und Migration",
          "Zuverlässigkeit, Sicherheit und Kostensteuerung",
          "Infrastruktur, ausgelegt auf Wachstum",
        ],
      },
      {
        slug: "artificial-intelligence",
        title: "Künstliche Intelligenz",
        short: "Angewandte KI mit Bezug zu operativen Ergebnissen.",
        description:
          "Wir setzen künstliche Intelligenz dort ein, wo sie ein operatives Ergebnis verändert — Entscheidungsunterstützung, Dokumenten- und Wissensverarbeitung, Servicequalität und Prognose — mit einer Governance, die die Einführung verteidigbar macht.",
        iconName: "BrainCircuit",
        outcomes: [
          "Angewandte KI und intelligente Workflows",
          "Wissens- und Dokumentenintelligenz",
          "Verantwortungsvolle KI-Governance",
        ],
      },
      {
        slug: "automation",
        title: "Automatisierung",
        short: "Automatisierung, die operativen Reibungsverlust beseitigt.",
        description:
          "Wir entfernen manuelle, repetitive und fehleranfällige Arbeit aus den Prozessen, die Ihr Wachstum begrenzen, und verbinden Systeme, damit Informationen ohne menschliche Weitergabe fließen.",
        iconName: "Workflow",
        outcomes: [
          "Prozess- und Workflow-Automatisierung",
          "Orchestrierung von System zu System",
          "Operative Kontrolle und Transparenz",
        ],
      },
      {
        slug: "data",
        title: "Daten",
        short: "Daten, mit denen tatsächlich entschieden werden kann.",
        description:
          "Wir konsolidieren fragmentierte Daten zu gelenkten, verlässlichen Grundlagen und führen sie dort zusammen, wo Entscheidungen fallen — für ein einheitliches Bild des Unternehmens in der Führungsebene.",
        iconName: "Database",
        outcomes: [
          "Datenplattformen und Konsolidierung",
          "Reporting und Entscheidungs-Dashboards",
          "Datenqualität und Governance",
        ],
      },
    ],
  },

  approach: {
    label: "Unser Vorgehen",
    title: "Eine Methode entlang der operativen Realität",
    subtext:
      "Wir sind keine konventionelle Web- oder Marketingagentur. Unsere Engagements folgen einer bewussten Abfolge: den Betrieb verstehen, für Skalierung architektieren, transparent liefern, dann Fähigkeit übergeben.",
    stages: [
      {
        step: "01",
        title: "Diagnostizieren",
        description:
          "Wir erfassen, wie Ihre Organisation tatsächlich arbeitet — die Systeme, die Übergabepunkte, die Reibung und die Restriktionen — bevor wir eine Lösung vorschlagen.",
      },
      {
        step: "02",
        title: "Architektieren",
        description:
          "Wir definieren die angestrebte operative Fähigkeit und die Architektur dorthin, sequenziert so, dass Wert entsteht, bevor die Transformation abgeschlossen ist.",
      },
      {
        step: "03",
        title: "Liefern",
        description:
          "Wir bauen in funktionierenden Inkrementen mit sichtbarem Fortschritt, damit Beteiligte das System entstehen sehen, statt auf einen einzelnen Launch zu warten.",
      },
      {
        step: "04",
        title: "Integrieren",
        description:
          "Wir verbinden die neue Fähigkeit mit den umgebenden Systemen, Daten und Teams, damit sie als Teil des Ganzen wirkt und nicht als isoliertes Werkzeug.",
      },
      {
        step: "05",
        title: "Übergeben",
        description:
          "Wir dokumentieren, schulen und übergeben. Ziel ist die eigenständige Beherrschung des gemeinsam gebauten Systems durch Ihre Organisation.",
      },
    ],
  },

  industries: {
    label: "Branchen",
    title: "Wo unsere Fähigkeit zum Einsatz kommt",
    subtext:
      "Unsere Technologiefähigkeit dient Organisationen in Branchen mit hoher operativer Komplexität, in denen die Kosten getrennter Systeme real sind.",
    items: [
      {
        title: "Finanzdienstleistungen",
        description:
          "Regulierte Plattformen, digitale Kanäle, sichere Datenverarbeitung und Automatisierung in transaktionsintensiven Abläufen.",
        iconName: "Landmark",
      },
      {
        title: "Gesundheitswesen und digitale Gesundheit",
        description:
          "Klinische Workflow-Systeme, patientenorientierte Plattformen und Datengrundlagen für eine bessere Versorgung.",
        iconName: "Stethoscope",
      },
      {
        title: "Landwirtschaft und Agribusiness",
        description:
          "Beschaffung, Logistik und Marktanbindung auf Basis operativer Systeme und angewandter Daten.",
        iconName: "Sprout",
      },
      {
        title: "Handel, Einzelhandel und Distribution",
        description:
          "Bestand, Kanäle und Fulfillment über Standorte hinweg in einer einheitlichen Sicht verbunden.",
        iconName: "Store",
      },
      {
        title: "Bau und Immobilien",
        description:
          "Systeme für Projektabwicklung, Asset-Management und Reporting für langfristige Vorhaben und Portfolios.",
        iconName: "Building2",
      },
      {
        title: "Energie und Infrastruktur",
        description:
          "Betriebsüberwachung, Wartungsabläufe und Reporting für assetintensive Umgebungen.",
        iconName: "Zap",
      },
      {
        title: "Öffentlicher Sektor und Institutionen",
        description:
          "Serviceplattformen, Daten-Governance und Automatisierung für rechenschaftsorientierte Umgebungen.",
        iconName: "ShieldCheck",
      },
      {
        title: "Professionelle und Unternehmensdienstleistungen",
        description:
          "Wissenssysteme, Kundenprozesse und Automatisierung für Beratungs- und Unternehmensfunktionen.",
        iconName: "Briefcase",
      },
    ],
  },

  insights: {
    label: "Perspektiven",
    title: "Perspektiven zur Unternehmenstransformation",
    subtext:
      "Unser Denken zur Modernisierung, Automatisierung und Skalierung komplexer Organisationen. Dieser Bereich entsteht — veröffentlichte Perspektiven erscheinen hier.",
    ctaText: "Thema mit uns besprechen",
    items: [
      {
        category: "Unternehmenstransformation",
        title: "Warum Transformation an den Nahtstellen scheitert, nicht an den Systemen",
        summary:
          "Die meisten Transformationsprogramme scheitern nicht innerhalb eines Systems, sondern an den Übergaben dazwischen — und genau dort beginnen wir.",
        date: "Demnächst",
      },
      {
        category: "Automatisierung",
        title: "Automatisierung vor künstlicher Intelligenz",
        summary:
          "Für die meisten Organisationen liegt der größte verfügbare Gewinn nicht in einem Modell, sondern in manueller Weitergabearbeit, die niemand je erfasst hat.",
        date: "Demnächst",
      },
      {
        category: "Daten",
        title: "Die Kosten eines Unternehmens mit vier Versionen der Wahrheit",
        summary:
          "Führungsentscheidungen verschlechtern sich still, wenn Berichte einander widersprechen. Konsolidierung ist zuerst eine operative Entscheidung.",
        date: "Demnächst",
      },
    ],
  },

  about: {
    label: "Über AZM Nexus",
    title: "Ein international ausgerichteter Technologie-Hub",
    subtext:
      "AZM Nexus ist ein Partner für Unternehmenstransformation. Über unsere Division Technology Services helfen wir Organisationen, sich zu modernisieren, zu automatisieren und zu skalieren, indem wir digitale Präsenz, Software, Cloud, Daten und interne Prozesse zu einem intelligenten Betriebssystem verbinden.",
    storyLabel: "Unsere Position",
    story: [
      "AZM Nexus entstand aus einer klaren Beobachtung: Organisationen scheitern selten daran, dass ein einzelnes System fehlt. Sie scheitern daran, dass die Systeme, Kanäle, Daten und Prozesse, die sie bereits betreiben, nie dafür entworfen wurden, als Einheit zu funktionieren.",
      "Deshalb positionieren wir uns bewusst außerhalb des konventionellen Agenturmodells. Wir sind keine Webagentur und wir sind keine Marketingagentur. Wir sind ein Technologie-Hub und Partner für Unternehmenstransformation — verantwortlich für die operative Fähigkeit, die unsere Arbeit schafft.",
      "Unsere Division Technology Services arbeitet über sechs verbundene Disziplinen — digitale Präsenz, Software-Engineering, Cloud, künstliche Intelligenz, Automatisierung und Daten — und liefert sie als eine integrierte Fähigkeit statt als Reihe getrennter Projekte.",
      "Wir arbeiten mit Organisationen, die über ihren heutigen Markt hinaus wachsen wollen, und halten uns an die Standards internationaler Lieferung: Klarheit, Governance, Dokumentation und messbares operatives Ergebnis.",
    ],
    missionLabel: "Unsere Mission",
    mission:
      "Die digitale Präsenz, Kundengewinnung, Kommunikation, Software, Daten und internen Prozesse ambitionierter Organisationen zu intelligenten, skalierbaren Betriebssystemen zu verbinden.",
    valuesLabel: "Woran wir festhalten",
    values: [
      {
        title: "Verbunden als Grundsatz",
        description:
          "Wir entwerfen für das gesamte Betriebsmodell. Einzellösungen, die ihr Umfeld ignorieren, erzeugen die Probleme der nächsten Generation.",
      },
      {
        title: "Operatives Ergebnis zuerst",
        description:
          "Technologie ist nur wertvoll, wenn sie die Leistungsfähigkeit der Organisation verändert. Das ist der Maßstab für unsere Arbeit.",
      },
      {
        title: "Internationaler Standard",
        description:
          "Governance, Dokumentation und Lieferdisziplin sind keine Zusatzoptionen. Sie machen Skalierung erst möglich.",
      },
      {
        title: "Fähigkeitstransfer",
        description:
          "Wir messen Erfolg an der Eigenständigkeit unserer Kunden, nicht an ihrer Abhängigkeit. Wir bauen, um zu übergeben.",
      },
    ],
    credentialsLabel: "Merkmale der Lieferung",
    credentials: [
      "International ausgerichtete Lieferstandards",
      "Engineering, Cloud, KI und Daten in einem verantwortlichen Team",
      "Unternehmens-Governance, Dokumentation und Übergabedisziplin",
      "Architektur für Skalierung über den heutigen Markt hinaus",
    ],
  },

  team: {
    label: "Führung",
    title: "Führung",
    subtext:
      "AZM Nexus wird von einem Technologiepraktiker geführt, nicht von einer Marketingfunktion. Die Führung ist beim Chief Executive Officer verankert.",
    members: [
      {
        name: "Abubakar Sadiq Abdulhameed",
        role: "Chief Executive Officer",
        bio: "Ein ergebnisorientierter Technologe mit sechs Jahren Erfahrung in KI, Software-Engineering und maschinellem Lernen. Versiert in Entwicklung, Algorithmen und Datenwissenschaft — mit nachweislicher Erfahrung darin, komplexe Konzepte in klare, umsetzbare Ergebnisse zu übersetzen.",
        imageUrl: "/images/team/ceo.jpg",
        linkedin: "https://www.linkedin.com/in/abubakar-sadiq-abdulhameed/",
      },
    ],
  },

  contact: {
    label: "Gespräch starten",
    title: "Betrachten wir Ihr Betriebsmodell",
    subtext:
      "Ob Unternehmen, Institution, Investor oder Partner — wir begrüßen ernsthafte Anfragen zur Modernisierung, Automatisierung und Skalierung Ihrer Organisation.",
    details: [
      {
        icon: "MapPin",
        label: "Unternehmenssitz",
        value: "Lagos, Nigeria",
        href: "https://www.google.com/maps/search/?api=1&query=Lagos%2C+Nigeria",
      },
      {
        icon: "Mail",
        label: "E-Mail-Anfragen",
        value: "info@azmnexus.com",
        href: "mailto:info@azmnexus.com",
      },
      {
        icon: "Phone",
        label: "Direkte Leitung",
        value: "+234 901 557 1955",
        href: "tel:+2349015571955",
      },
    ],
    form: {
      fullNameLabel: "Vollständiger Name",
      fullNamePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
      companyLabel: "Unternehmen / Organisation",
      companyPlaceholder: "Name der Organisation",
      inquiryTypeLabel: "Art der Anfrage",
      inquiryTypeOptions: [
        "Unternehmenstransformation",
        "Software-Engineering",
        "Cloud und Infrastruktur",
        "Künstliche Intelligenz",
        "Automatisierung",
        "Daten und Analytik",
        "Partnerschaft",
        "Allgemein",
      ],
      messageLabel: "Nachricht",
      messagePlaceholder: "Was möchten Sie modernisieren, automatisieren oder skalieren?",
      submitButton: "Anfrage senden",
      successTitle: "Anfrage erfolgreich gesendet",
      successMessage:
        "Vielen Dank für Ihre Kontaktaufnahme. Ein Mitglied des AZM Nexus Teams wird sich in Kürze bei Ihnen melden.",
      resetButton: "Weitere Anfrage senden",
      errorMessage: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    },
  },

  ctaBand: {
    title: "Bereit, das gesamte System zu verbinden?",
    subtext:
      "Sagen Sie uns, wie Ihre Organisation heute arbeitet. Wir sagen Ihnen, wie sie arbeiten könnte — und was dafür nötig ist.",
    button: "Partner werden",
  },

  footer: {
    links: [
      { label: "Leistungen", href: "/services" },
      { label: "Branchen", href: "/industries" },
      { label: "Vorgehen", href: "/approach" },
      { label: "Perspektiven", href: "/insights" },
      { label: "Über uns", href: "/about" },
    ],
    note: "Internationaler Technologie-Hub · Partner für Unternehmenstransformation",
  },

  pages: {
    services: {
      label: "Technology Services",
      title: "Unternehmensfähigkeit als ein System geliefert",
      subtext:
        "Unsere Division Technology Services verbindet sechs Disziplinen zu einer Fähigkeit — damit Modernisierung als Betriebssystem ankommt und nicht als Reihe getrennter Projekte.",
      capabilitiesLabel: "Die sechs Disziplinen",
      engagementLabel: "Wie wir zusammenarbeiten",
    },
    about: {
      label: "Über uns",
      title: "Gebaut zum Verbinden, nicht zum isolierten Digitalisieren",
      subtext:
        "Wir sind ein Technologie-Hub und Partner für Unternehmenstransformation, ausgerichtet an den Anforderungen internationaler Lieferung.",
    },
    approach: {
      label: "Vorgehen",
      title: "Eine bewusste Abfolge, kein Leistungskatalog",
      subtext:
        "Unsere Methode ist darauf ausgelegt, operative Fähigkeit zu erzeugen, die nach dem Engagement bestehen bleibt.",
    },
    industries: {
      label: "Branchen",
      title: "Komplexe Abläufe, verbunden",
      subtext:
        "Wir arbeiten dort, wo operative Komplexität hoch, Systeme fragmentiert und die Kosten der Trennung messbar sind.",
    },
    insights: {
      label: "Perspektiven",
      title: "Perspektiven zur Unternehmenstransformation",
      subtext: "Unser Denken zur Modernisierung, Automatisierung und Skalierung komplexer Organisationen.",
    },
  },
};

export default de;
