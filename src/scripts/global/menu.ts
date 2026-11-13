/* Phone / tablet menu (components/Header.astro). Open state = .menu-open on <body>. */

const OPEN_CLASS = 'menu-open';
/** Above this width the full top bar is shown — keep in sync with $bp-nav in styles/abstracts/_variables.scss */
const DESKTOP_MIN_WIDTH = 1080;

export function initMenu(): void {
  const button = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  const scrim = document.getElementById('scrim');
  if (!button || !menu) return;

  const isOpen = () => document.body.classList.contains(OPEN_CLASS);
  const setOpen = (open: boolean) => {
    document.body.classList.toggle(OPEN_CLASS, open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  const close = () => setOpen(false);

  button.addEventListener('click', () => setOpen(!isOpen()));
  scrim?.addEventListener('click', close);
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      close();
      button.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > DESKTOP_MIN_WIDTH) close();
  });

  /* coming back with the browser's Back button can restore the page with the menu still open */
  window.addEventListener('pageshow', close);
}
