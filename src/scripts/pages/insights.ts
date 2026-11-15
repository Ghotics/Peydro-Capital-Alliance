/* Perspectivas / Insights page: newsletter form (demo — nothing is sent or stored).
   The thank-you texts come from data-thanks-title / data-thanks-text on #newsBox (in the page's language). */

const form = document.getElementById('newsForm');
const box = document.getElementById('newsBox');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!box) return;
  const title = document.createElement('h3');
  title.textContent = box.dataset.thanksTitle ?? 'Thanks!';
  const text = document.createElement('p');
  text.textContent = box.dataset.thanksText ?? '';
  box.replaceChildren(title, text);
});
