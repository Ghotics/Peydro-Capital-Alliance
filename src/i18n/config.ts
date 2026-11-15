/* Languages of the site. Spanish is the main language (no prefix in the URL);
   English lives under /en/. */

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';
