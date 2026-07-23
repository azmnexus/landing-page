export interface StatBlock {
  value: string;
  label: string;
}

export interface PortfolioCard {
  title: string;
  description: string;
  imageUrl: string;
  badge: string;
  iconName: string;
}

export interface OperationsCard {
  title: string;
  description: string;
  status: "Active" | "In Progress";
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
}

export interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export const COMMON_CONTENT = {
  wordmark: "AZM Nexus",
  copyright: "© 2026 AZM Nexus Limited. All rights reserved.",
};

export const NAV_CONTENT = {
  ctaText: "Partner With Us",
  links: [
    { label: "About Us", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Operations", href: "#operations" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
};

export const HERO_CONTENT = {
  label: "DIVERSIFIED HOLDING COMPANY • INNOVATION • SUSTAINABLE GROWTH",
  headline: "Building Sustainable Businesses for the Future",
  subtext: "AZM Nexus Limited is a diversified enterprise operating across technology services, digital health, agriculture, trade, construction, real estate, and digital finance. Through strategic investment, innovation, and operational excellence, we build resilient businesses that deliver long-term value for customers, partners, investors, and communities.",
  ctaPrimary: "Explore Our Businesses",
  ctaSecondary: "Partner With Us",
  stats: [
    { value: "8", label: "Core Verticals" },
    { value: "Diversified", label: "Enterprise Group" },
    { value: "Long-Term", label: "Value Creation" },
  ],
  // TODO: replace with actual image
  backgroundImage: "/images/hero_image.jpg",
};

export const PORTFOLIO_CONTENT = {
  label: "WHAT WE DO",
  title: "Our Business Portfolio",
  subtext: "We strategically operate across high-impact sectors, ensuring stability, compliance, and growth in every venture.",
  cards: [
    {
      title: "Technology Services",
      description: "Driving digital transformation through enterprise technology, software engineering, cloud infrastructure, and intelligent automation that empower organizations to innovate and scale.",
      imageUrl: "/images/Technology_Services.jpeg",
      badge: "Active Sector",
      iconName: "Monitor",
    },
    {
      title: "Digital Health",
      description: "Advancing the future of healthcare with technology-driven solutions that improve patient experiences, optimize clinical workflows, and strengthen healthcare delivery.",
      imageUrl: "/images/Digital_Health.jpeg",
      badge: "Active Sector",
      iconName: "Stethoscope",
    },
    {
      title: "Agriculture & Agribusiness",
      description: "Building resilient agricultural ecosystems through strategic investments in production, processing, logistics, and value-added agribusiness ventures.",
      imageUrl: "/images/Agriculture_and_Agribusiness.jpeg",
      badge: "Active Sector",
      iconName: "Sprout",
    },
    {
      title: "General Trade & Household Retail",
      description: "Supporting everyday living through efficient trading, procurement, and retail distribution of essential consumer and household products.",
      imageUrl: "/images/General_Trade_and_Household_Retail.jpeg",
      badge: "Active Sector",
      iconName: "Store",
    },
    {
      title: "Bulk Agricultural Trade",
      description: "Connecting producers with regional and international markets through reliable commodity sourcing, logistics, and supply chain management.",
      imageUrl: "/images/Bulk_Agricultural_Trade.jpeg",
      badge: "Active Sector",
      iconName: "Truck",
    },
    {
      title: "P2P Digital Asset Trading",
      description: "Enabling trusted digital asset exchange through secure, compliant, and user-focused peer-to-peer trading platforms.",
      imageUrl: "/images/P2P_Digital_Asset_Trading.jpeg",
      badge: "Active Sector",
      iconName: "RefreshCw",
    },
    {
      title: "Building & Construction",
      description: "Delivering innovative construction and infrastructure solutions that combine engineering excellence, quality execution, and sustainable development.",
      imageUrl: "/images/construction-real-estate.jpg",
      badge: "Active Sector",
      iconName: "Building2",
    },
    {
      title: "Real Estate",
      description: "Developing and managing high-value real estate assets that foster economic growth, investment opportunities, and vibrant communities.",
      imageUrl: "/images/real_estate.jpg",
      badge: "Active Sector",
      iconName: "Home",
    },
  ],
};

export const OPERATIONS_CONTENT = {
  label: "OPERATIONAL PROGRESS",
  title: "Visible Progress Across Every Sector",
  subtext: "We keep operational momentum visible across core sectors, tracking deployment status and execution milestones.",
  legend: "Active indicates fully operational businesses, while In Progress indicates initiatives moving toward launch.",
  cards: [
    {
      title: "Technology Services",
      description: "Digital infrastructure and enterprise solutions are being scaled to support business growth and service delivery.",
      status: "Active",
    },
    {
      title: "Digital Health",
      description: "Platform development and partner onboarding continue as the healthcare offering moves toward broader deployment.",
      status: "In Progress",
    },
    {
      title: "Agriculture & Agribusiness",
      description: "Agricultural operations are expanding through production, processing, logistics, and market access initiatives.",
      status: "Active",
    },
    {
      title: "General Trade & Household Retail",
      description: "Retail and distribution channels are operating with growing reach across essential consumer products.",
      status: "Active",
    },
    {
      title: "Bulk Agricultural Trade",
      description: "Commodity trading operations are active, strengthening sourcing, logistics, and market connectivity.",
      status: "Active",
    },
    {
      title: "P2P Digital Asset Trading",
      description: "Trading protocols are live, with compliance and operational controls being reinforced for scale.",
      status: "Active",
    },
    {
      title: "Building & Construction",
      description: "Construction and infrastructure initiatives are advancing with a focus on execution quality and long-term delivery.",
      status: "Active",
    },
    {
      title: "Real Estate",
      description: "Real estate activities are being developed around strategic asset growth and long-term value creation.",
      status: "Active",
    },
  ] as OperationsCard[],
};

export const TICKER_CONTENT = [
  "Technology Services",
  "Digital Health",
  "Agriculture & Agribusiness",
  "General Trade",
  "Bulk Agricultural Trade",
  "P2P Digital Asset Trading",
  "Lagos & Beyond",
  "Execution-Driven",
];

export const TEAM_CONTENT = {
  label: "OUR PEOPLE",
  title: "Leadership",
  subtext: "Our leadership is anchored by the Chief Executive Officer.",
  members: [
    { name: "Abubakar Sadiq Abdulhameed", role: "Chief Executive Officer", bio: "A results-driven technologist with six years of experience across AI, software engineering, and machine learning. Skilled in development, algorithms, and data science — with a track record of translating complex concepts into clear, actionable outcomes.", imageUrl: "/images/team/ceo.jpg", linkedin: "https://www.linkedin.com/in/abubakar-sadiq-abdulhameed/" },
    //{ name: "Pending Member", role: "To Be Updated", bio: "Details to be added later.", imageUrl: "/images/team/placeholder.jpg", linkedin: "" },
  ],
};

export const CONTACT_CONTENT = {
  title: "Let's Build Something Together",
  subtext: "Whether you are a partner, investor, institution, or client — we welcome serious inquiries across all our business sectors.",
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
    inquiryTypeOptions: ["Partnership", "Investment", "Service Request", "General"],
    messageLabel: "Message",
    messagePlaceholder: "How can we assist you?",
    submitButton: "Send Inquiry",
  },
};

export const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
