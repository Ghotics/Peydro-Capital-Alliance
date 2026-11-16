/* Numbered steps on a vertical line (styles: styles/components/_process-steps.scss).
   The line fills in gold and each step lights up as you scroll past it.
   Used by the Quiénes somos and Crecimiento compuesto pages. */
import { onScrollFrame } from '../utils/scroll';

export function initProcessRail(): void {
  const steps = document.getElementById('steps');
  const fill = document.getElementById('railFill');
  const items = Array.from(document.querySelectorAll<HTMLElement>('#steps .step'));
  if (!steps || !fill) return;

  onScrollFrame(() => {
    const box = steps.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.max(0, Math.min(1, (vh * 0.6 - box.top) / box.height));
    fill.style.height = `${progress * 100}%`;
    items.forEach((item) => item.classList.toggle('active', item.getBoundingClientRect().top < vh * 0.62));
  });
}
