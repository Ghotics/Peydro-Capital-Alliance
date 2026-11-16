/* Remembers the language chosen with the ES / EN switch (components/LangSwitch.astro).
   Every link already keeps the language; this is only used by the "page not found" page,
   to show the English version to someone who chose English (components/pages/NotFoundPage.astro).
   Mentioned in the privacy policy, section 10. */

const STORAGE_KEY = 'pca-lang';

export function initLanguageMemory(): void {
  document.querySelectorAll<HTMLAnchorElement>('.lang-switch a[hreflang]').forEach((link) =>
    link.addEventListener('click', () => {
      try {
        localStorage.setItem(STORAGE_KEY, link.hreflang);
      } catch {
        /* storage blocked: nothing to remember */
      }
    }),
  );
}
