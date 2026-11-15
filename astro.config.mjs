// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
//
// SITE_URL and BASE_PATH are filled in by the GitHub Pages workflow (.github/workflows/deploy.yml):
//   GitHub Pages → site 'https://ghotics.github.io', base '/Peydro-Capital-Alliance'
//   custom domain → site 'https://www.example.com', base '' (root)
// Locally (npm run dev) the site runs at the root: http://localhost:4321/
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
});
