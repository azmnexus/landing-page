/**
 * Locale-independent media map.
 *
 * Image paths are not translated, so they deliberately live here rather than
 * being duplicated across all four locale dictionaries.
 */

/** Capability imagery, keyed by `Capability.slug` (stable across locales). */
export const capabilityImages: Record<string, string> = {
  "digital-presence": "/images/capabilities/digital-presence.jpg",
  "software-engineering": "/images/capabilities/software-engineering.jpg",
  cloud: "/images/capabilities/cloud.jpg",
  "artificial-intelligence": "/images/capabilities/artificial-intelligence.jpg",
  automation: "/images/capabilities/automation.jpg",
  data: "/images/capabilities/data.jpg",
};

/**
 * Industry imagery.
 *
 * ORDERING IS PART OF THE CONTRACT: entries must line up positionally with
 * `content.industries.items` in every locale file. Adding, removing or
 * reordering an industry means updating this array to match. Any entry whose
 * asset is missing simply renders no image — cards degrade to a plain dark
 * surface rather than breaking.
 */
export const industryImages: string[] = [
  "/images/industries/financial-services.jpg",
  "/images/industries/healthcare.jpg",
  "/images/industries/agriculture.jpg",
  "/images/industries/trade-retail.jpg",
  "/images/industries/construction-real-estate.jpg",
  "/images/industries/energy-infrastructure.jpg",
  "/images/industries/public-sector.jpg",
  "/images/industries/professional-services.jpg",
];

export const getCapabilityImage = (slug: string): string | null =>
  capabilityImages[slug] ?? null;

export const getIndustryImage = (index: number): string | null =>
  industryImages[index] ?? null;
