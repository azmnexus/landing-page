import type { SiteContent } from "@/content/types";

const en: SiteContent = {
  meta: {
    title: "AZM Nexus — International Technology Hub & Enterprise Transformation Partner",
    description:
      "AZM Nexus is an internationally oriented technology hub and enterprise transformation partner. We connect digital presence, software engineering, cloud, artificial intelligence, automation and data into one intelligent, scalable operating system.",
    keywords: [
      "enterprise transformation",
      "technology hub",
      "software engineering",
      "cloud infrastructure",
      "artificial intelligence",
      "business automation",
      "data platforms",
      "digital presence",
    ],
    localeName: "English",
  },

  common: {
    wordmark: "AZM Nexus",
    tagline: "Technology Hub · Enterprise Transformation",
    copyright: "© 2026 AZM Nexus Limited. All rights reserved.",
  },

  nav: {
    links: [
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Approach", href: "/approach" },
      { label: "Insights", href: "/insights" },
      { label: "About", href: "/about" },
    ],
    ctaText: "Partner With Us",
    localeSwitcherLabel: "Select language",
    openMenuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
  },

  hero: {
    label: "International Technology Hub · Enterprise Transformation",
    headline: "We connect your business into one intelligent operating system",
    subtext:
      "AZM Nexus is an internationally oriented technology hub and enterprise transformation partner. Through our Technology Services division, we enable organisations to modernise, automate and scale by connecting digital presence, software engineering, cloud, artificial intelligence, automation and data.",
    ctaPrimary: "Explore Our Capabilities",
    ctaSecondary: "Partner With Us",
    backgroundImage: "/images/hero_image.jpg",
    backgroundAlt: "AZM Nexus enterprise technology environment",
  },

  ticker: [
    "Digital Presence",
    "Software Engineering",
    "Cloud",
    "Artificial Intelligence",
    "Automation",
    "Data",
    "International Delivery",
    "Enterprise Transformation",
  ],

  proposition: {
    label: "Our Proposition",
    statement: "We do not merely digitise isolated areas of a business.",
    emphasis:
      "We connect its digital presence, customer acquisition, communication, software, data and internal processes into an intelligent, scalable operating system.",
    supporting:
      "That distinction defines how we work. Every engagement is measured by the operational capability it creates, not by the artefacts it leaves behind.",
  },

  capabilities: {
    label: "Capabilities",
    title: "Six capabilities. One connected system.",
    subtext:
      "Our Technology Services division brings six disciplines together, engineered to operate as a single capability rather than six separate vendors.",
    carouselPrevLabel: "Show previous capability",
    carouselNextLabel: "Show next capability",
    items: [
      {
        slug: "digital-presence",
        title: "Digital Presence",
        short: "Digital presence engineered as a commercial system.",
        description:
          "We design and engineer digital presence as an extension of your operating model — platforms that hold up commercially, communicate with authority, and stay coherent as you enter new markets and languages.",
        iconName: "Monitor",
        outcomes: [
          "International, multi-language digital platforms",
          "Positioning-driven information architecture",
          "Performance, accessibility and search foundations",
        ],
      },
      {
        slug: "software-engineering",
        title: "Software Engineering",
        short: "Enterprise software built to last and to change.",
        description:
          "We build the internal and customer-facing software your operation depends on — designed around real workflows, engineered for maintainability, and integrated with the systems already running your business.",
        iconName: "Code2",
        outcomes: [
          "Custom platforms and internal systems",
          "API and system integration",
          "Engineering practices that survive handover",
        ],
      },
      {
        slug: "cloud",
        title: "Cloud",
        short: "Cloud foundations that scale without rework.",
        description:
          "We design, migrate and operate cloud infrastructure that gives you resilience, cost control and the freedom to expand. Architecture decisions are made for where the business is going, not only where it is.",
        iconName: "Cloud",
        outcomes: [
          "Cloud architecture and migration",
          "Reliability, security and cost governance",
          "Infrastructure engineered for growth",
        ],
      },
      {
        slug: "artificial-intelligence",
        title: "Artificial Intelligence",
        short: "Applied AI tied to operational outcomes.",
        description:
          "We apply artificial intelligence where it changes an operating result — decision support, document and knowledge handling, service quality and forecasting — with governance that keeps adoption defensible.",
        iconName: "BrainCircuit",
        outcomes: [
          "Applied AI and intelligent workflows",
          "Knowledge and document intelligence",
          "Responsible AI governance",
        ],
      },
      {
        slug: "automation",
        title: "Automation",
        short: "Automation that removes operational drag.",
        description:
          "We remove manual, repetitive and error-prone work from the processes that constrain your growth, connecting systems so information moves without human relay.",
        iconName: "Workflow",
        outcomes: [
          "Process and workflow automation",
          "System-to-system orchestration",
          "Operational control and visibility",
        ],
      },
      {
        slug: "data",
        title: "Data",
        short: "Data you can actually make decisions with.",
        description:
          "We consolidate fragmented data into governed, trustworthy foundations, then surface it where decisions are made — giving leadership one consistent view of the business.",
        iconName: "Database",
        outcomes: [
          "Data platforms and consolidation",
          "Reporting and decision dashboards",
          "Data quality and governance",
        ],
      },
    ],
  },

  approach: {
    label: "How We Work",
    title: "A method built around operational reality",
    subtext:
      "We are not a conventional web or marketing agency. Our engagements follow a deliberate sequence: understand the operation, architect for scale, deliver in the open, then transfer capability.",
    stages: [
      {
        step: "01",
        title: "Diagnose",
        description:
          "We map how your organisation actually operates — the systems, the handoffs, the friction and the constraints — before proposing a single solution.",
      },
      {
        step: "02",
        title: "Architect",
        description:
          "We define the target operating capability and the architecture that gets you there, sequenced so value arrives before the transformation finishes.",
      },
      {
        step: "03",
        title: "Deliver",
        description:
          "We build in working increments with visible progress, so stakeholders see the system take shape rather than waiting for a single launch moment.",
      },
      {
        step: "04",
        title: "Integrate",
        description:
          "We connect the new capability to the systems, data and teams around it, so it operates as part of the whole rather than an isolated tool.",
      },
      {
        step: "05",
        title: "Transfer",
        description:
          "We document, train and hand over. The objective is your organisation's independent command of the system we built together.",
      },
    ],
  },

  industries: {
    label: "Industries",
    title: "Where our capability is applied",
    subtext:
      "Our technology capability serves organisations across sectors where operational complexity is high and the cost of disconnected systems is real.",
    items: [
      {
        title: "Financial Services",
        description:
          "Regulated platforms, digital channels, secure data handling and automation across transaction-heavy operations.",
        iconName: "Landmark",
      },
      {
        title: "Healthcare & Digital Health",
        description:
          "Clinical workflow systems, patient-facing platforms and data foundations that improve care delivery.",
        iconName: "Stethoscope",
      },
      {
        title: "Agriculture & Agribusiness",
        description:
          "Sourcing, logistics and market connectivity supported by operational systems and applied data.",
        iconName: "Sprout",
      },
      {
        title: "Trade, Retail & Distribution",
        description:
          "Inventory, channel and fulfilment operations connected into one view across locations.",
        iconName: "Store",
      },
      {
        title: "Construction & Real Estate",
        description:
          "Project delivery, asset management and reporting systems for long-horizon builds and portfolios.",
        iconName: "Building2",
      },
      {
        title: "Energy & Infrastructure",
        description:
          "Operational monitoring, maintenance workflows and reporting for asset-intensive environments.",
        iconName: "Zap",
      },
      {
        title: "Public Sector & Institutions",
        description:
          "Service delivery platforms, data governance and automation for accountability-driven environments.",
        iconName: "ShieldCheck",
      },
      {
        title: "Professional & Corporate Services",
        description:
          "Knowledge systems, client operations and automation for advisory and corporate functions.",
        iconName: "Briefcase",
      },
    ],
  },

  insights: {
    label: "Insights",
    title: "Perspectives on enterprise transformation",
    subtext:
      "Our thinking on modernising, automating and scaling complex organisations. This section is being developed — published insights will appear here.",
    ctaText: "Discuss a topic with us",
    items: [
      {
        category: "Enterprise Transformation",
        title: "Why transformation fails at the seams, not the systems",
        summary:
          "Most transformation programmes do not fail inside a system. They fail in the handoffs between them — and those seams are where we start.",
        date: "Coming soon",
      },
      {
        category: "Automation",
        title: "Automation before artificial intelligence",
        summary:
          "For most organisations the largest available gain is not a model. It is the manual relay work that no one has ever mapped.",
        date: "Coming soon",
      },
      {
        category: "Data",
        title: "The cost of a business with four versions of the truth",
        summary:
          "Leadership decisions degrade quietly when reporting disagrees. Consolidation is an operating decision before it is a technical one.",
        date: "Coming soon",
      },
    ],
  },

  about: {
    label: "About AZM Nexus",
    title: "An internationally oriented technology hub",
    subtext:
      "AZM Nexus is an enterprise transformation partner. Through our Technology Services division, we help organisations modernise, automate and scale by connecting their digital presence, software, cloud, data and internal processes into one intelligent operating system.",
    storyLabel: "Our Position",
    story: [
      "AZM Nexus was built around a clear observation: organisations rarely struggle because a single system is missing. They struggle because the systems, channels, data and processes they already run were never designed to operate as one.",
      "We therefore position ourselves deliberately outside the conventional agency model. We are not a web agency and we are not a marketing agency. We are a technology hub and enterprise transformation partner, accountable for the operational capability our work creates.",
      "Our Technology Services division operates across six connected disciplines — digital presence, software engineering, cloud, artificial intelligence, automation and data — and delivers them as one integrated capability rather than a series of disconnected projects.",
      "We work with organisations that intend to grow beyond their current market, and we hold ourselves to the standards that international delivery demands: clarity, governance, documentation and measurable operational result.",
    ],
    missionLabel: "Our Mission",
    mission:
      "To connect the digital presence, customer acquisition, communication, software, data and internal processes of ambitious organisations into intelligent, scalable operating systems.",
    valuesLabel: "What We Hold To",
    values: [
      {
        title: "Connected by default",
        description:
          "We design for the whole operating model. Point solutions that ignore their surroundings create the next generation of problems.",
      },
      {
        title: "Operational outcome first",
        description:
          "Technology is only valuable when it changes how the organisation performs. That is the standard we hold our work to.",
      },
      {
        title: "International standard",
        description:
          "Governance, documentation and delivery discipline are not optional extras. They are what makes scale possible.",
      },
      {
        title: "Capability transfer",
        description:
          "We measure success by our clients' independence, not their dependence. We build to hand over.",
      },
    ],
    credentialsLabel: "Delivery Characteristics",
    credentials: [
      "Internationally oriented delivery standards",
      "Engineering, cloud, AI and data under one accountable team",
      "Enterprise governance, documentation and handover discipline",
      "Architecture designed for scale beyond the current market",
    ],
  },

  team: {
    label: "Leadership",
    title: "Leadership",
    subtext:
      "AZM Nexus is led by a technology practitioner, not a marketing function. Our leadership is anchored by the Chief Executive Officer.",
    members: [
      {
        name: "Abubakar Sadiq Abdulhameed",
        role: "Chief Executive Officer",
        bio: "A results-driven technologist with six years of experience across AI, software engineering, and machine learning. Skilled in development, algorithms, and data science — with a track record of translating complex concepts into clear, actionable outcomes.",
        imageUrl: "/images/team/ceo.jpg",
        linkedin: "https://www.linkedin.com/in/abubakar-sadiq-abdulhameed/",
      },
    ],
  },

  contact: {
    label: "Start a Conversation",
    title: "Let's examine your operating model",
    subtext:
      "Whether you are an enterprise, institution, investor or partner — we welcome serious inquiries about modernising, automating and scaling your organisation.",
    details: [
      {
        icon: "MapPin",
        label: "Corporate Office",
        value: "Lagos, Nigeria",
        href: "https://www.google.com/maps/search/?api=1&query=Lagos%2C+Nigeria",
      },
      {
        icon: "Mail",
        label: "Email Inquiries",
        value: "info@azmnexus.com",
        href: "mailto:info@azmnexus.com",
      },
      {
        icon: "Phone",
        label: "Direct Line",
        value: "+234 901 557 1955",
        href: "tel:+2349015571955",
      },
    ],
    form: {
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "Enter your email address",
      companyLabel: "Company / Organisation",
      companyPlaceholder: "Organization name",
      inquiryTypeLabel: "Inquiry Type",
      inquiryTypeOptions: [
        "Enterprise Transformation",
        "Software Engineering",
        "Cloud & Infrastructure",
        "Artificial Intelligence",
        "Automation",
        "Data & Analytics",
        "Partnership",
        "General",
      ],
      messageLabel: "Message",
      messagePlaceholder: "What are you looking to modernise, automate or scale?",
      submitButton: "Send Inquiry",
      successTitle: "Inquiry Sent Successfully",
      successMessage:
        "Thank you for reaching out. A member of the AZM Nexus team will be in touch with you shortly.",
      resetButton: "Send Another Inquiry",
      errorMessage: "Something went wrong. Please try again.",
    },
  },

  ctaBand: {
    title: "Ready to connect the whole system?",
    subtext:
      "Tell us how your organisation operates today. We will tell you what it could operate like — and what it takes to get there.",
    button: "Partner With Us",
  },

  footer: {
    links: [
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Approach", href: "/approach" },
      { label: "Insights", href: "/insights" },
      { label: "About", href: "/about" },
    ],
    note: "International Technology Hub · Enterprise Transformation Partner",
  },

  pages: {
    services: {
      label: "Technology Services",
      title: "Enterprise capability, delivered as one system",
      subtext:
        "Our Technology Services division connects six disciplines into a single capability — so modernisation arrives as an operating system, not a set of disconnected projects.",
      capabilitiesLabel: "The Six Disciplines",
      engagementLabel: "How We Engage",
    },
    about: {
      label: "About",
      title: "Built to connect, not to digitise in isolation",
      subtext:
        "We are a technology hub and enterprise transformation partner, aligned to the standards international delivery demands.",
    },
    approach: {
      label: "Approach",
      title: "A deliberate sequence, not a service catalogue",
      subtext:
        "Our method is designed to produce operational capability that survives after the engagement ends.",
    },
    industries: {
      label: "Industries",
      title: "Complex operations, connected",
      subtext:
        "We work where operational complexity is high, systems are fragmented, and the cost of disconnection is measurable.",
    },
    insights: {
      label: "Insights",
      title: "Perspectives on enterprise transformation",
      subtext:
        "Our thinking on modernising, automating and scaling complex organisations.",
    },
  },
};

export default en;
