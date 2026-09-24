export const locales = ["en", "ar", "fr", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
  fr: "ltr",
  de: "ltr",
};

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  fr: "Français",
  de: "Deutsch",
};

export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  ar: "AR",
  fr: "FR",
  de: "DE",
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const isRtl = (locale: Locale): boolean => localeDirections[locale] === "rtl";

/**
 * Builds a locale-prefixed path. The site always prefixes the locale so every
 * route has a single canonical URL form.
 */
export const localePath = (locale: Locale, path = ""): string => {
  const normalized = path.replace(/^\/+/, "");
  return normalized ? `/${locale}/${normalized}` : `/${locale}`;
};

/**
 * Picks the best matching locale from an `Accept-Language` header value.
 */
export const matchLocale = (acceptLanguage: string | null): Locale => {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(",")
    .map((entry) => {
      const [tag, q] = entry.trim().split(";q=");
      return { tag: tag.trim().toLowerCase(), quality: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
    if (isLocale(tag)) return tag as Locale;
  }

  return defaultLocale;
};
