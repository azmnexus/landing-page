"use client";

import React, { createContext, useContext, useMemo } from "react";
import type { Locale } from "@/i18n/config";
import { isRtl } from "@/i18n/config";
import type { SiteContent } from "@/content/types";

interface LocaleContextValue {
  locale: Locale;
  content: SiteContent;
  dir: "ltr" | "rtl";
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export const LocaleProvider = ({
  locale,
  content,
  children,
}: {
  locale: Locale;
  content: SiteContent;
  children: React.ReactNode;
}) => {
  const value = useMemo<LocaleContextValue>(
    () => ({ locale, content, dir: isRtl(locale) ? "rtl" : "ltr" }),
    [locale, content]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

const useLocaleContext = (): LocaleContextValue => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("Locale context is missing. Wrap the tree in <LocaleProvider>.");
  }
  return context;
};

export const useLocale = (): Locale => useLocaleContext().locale;

export const useDir = (): "ltr" | "rtl" => useLocaleContext().dir;

export const useContent = (): SiteContent => useLocaleContext().content;

/**
 * Resolves an internal path to its locale-prefixed form.
 * "/services" -> "/en/services", "#contact" -> "/en#contact", "#" -> "/en"
 */
export const useHref = (): ((path: string) => string) => {
  const locale = useLocale();

  return useMemo(
    () => (path: string) => {
      const target = path.trim();
      if (!target || target === "#") return `/${locale}`;
      if (target.startsWith("#")) return `/${locale}${target}`;
      if (target.startsWith("/")) return `/${locale}${target === "/" ? "" : target}`;
      return target;
    },
    [locale]
  );
};
