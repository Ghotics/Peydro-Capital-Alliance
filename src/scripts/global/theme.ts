/* Gold ⇄ Dark palette switch. Gold is the default; the choice is remembered in this browser.
   The small inline script in layouts/BaseLayout.astro applies a saved Dark choice before the
   first paint, so keep STORAGE_KEY in sync with it. */

const STORAGE_KEY = 'pca-palette';
type Palette = 'gold' | 'dark';

function readSaved(): Palette {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'gold';
  } catch {
    return 'gold';
  }
}

function save(palette: Palette): void {
  try {
    localStorage.setItem(STORAGE_KEY, palette);
  } catch {
    /* storage blocked (private mode etc.) — the switch still works for this page */
  }
}

function apply(palette: Palette, toggles: HTMLButtonElement[]): void {
  const dark = palette === 'dark';
  if (dark) document.documentElement.setAttribute('data-theme', 'dark');
  else document.documentElement.removeAttribute('data-theme');

  const hint = dark ? 'Switch to gold palette' : 'Switch to dark palette';
  toggles.forEach((button) => {
    const label = button.querySelector('.tt-label');
    if (label) label.textContent = dark ? 'Dark' : 'Gold';
    button.title = hint;
    button.setAttribute('aria-label', hint);
  });
}

export function initTheme(): void {
  /* one switch in the top bar, one in the phone menu */
  const toggles = Array.from(document.querySelectorAll<HTMLButtonElement>('.theme-toggle'));
  apply(readSaved(), toggles);

  toggles.forEach((button) =>
    button.addEventListener('click', () => {
      const next: Palette = document.documentElement.getAttribute('data-theme') === 'dark' ? 'gold' : 'dark';
      apply(next, toggles);
      save(next);
    }),
  );
}
