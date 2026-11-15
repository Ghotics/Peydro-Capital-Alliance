/* Network page: rotating quotes with dot navigation (pauses while hovered). */

const quotes = Array.from(document.querySelectorAll<HTMLElement>('.quote'));
const dots = document.getElementById('quoteDots');
const stage = document.getElementById('quoteStage');
const INTERVAL_MS = 6000;

if (quotes.length && dots) {
  let current = 0;
  let timer: number | undefined;

  const buttons = quotes.map((_, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', `Show quote ${i + 1}`);
    if (i === 0) button.className = 'on';
    button.addEventListener('click', () => {
      show(i);
      restart();
    });
    dots.appendChild(button);
    return button;
  });

  function show(index: number): void {
    quotes[current].classList.remove('on');
    buttons[current].classList.remove('on');
    current = (index + quotes.length) % quotes.length;
    quotes[current].classList.add('on');
    buttons[current].classList.add('on');
  }

  function restart(): void {
    window.clearInterval(timer);
    timer = window.setInterval(() => show(current + 1), INTERVAL_MS);
  }

  restart();
  stage?.addEventListener('mouseenter', () => window.clearInterval(timer));
  stage?.addEventListener('mouseleave', restart);
}
