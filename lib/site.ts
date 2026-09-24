/**
 * Canonical origin used for metadata, hreflang, the sitemap and JSON-LD.
 *
 * Environment variables are typed by hand, so a value like "azmnexus.com" or
 * "www.azmnexus.com" is a realistic mistake. `new URL()` throws on those, and
 * because this value feeds `metadataBase` at module scope that becomes a build
 * failure — reported as an unhelpful error, and only in the environment where
 * the variable is actually set. Normalise defensively instead.
 */
const DEFAULT_SITE_URL = "https://www.azmnexus.com";

const normalizeSiteUrl = (value: string | undefined): string => {
  const raw = (value ?? "").trim();
  if (!raw) return DEFAULT_SITE_URL;

  const hasScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(raw);
  const isHttp = /^https?:\/\//i.test(raw);

  // A non-HTTP scheme would otherwise be mangled into a valid-looking origin
  // (e.g. "ftp://x.com" -> "https://ftp"), so reject it outright.
  if (hasScheme && !isHttp) return DEFAULT_SITE_URL;

  // Accept a bare host by assuming https rather than failing the build.
  const withProtocol = isHttp ? raw : `https://${raw}`;

  try {
    // `.origin` also strips any trailing slash or path, which keeps the
    // `${siteUrl}/sitemap.xml` style concatenation in this file correct.
    return new URL(withProtocol).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
};

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

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
