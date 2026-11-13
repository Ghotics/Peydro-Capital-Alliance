/* Home page: headline entrance, counting figures, drifting background, scroll cue. */
import { prefersReducedMotion } from '../utils/motion';
import { onScrollFrame } from '../utils/scroll';

const reduced = prefersReducedMotion();

/* ---------- headline lines slide up once the page has loaded ---------- */
window.addEventListener('load', () => {
  document.querySelectorAll<HTMLElement>('.hero h1 .line > span').forEach((line, i) => {
    line.style.transition = `transform 1s cubic-bezier(.16,1,.3,1) ${0.15 + i * 0.12}s`;
    requestAnimationFrame(() => {
      line.style.transform = 'translateY(0)';
    });
  });
});

/* ---------- background orbs move slightly with the scroll ---------- */
const orbs = Array.from(document.querySelectorAll<HTMLElement>('.orb'));
if (!reduced && orbs.length) {
  onScrollFrame((y) => {
    orbs.forEach((orb) => {
      const depth = parseFloat(orb.dataset.depth ?? '') || 0.1;
      orb.style.transform = `translateY(${y * depth}px)`;
    });
  });
}

/* ---------- key figures count up when they come into view ----------
   The final numbers are already in the HTML (for search engines and no-JS visitors);
   here they're reset to 0 and animated. */
const counters = Array.from(document.querySelectorAll<HTMLElement>('.stat .num[data-target]'));

function render(el: HTMLElement, value: number): void {
  const decimals = parseInt(el.dataset.decimals ?? '0', 10);
  const suffix = el.querySelector('.suffix')?.outerHTML ?? '';
  el.innerHTML = `${el.dataset.prefix ?? ''}${value.toFixed(decimals)}${suffix}`;
}

function countUp(el: HTMLElement): void {
  const target = parseFloat(el.dataset.target ?? '0');
  const start = performance.now();
  const tick = (now: number) => {
    const progress = Math.min((now - start) / 1400, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    render(el, target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

if (!reduced && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const num = entry.target.querySelector<HTMLElement>('.num[data-target]');
        if (num) countUp(num);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
  );
  counters.forEach((num) => {
    render(num, 0);
    const stat = num.closest('.stat');
    if (stat) observer.observe(stat);
  });
}

/* ---------- "Scroll" button at the bottom of the hero ---------- */
document.getElementById('scrollCue')?.addEventListener('click', () => {
  window.scrollTo({ top: window.innerHeight * 0.9, behavior: reduced ? 'auto' : 'smooth' });
});
