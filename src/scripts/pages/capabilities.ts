/* Capabilities page: FAQ accordion. */

document.querySelectorAll<HTMLButtonElement>('.acc-q').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.closest('.acc-item');
    const answer = item?.querySelector<HTMLElement>('.acc-a');
    if (!item || !answer) return;

    const open = !item.classList.contains('open');
    item.classList.toggle('open', open);
    question.setAttribute('aria-expanded', String(open));
    answer.style.maxHeight = open ? `${answer.scrollHeight}px` : '0px';
  });
});
