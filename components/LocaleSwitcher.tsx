"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { localeLabels, locales, localeShortLabels } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { useContent, useLocale } from "@/i18n/LocaleProvider";

interface LocaleSwitcherProps {
  variant?: "light" | "dark";
}

/**
 * Switches locale while keeping the visitor on the equivalent route.
 * `/en/services` -> `/de/services`
 */
export const LocaleSwitcher = ({ variant = "dark" }: LocaleSwitcherProps) => {
  const currentLocale = useLocale();
  const content = useContent();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const buildHref = (locale: Locale) => {
    const segments = pathname.split("/").filter(Boolean);
    const rest = segments.slice(1).join("/");
    return rest ? `/${locale}/${rest}` : `/${locale}`;
  };

  const triggerTone =
    variant === "light"
      ? "border-white/25 bg-white/10 text-white hover:bg-white/20"
      : "border-border bg-white text-text-primary hover:border-accent hover:text-accent";

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={content.nav.localeSwitcherLabel}
        className={`inline-flex items-center gap-2 rounded-btn border px-[12px] py-[8px] text-[13px] font-medium transition ${triggerTone}`}
      >
        <Globe size={15} aria-hidden="true" />
        <span>{localeShortLabels[currentLocale]}</span>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={content.nav.localeSwitcherLabel}
          className="absolute end-0 z-50 mt-2 min-w-[160px] overflow-hidden rounded-card border border-border bg-white py-1 shadow-card"
        >
          {locales.map((locale) => (
            <li key={locale}>
              <Link
                href={buildHref(locale)}
                hrefLang={locale}
                onClick={() => setOpen(false)}
                aria-current={locale === currentLocale ? "true" : undefined}
                className={`block px-4 py-2 text-[13px] transition hover:bg-section-alt ${
                  locale === currentLocale
                    ? "font-semibold text-accent"
                    : "text-text-primary"
                }`}
              >
                {localeLabels[locale]}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
