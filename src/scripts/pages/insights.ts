/* Insights page: newsletter form (demo — nothing is sent or stored). */

const form = document.getElementById('newsForm');
const box = document.getElementById('newsBox');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (box) {
    box.innerHTML =
      '<h3>Thanks — you’re on the (pretend) list.</h3><p>Demo only: no email was collected or stored.</p>';
  }
});
