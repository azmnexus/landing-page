import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getContent } from "@/content";
import { openGraphLocale, siteUrl } from "@/lib/site";

interface PageMetadataInput {
  locale: Locale;
  /** Locale-independent path, e.g. "/services" or "" for the home page. */
  path?: string;
  title?: string;
  description?: string;
  keywords?: string[];
}

const languageAlternates = (path = "") => {
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    alternates[locale] = `/${locale}${path}`;
  }
  alternates["x-default"] = `/${locales[0]}${path}`;
  return alternates;
};

export const buildPageMetadata = ({
  locale,
  path = "",
  title,
  description,
  keywords,
}: PageMetadataInput): Metadata => {
  const content = getContent(locale);
  const resolvedTitle = title ?? content.meta.title;
  const resolvedDescription = description ?? content.meta.description;
  const resolvedKeywords = keywords ?? content.meta.keywords;
  const canonical = `/${locale}${path}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: resolvedKeywords,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: content.common.wordmark,
      title: resolvedTitle,
      description: resolvedDescription,
      locale: openGraphLocale[locale] ?? "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
    },
  };
};

export const buildOrganizationJsonLd = (locale: Locale) => {
  const content = getContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: content.common.wordmark,
    legalName: "AZM Nexus Limited",
    url: `${siteUrl}/${locale}`,
    description: content.meta.description,
    slogan: content.common.tagline,
    areaServed: "Worldwide",
    knowsLanguage: [...locales],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    email: "info@azmnexus.com",
    telephone: "+2349015571955",
    sameAs: ["https://www.linkedin.com/company/azmnexus"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${content.common.wordmark} Technology Services`,
      itemListElement: content.capabilities.items.map((capability) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: capability.title,
          description: capability.description,
          url: `${siteUrl}/${locale}/services#${capability.slug}`,
        },
      })),
    },
  };
};
