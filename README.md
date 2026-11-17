# Peydro Capital Alliance — website

Public website for Peydro Capital Alliance (PCA), built with [Astro](https://astro.build) and SCSS.
Three pages in **Spanish (main) and English** — Inicio, Quiénes somos, Crecimiento compuesto de redes — plus a 404 page, an ES / EN switch, a Gold / Dark palette switch, and a phone menu.
Every "Contactar" / "Get in touch" / "Solicitar reunión" button leads to the Giza form, in the visitor's language — the only form linked from the site.
See [Languages](#languages-es--en).
It also holds the three lead forms (Giza, Business Office, quick form) — see [Lead forms](#lead-forms).

> **Company details pending.** The legal pages show PCA's legal name, NIF, address, registry and regulatory status highlighted until they are filled in (`src/data/legal.ts`).
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
│  ├─ crecimiento-compuesto.astro /crecimiento-compuesto ┘ components/pages/*.astro with lang="es"
│  ├─ en/                  /en, /en/about, /en/compound-growth, /en/giza, /en/privacy, /en/not-found
│  ├─ giza.astro           /giza                      Form 1 ("Contactar" / "Solicitar reunión"); English: /en/giza
│  ├─ privacidad.astro     /privacidad                privacy policy (all forms link here); English: /en/privacy
│  ├─ asesoramiento/       Form 2, QR only (hidden)
│  │  ├─ index.astro       /asesoramiento             landing + department picker
│  │  └─ [area].astro      /asesoramiento/<area>      one page per department
│  ├─ contacto-rapido.astro /contacto-rapido          Form 3, outside links only (hidden)
│  └─ 404.astro            shown for unknown addresses (sends English visitors to /en/not-found)
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
│  ├─ pages/               the layout of each translated page (HomePage, AboutPage, GrowthPage…)
│  ├─ forms/               LeadForm (the form card), FormAside (dark side panel), PrivacyNotice, FormIcon
│  └─ legal/               Fill (highlights details still to fill in)
├─ i18n/                  languages
│  ├─ config.ts            the languages (Spanish is the main one)
│  ├─ routes.ts            the address of each page in each language + which pages are in the menu
│  ├─ ui.ts                shared texts: menu, buttons, footer, palette switch
│  └─ pages/               the texts of each page, Spanish and English side by side
├─ data/
│  ├─ site.ts              firm name, emails, where "Contactar" points
│  ├─ forms.ts             form settings: departments, buildings, booking links
│  └─ legal.ts             company details, providers and retention for the privacy page
├─ scripts/                browser TypeScript
│  ├─ site.ts              runs on every page (palette, menu, scroll effects)
│  ├─ global/              …its parts
│  ├─ pages/               one file per page (headline entrance, the process line…)
│  ├─ components/          shared behaviour (the process line on Quiénes somos and Crecimiento compuesto)
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
| Change a department name, building or booking link | `src/data/forms.ts` |
| Change a text inside the form card (both languages) | `src/i18n/forms.ts` |
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
- **The language never changes by itself:** every link, button and form on an English page leads to English pages (`/en/giza`, `/en/privacy`…), and the same for Spanish.
- **"Page not found":** GitHub Pages shows `/404.html` (Spanish) for every unknown address. A small script there sends English visitors to `/en/not-found`: anyone whose address starts with `/en/`, or who chose English with the switch (remembered in the browser under `pca-lang`, see the privacy policy, section 10).
- **The Giza form** exists in both languages (`/giza`, `/en/giza`) and saves exactly the same fields in both; only the `page` value shows which one was used. Its texts: `src/i18n/pages/giza.ts` (page) and `src/i18n/forms.ts` (form card).
- **The privacy policy** exists in both languages (`/privacidad`, `/en/privacy`); the English one says the Spanish version prevails. Bilingual details (dates, providers, retention) are in `src/data/legal.ts`.
- **Spanish only, on purpose:** the Business Office forms and the quick form (reached through QR codes and outside links, for a Spanish audience).

## Styling conventions

- Every SCSS file that uses breakpoints or mixins starts with `@use '../abstracts' as *;`.
- Breakpoints: `@include down($bp-sm) { … }` → styles for screens narrower than 620px.
- Palette: **Gold is the default**. Colours are CSS custom properties in `_tokens.scss`; the Dark palette overrides them under `[data-theme="dark"]`. For a one-off Dark-only rule use `@include dark { … }` inside a selector.
- Less motion: `@include reduced-motion { … }`. All animations already switch off for visitors who ask their system for less motion.
- Scroll reveal: add `class="reveal"` (and optionally `data-delay="1"`…`"5"`) to fade an element up as it scrolls into view.

## Lead forms

| Form | Address | How people reach it | Steps |
| --- | --- | --- | --- |
| 1 · Giza (Irene) | `/giza`, `/en/giza` | every "Get in touch" / "Solicitar reunión" button, QR codes | contact → optional booking |
| 2 · Business Office | `/asesoramiento` → `/asesoramiento/<area>` | **QR codes only** | one page of contact details, then optional booking |
| 3 · Quick | `/contacto-rapido` | **outside links only** | contact only (template — fields may change) |

- The QR-only pages use `FunnelLayout`: no site menu, a short footer, and `noindex` so search engines leave them out.
  Anyone with the address can still open them — hidden is not the same as private.
- **QR / link tracking:** give every QR code or link its own code, e.g. `/asesoramiento?c=renta92-portal-14`.
  `scripts/forms/attribution.ts` reads the code (and any `utm_…` tags) and the form sends it with the lead.
  Nothing is stored in the browser: the code is added to the page's links, so it survives going from the landing page to a form.
- **Field names** (`first_name`, `email`, `building`…) are the future database column names.
- **Sending:** `scripts/forms/submit.ts` sends the lead to the `website-intake` function in Supabase
  (its code lives in the CRM repo, `supabase/functions/website-intake`). The function checks the data again,
  links the campaign code and building, saves the lead and returns its id. The lead shows up in the CRM straight away.
- **Scans:** when someone arrives from outside with `?c=…`, the page sends only that code to the same function,
  so the CRM can show scans → leads for each campaign. No cookies, no personal data.
- The function only answers this website's address. When the site moves to its own domain, add that domain
  to the `ALLOWED_ORIGINS` secret of the function in Supabase (see the CRM README).
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

**Now:** GitHub Pages (`.github/workflows/deploy.yml`). The workflow takes the address from the Pages settings,
so the site works both at `ghotics.github.io/Peydro-Capital-Alliance` and on a custom domain without code changes.

**Moving to the real domain** (e.g. `www.peydrocapitalalliance.com`):

1. At the domain provider, add a `CNAME` record: `www` → `ghotics.github.io`.
2. GitHub → this repo → Settings → Pages → Custom domain: `www.peydrocapitalalliance.com` → Save, then tick "Enforce HTTPS".
3. Run the deploy again (Actions → "Deploy site to GitHub Pages" → Run workflow). Links and the base path follow automatically.
4. Tell the backend about the new address (CRM repo README, "Keys and settings"): `ALLOWED_ORIGINS` in Supabase and
   `VITE_WEBSITE_URL` in the CRM, then download the campaign QR codes again — **only then print them**.

## Keys and switches that live in this repo

| What | Where | Now |
| --- | --- | --- |
| Cal.com booking pages (one per specialist) | `calLink` in `src/data/forms.ts` (4 departments + Giza) | empty: the button says the calendar isn't connected |
| "You'll receive a confirmation at…" line | `confirmationEmails` in `src/data/forms.ts` | `false`: turn on when confirmation emails are on in Supabase |
| Backend address | `PUBLIC_INTAKE_URL` (build variable, optional) | the PCA Supabase project |

## Before launch

- [x] Move to the real domain (see "Moving to the real domain" above).
- [x] Legal pages: Aviso legal (`/aviso-legal`), Términos de uso (`/terminos`), Información regulatoria (`/informacion-regulatoria`) and Privacidad, in Spanish and English. No separate cookie policy is needed while the site uses no analytics or advertising cookies (explained in Privacidad, section 10).
- [x] Self-host the fonts (Astro Fonts API in `astro.config.mjs`): visitors' browsers no longer contact Google.
- [x] Connect the lead forms to the backend (`src/scripts/forms/submit.ts`) and remove the demo note.
- [x] With the real domain: add it to `ALLOWED_ORIGINS` of the `website-intake` function in Supabase.
- [ ] Fill in the company details and regulatory status in `src/data/legal.ts` (highlighted on the legal pages until done) and have a lawyer review all four legal pages (base texts).
- [ ] Keep the provider list in `src/data/legal.ts` true (email service, WhatsApp, a new host…), and remove the Google Fonts line once fonts are self-hosted.
- [ ] Cal.com links for Irene and the four specialists (`calLink` in `src/data/forms.ts`).
- [ ] Analytics only with cookie consent.

### Anti-spam check (Cloudflare Turnstile)

Every form can ask Cloudflare "is this a person?" before sending. Most visitors see nothing; a suspicious one gets a small box to tick.

1. Cloudflare → Turnstile → Add widget. Hostnames: `www.peydrocapitalalliance.com` and `peydrocapitalalliance.com`. Mode: Managed.
2. Paste the **site key** (public) into `turnstileSiteKey` in `src/data/forms.ts` and deploy. Cloudflare is then also listed on the privacy page automatically.
3. Only after that is live: put the **secret key** in Supabase as `TURNSTILE_SECRET_KEY` (Edge Functions → Secrets). From then on the server rejects sends without a valid check.

Turning it off: remove the secret first, then empty the site key.
