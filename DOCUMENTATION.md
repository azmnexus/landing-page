# AZM Nexus — Corporate Website Documentation

**Project:** Corporate website for AZM Nexus Limited, positioned as an
internationally oriented technology hub and enterprise transformation partner.
**Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React.
**Locales:** English (`en`), Arabic (`ar`, RTL), French (`fr`), German (`de`).
**Related documents:** `MESSAGING.md` (copy authority), `SOCIAL.md` (channel kit).

---

## Table of Contents

1. [Overview](#1-overview)
2. [Getting Started](#2-getting-started)
3. [Project Structure](#3-project-structure)
4. [Routing & Internationalisation](#4-routing--internationalisation)
5. [Content System](#5-content-system)
6. [SEO](#6-seo)
7. [Components](#7-components)
8. [Styling, RTL & Typography](#8-styling-rtl--typography)
9. [Environment Variables](#9-environment-variables)
10. [Verification](#10-verification)
11. [Conventions](#11-conventions)
12. [Outstanding Work](#12-outstanding-work)

---

## 1. Overview

The site replaced a single-page "diversified holding company" landing page with a
four-locale, six-route corporate presence reflecting the repositioning directive
issued by the Office of the CEO & Managing Director.

**What changed conceptually**

| Before | After |
|---|---|
| Diversified holding company | Internationally oriented technology hub |
| 8 operating verticals | 6 connected capability disciplines |
| "Diversified. Execution-Driven. National." | "We connect your business into one intelligent operating system" |
| Portfolio + Operations progress tracker | Proposition, Capabilities, Approach, Industries, Insights |
| Single page, English only | 6 routes × 4 locales = 24 pages |

The retired copy is preserved verbatim in `content/legacy-verticals.ts` so the
previous positioning can be recovered or referenced. That file is **not imported
by any component**.

---

## 2. Getting Started

```bash
npm install
npm run dev      # http://localhost:3000 -> redirects to /en
npm run build    # production build, prerenders 24 locale pages
npm run lint
```

Requires Node.js 18+.

---

## 3. Project Structure

```
landing-page/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx           # ROOT layout: <html lang dir>, fonts, JSON-LD, NavBar/Footer
│   │   ├── not-found.tsx        # Locale-aware 404
│   │   ├── page.tsx             # Home
│   │   ├── services/page.tsx
│   │   ├── about/page.tsx
│   │   ├── approach/page.tsx
│   │   ├── industries/page.tsx
│   │   └── insights/page.tsx
│   ├── globals.css              # Tailwind layers, Arabic font override, reduced-motion
│   ├── robots.ts                # Generated /robots.txt
│   └── sitemap.ts               # Generated /sitemap.xml (24 URLs + alternates)
├── components/
│   ├── ErrorBoundary.tsx        # Class-component error boundary
│   ├── NavBar.tsx               # Fixed nav, mobile drawer, locale switcher
│   ├── Footer.tsx               # Footer links + locale switcher + positioning note
│   ├── HeroSection.tsx          # Home hero
│   ├── TickerSection.tsx        # Capability marquee (RTL-aware, reduced-motion aware)
│   ├── PropositionSection.tsx   # Central proposition statement
│   ├── CapabilitiesSection.tsx  # Exports CapabilitiesSection (carousel) + CapabilityGrid (detailed)
│   ├── CardBackdrop.tsx        # Decorative low-opacity card image + scrim, with fallback
│   ├── ApproachSection.tsx      # Five-stage engagement sequence
│   ├── IndustriesSection.tsx    # Sectors served
│   ├── InsightsSection.tsx      # Placeholder insight listing
│   ├── AboutContent.tsx         # Story, mission, values, delivery characteristics
│   ├── TeamSection.tsx          # Leadership with flip cards
│   ├── ContactSection.tsx       # Contact details + Formspree form
│   ├── CTABand.tsx              # Reusable conversion band
│   ├── PageHero.tsx             # Reusable inner-page hero
│   ├── SectionHeading.tsx       # Shared label/title/subtext stack
│   └── LocaleSwitcher.tsx       # Dropdown locale switcher
├── content/
│   ├── types.ts                 # SiteContent interface tree
│   ├── index.ts                 # getContent(locale) + type re-exports
│   ├── locales/{en,ar,fr,de}.ts # Per-locale dictionaries
│   ├── media.ts                 # Locale-independent image map for cards
│   └── legacy-verticals.ts      # Retired copy, intentionally unused
├── i18n/
│   ├── config.ts                # locales, directions, labels, matchLocale, localePath
│   └── LocaleProvider.tsx       # useContent / useLocale / useDir / useHref
├── lib/
│   ├── cn.ts                    # Minimal class-name joiner
│   ├── icons.ts                 # Explicit Lucide registry
│   ├── seo.ts                   # buildPageMetadata, buildOrganizationJsonLd
│   └── site.ts                  # siteUrl, org details, socialProfiles, OG locales
├── middleware.ts                # Locale detection + redirect, locale cookie
├── MESSAGING.md
├── SOCIAL.md
└── DOCUMENTATION.md
```

**Note:** there is deliberately **no `app/layout.tsx`**. `app/[locale]/layout.tsx`
is the root layout, because a root layout that hardcodes `<html lang="en">`
overrides per-locale `lang`/`dir`. Adding one back will break RTL and hreflang.

---

## 4. Routing & Internationalisation

### Approach

No i18n library is used. The site uses a hand-rolled locale segment with typed
dictionaries, which keeps the dependency surface small and gives compile-time
safety on translations (`next-intl` was the alternative considered).

### URL strategy

The locale is **always** prefixed — there is no unprefixed route, so each page
has exactly one canonical URL.

```
/en/services   /ar/services   /fr/services   /de/services
```

`middleware.ts` redirects any unprefixed path to a locale-prefixed one, choosing
the locale from, in order: the `AZM_LOCALE` cookie → `Accept-Language` → `en`.
The cookie is set (1 year, `sameSite: lax`) whenever a locale-prefixed path is
visited. The matcher excludes `api`, `_next/static`, `_next/image`, `images`,
`favicon.ico`, `robots.txt` and `sitemap.xml`.

### Static generation

`app/[locale]/layout.tsx` sets `dynamicParams = false` and returns all four
locales from `generateStaticParams`, so every locale page is prerendered and
unknown locales 404.

### Client-side locale access

`LocaleProvider` wraps the tree and exposes:

| Hook | Returns |
|---|---|
| `useContent()` | The `SiteContent` dictionary for the active locale |
| `useLocale()` | The active `Locale` |
| `useDir()` | `"ltr"` or `"rtl"` |
| `useHref()` | Resolves a path to its locale-prefixed form |

`useHref` accepts `"/services"` → `/en/services`, `"/#contact"` → `/en#contact`,
and `"#"` → `/en`. **Internal links must go through `useHref` (or `localePath`)
so they never escape the locale segment.**

---

## 5. Content System

`content/types.ts` defines `SiteContent` — the complete copy surface of the site.
Every locale file is declared as `const en: SiteContent = {...}`, so **a missing
or misspelled key in any locale is a compile-time error.** This is the mechanism
that keeps four languages in parity.

```
content/types.ts      -> SiteContent (the contract)
content/locales/en.ts -> master, human-authored
content/locales/ar.ts -> must satisfy SiteContent
content/locales/fr.ts -> must satisfy SiteContent
content/locales/de.ts -> must satisfy SiteContent
content/index.ts      -> getContent(locale) for server components
```

### Two access patterns

- **Server components** (pages, `sitemap.ts`, `lib/seo.ts`): `getContent(params.locale)`.
- **Client components**: `useContent()` from `LocaleProvider`.

### Top-level sections of `SiteContent`

`meta` · `common` · `nav` · `hero` · `ticker` · `proposition` · `capabilities` ·
`approach` · `industries` · `insights` · `about` · `team` · `contact` · `ctaBand` ·
`footer` · `pages`

### How to change copy

1. Edit `content/locales/en.ts` first — it is the reference text.
2. Mirror the change in `ar.ts`, `fr.ts`, `de.ts`. The build fails until you do.
3. Never write marketing copy inline in a component.

---

## 6. SEO

`lib/seo.ts` centralises metadata:

- **`buildPageMetadata({ locale, path, title, description, keywords })`** produces
  title, description, keywords, absolute canonical, **hreflang alternates for all
  four locales plus `x-default`**, Open Graph (with per-locale `og:locale`) and
  Twitter card metadata.
- **`buildOrganizationJsonLd(locale)`** emits `Organization` JSON-LD (with
  `areaServed: Worldwide`, `knowsLanguage`, address, contact, `sameAs` and an
  `OfferCatalog` of the six capabilities as `Service` entries). It is injected in
  `app/[locale]/layout.tsx`.

Generated routes:

- `/sitemap.xml` — 24 URLs, each carrying four `xhtml:link` alternates.
- `/robots.txt` — allows all, declares host and sitemap.

`metadataBase` is set from `siteUrl` in the locale layout, so relative metadata
resolves to absolute URLs.

**Verified output** (per locale page): `<html lang=".." dir="..">`, absolute
canonical, four alternates + `x-default`.

---

## 7. Components

**Layout components**

- `NavBar` — fixed header, desktop links, locale switcher, CTA, mobile drawer
  (Escape to close, backdrop click, body-scroll lock while open, `role="dialog"`).
- `Footer` — logo, copyright, route links, locale switcher, positioning note.

**Home sections (in order)**

`HeroSection` → `TickerSection` → `PropositionSection` → `CapabilitiesSection` →
`ApproachSection` → `IndustriesSection` → `InsightsSection` → `TeamSection` →
`CTABand` → `ContactSection`

**Shared primitives**

- `SectionHeading` — the label/title/subtext stack, previously duplicated inline
  in four components.
- `PageHero` — inner-page hero, gradient mirrored under `rtl:`.
- `CTABand` — closing conversion band.
- `CapabilitiesSection.tsx` exports two components: the home carousel and
  `CapabilityGrid`, the detailed layout used on `/services`.

**Icon resolution**

`lib/icons.ts` holds an explicit `resolveIcon(name)` registry. Content refers to
icons by string name. This replaced a namespace import of `lucide-react` that
pulled the entire icon set into the client bundle. **Adding a new icon to content
means adding it to `lib/icons.ts`** — otherwise it renders nothing.

**Contact form**

`ContactSection` posts to Formspree. The payload now includes `locale` and a
`_subject` line, because the site serves four languages and the recipient needs
that context. Validation is client-side with inline errors; success replaces the
form with a confirmation panel.

---

## 8. Styling, RTL & Typography

### Tokens (`tailwind.config.ts`)

`primary #1D4A52` · `accent #2EB8A6` · `text-primary #0D1F22` ·
`text-secondary #4A6670` · `section-alt #F4F8F8` · `border #E0EEEE` ·
radii `card`/`btn` · shadows `card`/`contact`/`operations` · padding `section` (80px).

### Fonts

- **Plus Jakarta Sans** (`--font-plus-jakarta-sans`) — Latin, loaded in the locale layout.
- **Noto Kufi Arabic** (`--font-arabic`) — Arabic, loaded in the locale layout.

Plus Jakarta Sans has no Arabic glyphs, so `globals.css` switches the document
font under `html[lang="ar"]` and neutralises the wide letter-spacing applied to
Latin overline labels.

### RTL

Arabic renders with `dir="rtl"`, set on `<html>` from `localeDirections`.

Directional rules already handled:

- Tailwind **logical utilities** (`start-*`, `end-*`, `ms-*`, `me-*`) replace
  left/right in every component.
- Hero and `PageHero` gradients mirror via `rtl:bg-[linear-gradient(250deg,...)]`.
- `TickerSection` inverts its marquee direction for RTL.
- Carousel chevrons in `CapabilitiesSection` swap direction via `useDir()`.
- Arrow icons in `InsightsSection` and `CTABand` rotate via `rtl:rotate-180`.

**When adding components, use logical utilities — not `left-*`/`right-*`/**
**`ml-*`/`mr-*`.**

### Card imagery

Cards use a dark surface (`#0B2226`) with a decorative image at **22% opacity**
(32% on hover) behind a gradient scrim, so text stays legible over any source
image. This is why the capability and industry cards are dark: a low-opacity
image over a light card reads as a grey smudge and looks like a rendering fault.

`components/CardBackdrop.tsx` encapsulates this. It renders **nothing** when the
source is missing or fails to load, so a card degrades to a plain dark surface
rather than breaking or collapsing. The image is `alt=""` and `aria-hidden` — it
is decorative; the card heading carries the meaning.

### Motion

Scroll-reveal animations use Framer Motion with `viewport={{ once: true }}`. The
ticker respects `prefers-reduced-motion` via `useReducedMotion()`, and
`globals.css` disables smooth scrolling under the same query.

---

## 9. Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin, sitemap and JSON-LD URLs. Defaults to `https://www.azmnexus.com`. |
| `NEXT_PUBLIC_FORMSPREE_ID` | Optional | Contact form endpoint. Defaults to the existing public ID `mgobkzgy`. |

Neither is required for the build to succeed, but `NEXT_PUBLIC_SITE_URL` should be
set correctly in production so canonical URLs and the sitemap are accurate.

---

## 10. Verification

Performed against the current build:

| Check | Result |
|---|---|
| `npm run build` | ✅ Compiled, 24 locale pages prerendered |
| `npm run lint` | ✅ No warnings or errors |
| `<html lang>`/`dir` per locale | ✅ `ar` → `dir="rtl"`; `en`/`fr`/`de` → `ltr` |
| Canonical | ✅ Absolute, locale-specific |
| hreflang alternates | ✅ 4 locales + `x-default` on every route |
| `/sitemap.xml` | ✅ 24 URLs, 96 alternate links |
| `/robots.txt` | ✅ Allows all, declares host + sitemap |
| Retired positioning in live copy | ✅ Absent (only in `legacy-verticals.ts` and new proposition copy that quotes "digitise") |

**Not yet performed — requires a browser:**

- Manual RTL visual pass on `/ar` (gradient mirroring, card flip, carousel, drawer).
- Live contact-form submission in each locale.
- Cross-browser and mobile viewport checks.

---

## 11. Conventions

1. **Copy lives in `content/locales/*.ts`.** No marketing copy inline in components.
2. **Internal links go through `useHref()`.** Never hardcode `/en/...`.
3. **Directional CSS uses logical utilities.** No `left-*`/`right-*` for layout.
4. **New content icons must be registered in `lib/icons.ts`.**
5. **Card imagery lives in `content/media.ts`, not in the locale files** — image
   paths are not translated and must not be duplicated per locale. `industryImages`
   is positional: it must stay aligned with `content.industries.items` in every
   locale file.
5. **New copy keys must be added to `SiteContent` in `content/types.ts`** before
   use, then filled in every locale.
6. **New routes go under `app/[locale]/`** and must supply `generateMetadata`
   via `buildPageMetadata`.
7. `MESSAGING.md` governs wording; check it before introducing new vocabulary.

---

## 12. Outstanding Work

**Requires external input or assets**

- **Native review of `ar` / `fr` / `de`** — current translations are
  machine-assisted drafts and must not ship unreviewed.
- **Capability imagery** — the six capability **carousel** cards and the eight
  industry cards now render a low-opacity background image via `CardBackdrop`.
  Assets live in `public/images/capabilities/` and `public/images/industries/`,
  mapped in `content/media.ts`. Four industry assets were reused from the retired
  verticals; the remaining **6 capability** and **4 industry** assets are still to
  be supplied. Until then those cards render as plain dark surfaces — no code
  change is needed, the image appears as soon as the file exists at the mapped
  path. The detailed `CapabilityGrid` on `/services` is deliberately left
  image-free because it is text-dense.
- **Insights articles** — the listing is intentionally a placeholder; copy states
  this explicitly. Replace when content exists.
- **Social profiles** — `socialProfiles` in `lib/site.ts` currently lists only
  LinkedIn. Extend as channels are realigned (see `SOCIAL.md`).
- **Metrics** — deliberately omitted. No numeric claims are published until verified.

**Known issues**

- `next@14.2.16` is flagged by npm as having a security vulnerability and should
  be upgraded to a patched 14.x release.
- `jimp` is listed as a dependency but is not imported anywhere. It can be removed
  if not needed by tooling outside this repo.
- Orphaned assets: the eight retired vertical images in `public/images/` are no
  longer referenced. Delete or archive them once the pivot is signed off.
