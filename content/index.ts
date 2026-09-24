import type { Locale } from "@/i18n/config";
import { defaultLocale, locales } from "@/i18n/config";
import type { SiteContent } from "@/content/types";
import en from "@/content/locales/en";
import ar from "@/content/locales/ar";
import fr from "@/content/locales/fr";
import de from "@/content/locales/de";

const dictionaries: Record<Locale, SiteContent> = { en, ar, fr, de };

export const getContent = (locale: Locale): SiteContent =>
  dictionaries[locale] ?? dictionaries[defaultLocale];

export const getLocales = (): readonly Locale[] => locales;

export type { SiteContent };
export type {
  ApproachStage,
  Capability,
  ContactDetail,
  ContactFormCopy,
  Industry,
  Insight,
  NavLink,
  PageIntro,
  TeamMember,
  ValueItem,
} from "@/content/types";
