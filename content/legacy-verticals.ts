/**
 * Archived pre-repositioning content.
 *
 * The CEO office directive of September 2026 repositioned AZM Nexus from a
 * diversified holding company to an internationally oriented technology hub and
 * enterprise transformation partner. The eight operating verticals were removed
 * from the public site as a result.
 *
 * This file preserves that content verbatim so the decision remains reversible
 * from a single commit and so the historical record is not lost. Nothing in this
 * file is rendered by the live site. The vertical names are retained in
 * `content/locales/*.ts` under `industries`, reframed as sectors served.
 *
 * Archived: 2026-09-24
 */

export interface LegacyPortfolioCard {
  title: string;
  description: string;
  imageUrl: string;
  badge: string;
  iconName: string;
}

export interface LegacyOperationsCard {
  title: string;
  description: string;
  status: "Active" | "In Progress";
}

export const RETIRED_TAGLINE = "Diversified. Execution-Driven. National.";

export const RETIRED_HERO_CONTENT = {
  label: "DIVERSIFIED HOLDING COMPANY • INNOVATION • SUSTAINABLE GROWTH",
  headline: "Building Sustainable Businesses for the Future",
  subtext:
    "AZM Nexus Limited is a diversified enterprise operating across technology services, digital health, agriculture, trade, construction, real estate, and digital finance. Through strategic investment, innovation, and operational excellence, we build resilient businesses that deliver long-term value for customers, partners, investors, and communities.",
  ctaPrimary: "Explore Our Businesses",
  ctaSecondary: "Partner With Us",
  stats: [
    { value: "8", label: "Core Verticals" },
    { value: "Diversified", label: "Enterprise Group" },
    { value: "Long-Term", label: "Value Creation" },
  ],
};

export const RETIRED_NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Operations", href: "#operations" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const RETIRED_PORTFOLIO_CARDS: LegacyPortfolioCard[] = [
  {
    title: "Technology Services",
    description:
      "Driving digital transformation through enterprise technology, software engineering, cloud infrastructure, and intelligent automation that empower organizations to innovate and scale.",
    imageUrl: "/images/Technology_Services.jpeg",
    badge: "Active Sector",
    iconName: "Monitor",
  },
  {
    title: "Digital Health",
    description:
      "Advancing the future of healthcare with technology-driven solutions that improve patient experiences, optimize clinical workflows, and strengthen healthcare delivery.",
    imageUrl: "/images/Digital_Health.jpeg",
    badge: "Active Sector",
    iconName: "Stethoscope",
  },
  {
    title: "Agriculture & Agribusiness",
    description:
      "Building resilient agricultural ecosystems through strategic investments in production, processing, logistics, and value-added agribusiness ventures.",
    imageUrl: "/images/Agriculture_and_Agribusiness.jpeg",
    badge: "Active Sector",
    iconName: "Sprout",
  },
  {
    title: "General Trade & Household Retail",
    description:
      "Supporting everyday living through efficient trading, procurement, and retail distribution of essential consumer and household products.",
    imageUrl: "/images/General_Trade_and_Household_Retail.jpeg",
    badge: "Active Sector",
    iconName: "Store",
  },
  {
    title: "Bulk Agricultural Trade",
    description:
      "Connecting producers with regional and international markets through reliable commodity sourcing, logistics, and supply chain management.",
    imageUrl: "/images/Bulk_Agricultural_Trade.jpeg",
    badge: "Active Sector",
    iconName: "Truck",
  },
  {
    title: "P2P Digital Asset Trading",
    description:
      "Enabling trusted digital asset exchange through secure, compliant, and user-focused peer-to-peer trading platforms.",
    imageUrl: "/images/P2P_Digital_Asset_Trading.jpeg",
    badge: "Active Sector",
    iconName: "RefreshCw",
  },
  {
    title: "Building & Construction",
    description:
      "Delivering innovative construction and infrastructure solutions that combine engineering excellence, quality execution, and sustainable development.",
    imageUrl: "/images/construction-real-estate.jpg",
    badge: "Active Sector",
    iconName: "Building2",
  },
  {
    title: "Real Estate",
    description:
      "Developing and managing high-value real estate assets that foster economic growth, investment opportunities, and vibrant communities.",
    imageUrl: "/images/real_estate.jpg",
    badge: "Active Sector",
    iconName: "Home",
  },
];

export const RETIRED_OPERATIONS_CARDS: LegacyOperationsCard[] = [
  {
    title: "Technology Services",
    description:
      "Digital infrastructure and enterprise solutions are being scaled to support business growth and service delivery.",
    status: "Active",
  },
  {
    title: "Digital Health",
    description:
      "Platform development and partner onboarding continue as the healthcare offering moves toward broader deployment.",
    status: "In Progress",
  },
  {
    title: "Agriculture & Agribusiness",
    description:
      "Agricultural operations are expanding through production, processing, logistics, and market access initiatives.",
    status: "Active",
  },
  {
    title: "General Trade & Household Retail",
    description:
      "Retail and distribution channels are operating with growing reach across essential consumer products.",
    status: "Active",
  },
  {
    title: "Bulk Agricultural Trade",
    description:
      "Commodity trading operations are active, strengthening sourcing, logistics, and market connectivity.",
    status: "Active",
  },
  {
    title: "P2P Digital Asset Trading",
    description:
      "Trading protocols are live, with compliance and operational controls being reinforced for scale.",
    status: "Active",
  },
  {
    title: "Building & Construction",
    description:
      "Construction and infrastructure initiatives are advancing with a focus on execution quality and long-term delivery.",
    status: "Active",
  },
  {
    title: "Real Estate",
    description:
      "Real estate activities are being developed around strategic asset growth and long-term value creation.",
    status: "Active",
  },
];

export const RETIRED_TICKER_CONTENT = [
  "Technology Services",
  "Digital Health",
  "Agriculture & Agribusiness",
  "General Trade",
  "Bulk Agricultural Trade",
  "P2P Digital Asset Trading",
  "Lagos & Beyond",
  "Execution-Driven",
];
