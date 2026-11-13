import { onScrollFrame } from '../utils/scroll';

/* Reading-progress line at the top + solid top bar once the page is scrolled. */
export function initScrollChrome(): void {
  const nav = document.getElementById('nav');
  const progress = document.getElementById('progress');

  onScrollFrame((y) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    nav?.classList.toggle('scrolled', y > 40);
  });
}
