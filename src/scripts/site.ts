/* Runs on every page (loaded by layouts/BaseLayout.astro).
   Behaviour for a single page lives in scripts/pages/<page>.ts and is loaded by that page. */
import { initMenu } from './global/menu';
import { initReveal } from './global/reveal';
import { initScrollChrome } from './global/scroll';
import { initTheme } from './global/theme';

initTheme();
initMenu();
initScrollChrome();
initReveal();
