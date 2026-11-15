# Peydro Capital Alliance — website

Public website for Peydro Capital Alliance (PCA), built with [Astro](https://astro.build) and SCSS.
Five pages in **Spanish (main) and English** — Inicio, Quiénes somos, Enfoque, Crecimiento compuesto de redes, Perspectivas — plus a 404 page, an ES / EN switch, a Gold / Dark palette switch, and a phone menu.
Every "Contactar" / "Get in touch" / "Solicitar reunión" button leads to the Giza form — the only form linked from the site (Spanish only for now).
See [Languages](#languages-es--en).
It also holds the three lead forms (Giza, Business Office, quick form) — see [Lead forms](#lead-forms).

> **Placeholder content.** Figures, people, quotes, offices and history are demo content until PCA provides the real details.
> The CRM is a separate application and is **not** part of this repository.

## Getting started

Requires **Node.js 22.12 or newer** (Astro 6).

```bash
npm install        # first time only — commit the generated package-lock.json
npm run dev        # local site at http://localhost:4321 (reloads as you edit)
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run check      # type-check .astro and .ts files
```

## Project structure

```
public/                    files served as-is (favicon…)
src/
├─ pages/                  one file = one page; the file name is the URL
│  ├─ index.astro          /                          ┐
│  ├─ quienes-somos.astro  /quienes-somos             │ Spanish: tiny files that render
│  ├─ enfoque.astro        /enfoque                   │ components/pages/*.astro with lang="es"
│  ├─ crecimiento-compuesto.astro /crecimiento-compuesto
│  ├─ perspectivas.astro   /perspectivas              ┘
│  ├─ en/                  /en, /en/about, /en/approach, /en/compound-growth, /en/insights (lang="en")
│  ├─ giza.astro           /giza                      Form 1 ("Get in touch" / "Solicitar reunión")
│  ├─ privacidad.astro     /privacidad                privacy policy (all forms link here)
│  ├─ asesoramiento/       Form 2, QR only (hidden)
│  │  ├─ index.astro       /asesoramiento             landing + department picker
│  │  └─ [area].astro      /asesoramiento/<area>      one page per department
│  ├─ contacto-rapido.astro /contacto-rapido          Form 3, outside links only (hidden)
│  └─ 404.astro            shown for unknown addresses
├─ layouts/
│  ├─ BaseLayout.astro     <head>, top bar, menu, footer — shared by the site pages
│  └─ FunnelLayout.astro   lighter frame for the QR-only pages (no menu, not in Google)
├─ components/             pieces used on several pages
│  ├─ Header.astro         top bar + phone/tablet menu
│  ├─ Footer.astro
│  ├─ PageHero.astro       the "first view" at the top of inner pages
│  ├─ SiteHead.astro       everything inside <head>
│  ├─ Brand.astro          logo + name
│  ├─ ThemeToggle.astro    Gold ⇄ Dark switch
│  ├─ LangSwitch.astro     ES / EN switch
│  ├─ pages/               the layout of each translated page (HomePage, AboutPage, ApproachPage, GrowthPage, InsightsPage)
│  ├─ forms/               LeadForm (the form card), FormAside (dark side panel), PrivacyNotice, FormIcon
│  └─ legal/               Fill (highlights details still to fill in)
├─ i18n/                  languages
│  ├─ config.ts            the languages (Spanish is the main one)
│  ├─ routes.ts            the address of each page in each language + which pages are in the menu
│  ├─ ui.ts                shared texts: menu, buttons, footer, palette switch
│  └─ pages/               the texts of each page, Spanish and English side by side
├─ data/
│  ├─ site.ts              firm name, emails, where "Contactar" points
│  ├─ forms.ts             form texts: departments, interests, buildings, booking links
│  └─ legal.ts             company details, providers and retention for the privacy page
├─ scripts/                browser TypeScript
│  ├─ site.ts              runs on every page (palette, menu, scroll effects)
│  ├─ global/              …its parts
│  ├─ pages/               one file per page (counters, newsletter…)
│  ├─ components/          shared behaviour (the process line on Approach and Crecimiento compuesto)
│  ├─ forms/               lead forms: steps + checks, QR code tracking, sending
│  └─ utils/
└─ styles/                 SCSS
   ├─ main.scss            global styles, loaded by BaseLayout
   ├─ abstracts/           breakpoints + mixins (no CSS output)
   ├─ base/                colour tokens, reset, typography, layout, motion
   ├─ components/          one partial per shared component
   └─ pages/               one file per page, imported by that page
```

## Common changes

| I want to… | Edit |
| --- | --- |
| Change page text (either language) | `src/i18n/pages/<page>.ts` — the Spanish text first, the English below it |
| Change menu, button or footer text | `src/i18n/ui.ts` |
| Change the firm name or emails | `src/data/site.ts` |
| Change which pages are in the menu, or a page's address | `src/i18n/routes.ts` |
| Change colours or fonts | `src/styles/base/_tokens.scss` |
| Change a screen-size breakpoint | `src/styles/abstracts/_variables.scss` |
| Style something on one page only | `src/styles/pages/<page>.scss` |
| Change a form text, department name, interest or building | `src/data/forms.ts` |
| Connect a specialist's calendar | `calLink` in `src/data/forms.ts` |
| Company details or a new provider on the privacy page | `src/data/legal.ts` |

### Adding a page (in both languages)

1. Add its addresses to `src/i18n/routes.ts`, e.g. `team: { es: '/equipo', en: '/en/team' }`, its menu label to `nav` in `src/i18n/ui.ts` (both languages), and the key to `mainNav` if it should be in the menu.
2. Write its texts in `src/i18n/pages/team.ts` — a Spanish object, then `const en: typeof es = { … }` (the type check makes sure nothing is missing in English).
3. Write its layout once in `src/components/pages/TeamPage.astro`:

   ```astro
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';
   import PageHero from '../PageHero.astro';
   import type { Lang } from '../../i18n/config';
   import { team } from '../../i18n/pages/team';
   import '../../styles/pages/team.scss';
   const { lang } = Astro.props as { lang: Lang };
   const t = team[lang];
   ---
   <BaseLayout lang={lang} page="team" title={t.title} description={t.description}>
     <PageHero eyebrow={t.eyebrow} lead={t.lead}><Fragment set:html={t.heading} /></PageHero>
     <section class="sec"><div class="wrap">…</div></section>
   </BaseLayout>
   ```

4. Create the two tiny page files: `src/pages/equipo.astro` with `<TeamPage lang="es" />` and `src/pages/en/team.astro` with `<TeamPage lang="en" />`.
5. Create `src/styles/pages/team.scss` starting with `@use '../abstracts' as *;`.

## Languages (ES / EN)

- **Spanish is the main language**: its pages have no prefix (`/quienes-somos`). English pages live under `/en/` (`/en/about`).
- The **ES / EN switch** (top bar from 760px up, and in the phone menu) opens the same page in the other language, using `src/i18n/routes.ts`. On pages that only exist in Spanish (Giza, privacy, Business Office) it leads to the English home page.
- Each page tells search engines about its other-language version (`hreflang` links in `<head>`), once the site address is known (on GitHub Pages).
- **Not translated yet:** the forms (Giza, Business Office, quick form) and the privacy page are Spanish only. English buttons still lead to the Spanish Giza form.

## Styling conventions

- Every SCSS file that uses breakpoints or mixins starts with `@use '../abstracts' as *;`.
- Breakpoints: `@include down($bp-sm) { … }` → styles for screens narrower than 620px.
- Palette: **Gold is the default**. Colours are CSS custom properties in `_tokens.scss`; the Dark palette overrides them under `[data-theme="dark"]`. For a one-off Dark-only rule use `@include dark { … }` inside a selector.
- Less motion: `@include reduced-motion { … }`. All animations already switch off for visitors who ask their system for less motion.
- Scroll reveal: add `class="reveal"` (and optionally `data-delay="1"`…`"5"`) to fade an element up as it scrolls into view.

## Lead forms

| Form | Address | How people reach it | Steps |
| --- | --- | --- | --- |
| 1 · Giza (Irene) | `/giza` | every "Get in touch" / "Solicitar reunión" button, QR codes | contact → optional booking |
| 2 · Business Office | `/asesoramiento` → `/asesoramiento/<area>` | **QR codes only** | financial: interests → contact; others: contact only; then optional booking |
| 3 · Quick | `/contacto-rapido` | **outside links only** | contact only (template — fields may change) |

- The QR-only pages use `FunnelLayout`: no site menu, a short footer, and `noindex` so search engines leave them out.
  Anyone with the address can still open them — hidden is not the same as private.
- **QR / link tracking:** give every QR code or link its own code, e.g. `/asesoramiento?c=renta92-portal-14`.
  `scripts/forms/attribution.ts` reads the code (and any `utm_…` tags) and the form sends it with the lead.
  Nothing is stored in the browser: the code is added to the page's links, so it survives going from the landing page to a form.
- **Field names** (`first_name`, `email`, `building`…) are the future database column names.
- **Sending is a demo for now.** `scripts/forms/submit.ts` prints the lead in the browser console instead of sending it.
  When the backend is ready, only that file changes. The forms show a small "Modo demo" note until then.
- **Booking:** after sending, Giza and Business Office offer "Reservar asesoramiento". It opens the specialist's Cal.com page
  with the name and email filled in. Until `calLink` is set in `data/forms.ts`, the button explains the calendar isn't connected yet.
- A hidden "website" field catches spam bots: if it is filled in, the form pretends to succeed and sends nothing.
- **Privacy:** every form has the privacy tick box, a short data-protection notice (`PrivacyNotice`) and a link to `/privacidad`
  that opens in a new tab, so the visitor doesn't lose what they typed. The message box is always optional.

## Palette switch

The choice is saved in the browser under the `pca-palette` key. A tiny inline script in `BaseLayout.astro` applies a saved Dark choice before the page paints, so there's no flash of Gold. The switch logic is `src/scripts/global/theme.ts`.

## Deploying

The site builds to plain static files in `dist/`, so any static host works (Netlify, Cloudflare Pages, Vercel…):

- build command: `npm run build`
- output directory: `dist`
- Node version: 22

## Before launch

- [ ] Replace the placeholder content (figures, team, quotes, offices, history, articles).
- [ ] Set `site` in `astro.config.mjs` to the real domain.
- [ ] Legal pages (Spain/EU): Aviso legal, Política de privacidad, Política de cookies — the footer links are placeholders.
- [ ] Self-host the fonts instead of loading them from Google (GDPR), e.g. with Astro's built-in Fonts API.
- [ ] Connect the lead forms to the backend (`src/scripts/forms/submit.ts`) and remove the demo note.
- [ ] Fill in the company details in `src/data/legal.ts` (highlighted in red on the privacy page until done) and have a lawyer review `/privacidad`.
- [ ] Keep the provider list in `src/data/legal.ts` true (email service, WhatsApp, a new host…), and remove the Google Fonts line once fonts are self-hosted.
- [ ] Cal.com links for Irene and the four specialists (`calLink` in `src/data/forms.ts`).
- [ ] Analytics only with cookie consent.
