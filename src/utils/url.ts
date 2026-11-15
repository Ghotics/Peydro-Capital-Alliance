/* Internal links must include the site's base path, because on GitHub Pages the site lives in a
   sub-folder (ghotics.github.io/Peydro-Capital-Alliance/). With a custom domain the base is "/"
   and these helpers change nothing. The base is set in astro.config.mjs.

   Always write internal links as  href={url('/giza')}  instead of  href="/giza". */

const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** '/giza' → '/Peydro-Capital-Alliance/giza' (or '/giza' with a custom domain). */
export function url(path: string): string {
  if (!path.startsWith('/')) return path;
  return path === '/' ? `${BASE}/` : `${BASE}${path}`;
}

/** The opposite: the current page's path without the base, e.g. for highlighting the menu. */
export function stripBase(pathname: string): string {
  const path = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  return path.replace(/\/+$/, '') || '/';
}
