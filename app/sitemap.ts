import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

/** Locale-independent routes. Each is expanded across every supported locale. */
const routes = ["", "/services", "/about", "/approach", "/industries", "/insights"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alternate) => [alternate, `${siteUrl}/${alternate}${route}`])
        ),
      },
    }))
  );
}
