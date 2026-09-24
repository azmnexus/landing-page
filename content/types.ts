import type { Locale } from "@/i18n/config";

export interface NavLink {
  label: string;
  href: string;
}

export interface Capability {
  slug: string;
  title: string;
  short: string;
  description: string;
  iconName: string;
  outcomes: string[];
}

export interface ApproachStage {
  step: string;
  title: string;
  description: string;
}

export interface Industry {
  title: string;
  description: string;
  iconName: string;
}

export interface Insight {
  category: string;
  title: string;
  summary: string;
  date: string;
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

export interface ContactFormCopy {
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  inquiryTypeLabel: string;
  inquiryTypeOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  successTitle: string;
  successMessage: string;
  resetButton: string;
  errorMessage: string;
}

export interface PageIntro {
  label: string;
  title: string;
  subtext: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

/**
 * The full copy surface of the site. Every locale file must satisfy this
 * interface, so a missing or misspelled key is a compile-time error.
 */
export interface SiteContent {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    localeName: string;
  };
  common: {
    wordmark: string;
    tagline: string;
    copyright: string;
  };
  nav: {
    links: NavLink[];
    ctaText: string;
    localeSwitcherLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
  };
  hero: {
    label: string;
    headline: string;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary: string;
    backgroundImage: string;
    backgroundAlt: string;
  };
  ticker: string[];
  proposition: {
    label: string;
    statement: string;
    emphasis: string;
    supporting: string;
  };
  capabilities: {
    label: string;
    title: string;
    subtext: string;
    carouselPrevLabel: string;
    carouselNextLabel: string;
    items: Capability[];
  };
  approach: {
    label: string;
    title: string;
    subtext: string;
    stages: ApproachStage[];
  };
  industries: {
    label: string;
    title: string;
    subtext: string;
    items: Industry[];
  };
  insights: {
    label: string;
    title: string;
    subtext: string;
    ctaText: string;
    items: Insight[];
  };
  about: {
    label: string;
    title: string;
    subtext: string;
    storyLabel: string;
    story: string[];
    missionLabel: string;
    mission: string;
    valuesLabel: string;
    values: ValueItem[];
    credentialsLabel: string;
    credentials: string[];
  };
  team: {
    label: string;
    title: string;
    subtext: string;
    members: TeamMember[];
  };
  contact: {
    label: string;
    title: string;
    subtext: string;
    details: ContactDetail[];
    form: ContactFormCopy;
  };
  ctaBand: {
    title: string;
    subtext: string;
    button: string;
  };
  footer: {
    links: NavLink[];
    note: string;
  };
  pages: {
    services: PageIntro & { capabilitiesLabel: string; engagementLabel: string };
    about: PageIntro;
    approach: PageIntro;
    industries: PageIntro;
    insights: PageIntro;
  };
}

export interface LocalizedContent {
  locale: Locale;
  content: SiteContent;
}
