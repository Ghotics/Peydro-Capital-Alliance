/* Approach page: the process line fills and each step lights up as you scroll past it. */
import { onScrollFrame } from '../utils/scroll';

const steps = document.getElementById('steps');
const fill = document.getElementById('railFill');
const items = Array.from(document.querySelectorAll<HTMLElement>('#steps .step'));

if (steps && fill) {
  onScrollFrame(() => {
    const box = steps.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.max(0, Math.min(1, (vh * 0.6 - box.top) / box.height));
    fill.style.height = `${progress * 100}%`;
    items.forEach((item) => item.classList.toggle('active', item.getBoundingClientRect().top < vh * 0.62));
  });
}
