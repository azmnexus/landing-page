# AZM Nexus — Corporate Website

Corporate website for **AZM Nexus Limited** — an internationally oriented
technology hub and enterprise transformation partner.

Through its Technology Services division, AZM Nexus connects six disciplines into
one capability:

**Digital Presence · Software Engineering · Cloud · Artificial Intelligence · Automation · Data**

> We do not merely digitise isolated areas of a business. We connect its digital
> presence, customer acquisition, communication, software, data and internal
> processes into an intelligent, scalable operating system.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to
your preferred locale (e.g. `/en`).

```bash
npm run build    # production build (prerenders 24 pages)
npm start        # serve the production build
npm run lint     # ESLint
```

Requires Node.js 18+.

---

## Languages

The site ships in four locales, always locale-prefixed so every page has one
canonical URL:

| Locale | Language | Direction |
|---|---|---|
| `en` | English | LTR |
| `ar` | العربية | **RTL** |
| `fr` | Français | LTR |
| `de` | Deutsch | LTR |

`/en/services`, `/ar/services`, `/fr/services`, `/de/services`

> ⚠️ The `ar`, `fr` and `de` translations are currently machine-assisted drafts
> and require native review before launch. English is the reference text.

---

## Pages

| Route | Content |
|---|---|
| `/` | Hero, proposition, capabilities, approach, industries, insights, leadership, contact |
| `/services` | All six disciplines in detail, plus engagement model |
| `/about` | Position, mission, values, delivery characteristics, leadership |
| `/approach` | The five-stage engagement sequence |
| `/industries` | Sectors served |
| `/insights` | Perspectives (placeholder pending published content) |

---

## Editing Content

All copy lives in `content/locales/`. English is the master:

```
content/types.ts               # SiteContent contract
content/locales/en.ts          # master copy — edit this first
content/locales/{ar,fr,de}.ts   # translations
```

Every locale file is typed as `SiteContent`, so **omitting a key is a build
error** — languages cannot silently drift apart.

To change wording: edit `en.ts`, then mirror the change in the other three.

**Do not write marketing copy inside components.** Wording is governed by
`MESSAGING.md`.

---

## Documentation

| Document | Purpose |
|---|---|
| [`DOCUMENTATION.md`](./DOCUMENTATION.md) | Architecture, i18n system, components, SEO, conventions |
| [`MESSAGING.md`](./MESSAGING.md) | Positioning, tone of voice, boilerplate, approved vocabulary |
| [`SOCIAL.md`](./SOCIAL.md) | Channel bios, content pillars, launch announcement, hashtags |

---

## Tech Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React

Internationalisation is hand-rolled (locale segment + typed dictionaries) rather
than library-driven, to keep the dependency surface small and translations
compile-checked.

---

## Environment Variables

| Variable | Required | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | `https://www.azmnexus.com` |
| `NEXT_PUBLIC_FORMSPREE_ID` | Optional | `mgobkzgy` |

Set `NEXT_PUBLIC_SITE_URL` in production so canonical URLs, hreflang alternates
and the sitemap resolve correctly.

---

## Deployment

Standard Next.js deployment. The build prerenders all 24 locale pages as static
HTML; `middleware.ts` handles locale detection and redirects at the edge.

Verify after deploy:

1. `/` redirects to a locale
2. `/sitemap.xml` returns 24 URLs
3. `/robots.txt` is present
4. `/ar` renders right-to-left
5. The contact form submits successfully
6. /
