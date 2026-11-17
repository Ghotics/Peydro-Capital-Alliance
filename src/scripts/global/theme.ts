/* Light ⇄ Dark mode switch. Light (the gold palette, internally 'gold') is the default; the choice is remembered in this browser.
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

  /* each button carries its own texts (Spanish or English) in data-* attributes, see ThemeToggle.astro */
  toggles.forEach((button) => {
    const d = button.dataset;
    const hint = (dark ? d.hintGold : d.hintDark) ?? (dark ? 'Switch to light mode' : 'Switch to dark mode');
    const label = button.querySelector('.tt-label');
    if (label) label.textContent = (dark ? d.labelDark : d.labelGold) ?? (dark ? 'Dark' : 'Light');
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
