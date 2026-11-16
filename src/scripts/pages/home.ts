/* Home page: headline entrance, drifting background, scroll cue, the "El ciclo compuesto" line. */
import { initProcessRail } from '../components/process-rail';
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

/* ---------- "Scroll" button at the bottom of the hero ---------- */
document.getElementById('scrollCue')?.addEventListener('click', () => {
  window.scrollTo({ top: window.innerHeight * 0.9, behavior: reduced ? 'auto' : 'smooth' });
});

/* ---------- "El ciclo compuesto": the line fills and each step lights up as you scroll ---------- */
initProcessRail();
