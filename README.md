# Peydro Capital Alliance — website

Public website for Peydro Capital Alliance (PCA), built with [Astro](https://astro.build) and SCSS.
Six pages (Home, Approach, Capabilities, Network, Insights, Contact) plus a 404 page, a Gold / Dark palette switch, and a phone menu.
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
│  ├─ index.astro          /
│  ├─ approach.astro       /approach
│  ├─ capabilities.astro   /capabilities
│  ├─ network.astro        /network
│  ├─ insights.astro       /insights
│  ├─ contact.astro        /contact
│  ├─ giza.astro           /giza                      Form 1 (in the menu)
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
│  └─ forms/               LeadForm (the form card), FormAside (dark side panel), FormIcon
├─ data/
│  ├─ site.ts              firm name, emails, menu links
│  └─ forms.ts             form texts: departments, interests, buildings, booking links
├─ scripts/                browser TypeScript
│  ├─ site.ts              runs on every page (palette, menu, scroll effects)
│  ├─ global/              …its parts
│  ├─ pages/               one file per page (counters, accordion, contact form…)
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
| Change page text | `src/pages/<page>.astro` (lists like team, FAQ and articles are arrays at the top of the file) |
| Change the firm name, emails or menu links | `src/data/site.ts` |
| Change colours or fonts | `src/styles/base/_tokens.scss` |
| Change a screen-size breakpoint | `src/styles/abstracts/_variables.scss` |
| Style something on one page only | `src/styles/pages/<page>.scss` |
| Change a form text, department name, interest or building | `src/data/forms.ts` |
| Connect a specialist's calendar | `calLink` in `src/data/forms.ts` |

### Adding a page

1. Create `src/pages/team.astro` (the URL becomes `/team`):

   ```astro
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   import PageHero from '../components/PageHero.astro';
   import '../styles/pages/team.scss';
   ---
   <BaseLayout title="Team" description="…">
     <PageHero eyebrow="Team" lead="…">Our <span class="serif-em">people</span></PageHero>
     <section class="sec"><div class="wrap">…</div></section>
   </BaseLayout>
   ```

2. Create `src/styles/pages/team.scss` starting with `@use '../abstracts' as *;`.
3. Add it to `mainNav` in `src/data/site.ts` if it should appear in the menu.

## Styling conventions

- Every SCSS file that uses breakpoints or mixins starts with `@use '../abstracts' as *;`.
- Breakpoints: `@include down($bp-sm) { … }` → styles for screens narrower than 620px.
- Palette: **Gold is the default**. Colours are CSS custom properties in `_tokens.scss`; the Dark palette overrides them under `[data-theme="dark"]`. For a one-off Dark-only rule use `@include dark { … }` inside a selector.
- Less motion: `@include reduced-motion { … }`. All animations already switch off for visitors who ask their system for less motion.
- Scroll reveal: add `class="reveal"` (and optionally `data-delay="1"`…`"5"`) to fade an element up as it scrolls into view.

## Lead forms

| Form | Address | How people reach it | Steps |
| --- | --- | --- | --- |
| 1 · Giza (Irene) | `/giza` | site menu, QR codes | interests → contact → optional booking |
| 2 · Business Office | `/asesoramiento` → `/asesoramiento/<area>` | **QR codes only** | financial: interests → contact; others: contact only; then optional booking |
| 3 · Quick | `/contacto-rapido` | **outside links only** | contact only (template — fields may change) |

- The QR-only pages use `FunnelLayout`: no site menu, a short footer, and `noindex` so search engines leave them out.
  Anyone with the address can still open them — hidden is not the same as private.
- **QR / link tracking:** give every QR code or link its own code, e.g. `/asesoramiento?c=renta92-portal-14`.
  `scripts/forms/attribution.ts` keeps the code (and any `utm_…` tags) for the visit and the form sends it with the lead.
- **Field names** (`first_name`, `email`, `building`…) are the future database column names.
- **Sending is a demo for now.** `scripts/forms/submit.ts` prints the lead in the browser console instead of sending it.
  When the backend is ready, only that file changes. The forms show a small "Modo demo" note until then.
- **Booking:** after sending, Giza and Business Office offer "Reservar asesoramiento". It opens the specialist's Cal.com page
  with the name and email filled in. Until `calLink` is set in `data/forms.ts`, the button explains the calendar isn't connected yet.
- A hidden "website" field catches spam bots: if it is filled in, the form pretends to succeed and sends nothing.

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
- [ ] Make the contact form actually send (a form service or a server endpoint that passes leads to the CRM).
- [ ] Connect the lead forms to the backend (`src/scripts/forms/submit.ts`) and remove the demo note.
- [ ] Real privacy page for the forms' "Política de privacidad" link (`privacyHref` in `src/data/forms.ts`).
- [ ] Cal.com links for Irene and the four specialists (`calLink` in `src/data/forms.ts`).
- [ ] Analytics only with cookie consent.
