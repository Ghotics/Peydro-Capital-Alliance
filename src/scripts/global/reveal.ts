import { prefersReducedMotion } from '../utils/motion';

/* Fade-up on scroll: adds .in to every .reveal element when it enters the screen
   (styles in styles/base/_motion.scss). */
export function initReveal(): void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

  if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
    elements.forEach((el) => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
  );

  elements.forEach((el) => observer.observe(el));
}
