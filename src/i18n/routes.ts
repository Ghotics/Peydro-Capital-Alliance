/* The address of every translated page in each language.
   The ES / EN switch uses this to jump to the same page in the other language.
   Adding a page: add it here, create src/pages/<es-path>.astro and src/pages/en/<en-path>.astro. */
import type { Lang } from './config';

export const routes = {
  home: { es: '/', en: '/en' },
  about: { es: '/quienes-somos', en: '/en/about' },
  growth: { es: '/crecimiento-compuesto', en: '/en/compound-growth' },
  /* not in the menu */
  giza: { es: '/giza', en: '/en/giza' }, // the contact form: every "Contactar" / "Get in touch" button
  privacy: { es: '/privacidad', en: '/en/privacy' },
  notFound: { es: '/404', en: '/en/not-found' }, // see src/pages/404.astro
} satisfies Record<string, Record<Lang, string>>;

export type PageKey = keyof typeof routes;

/** Pages in the top bar (labels in src/i18n/ui.ts → nav). */
export const mainNav: PageKey[] = ['about', 'growth'];

/** Pages in the phone / tablet menu (Home first). */
export const menuNav: PageKey[] = ['home', ...mainNav];

/** Path of a page in a language, e.g. pathFor('about', 'en') → '/en/about'. Wrap it in url() for links. */
export function pathFor(page: PageKey, lang: Lang): string {
  return routes[page][lang];
}
