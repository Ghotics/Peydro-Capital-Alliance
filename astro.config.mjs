// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
//
// SITE_URL and BASE_PATH are filled in by the GitHub Pages workflow (.github/workflows/deploy.yml):
//   GitHub Pages → site 'https://ghotics.github.io', base '/Peydro-Capital-Alliance'
//   custom domain → site 'https://www.example.com', base '' (root)
// Locally (npm run dev) the site runs at the root: http://localhost:4321/
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',

  /* The two typefaces, served from this site (no request to Google from visitors' browsers, GDPR).
     Astro downloads them from Google Fonts when the site is built and publishes them with it.
     Used in src/components/SiteHead.astro (<Font />) and src/styles/base/_tokens.scss (--font-ui, --font-display). */
  fonts: [
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', '-apple-system', 'sans-serif'],
    },
    {
      name: 'Playfair Display',
      cssVariable: '--font-playfair',
      provider: fontProviders.google(),
      weights: [500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'Playfair Display',
      cssVariable: '--font-playfair',
      provider: fontProviders.google(),
      weights: [500],
      styles: ['italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
