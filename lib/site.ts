export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.azmnexus.com";

export const organizationName = "AZM Nexus Limited";

export const organizationLegalName = "AZM Nexus Limited";

export const contactEmail = "info@azmnexus.com";

export const contactPhone = "+2349015571955";

/**
 * Social profiles are used for JSON-LD `sameAs`. Update these when the social
 * media realignment lands — see SOCIAL.md for the channel plan.
 */
export const socialProfiles: string[] = [
  "https://www.linkedin.com/company/azmnexus",
];

export const openGraphLocale: Record<string, string> = {
  en: "en_US",
  ar: "ar_AE",
  fr: "fr_FR",
  de: "de_DE",
};
