/* Contact page: four-step enquiry form + confirmation (demo — nothing is sent).
   Steps: 0 Inquiry type → 1 About you → 2 Details → 3 Review → 4 Confirmation */

interface EnquiryData {
  type: string;
  name: string;
  email: string;
  org: string;
  role: string;
  extra: string;
  message: string;
}

const emptyData = (): EnquiryData => ({ type: '', name: '', email: '', org: '', role: '', extra: '', message: '' });

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T | null;

const panels = Array.from(document.querySelectorAll<HTMLElement>('#wizard .wstep'));
const stepper = Array.from(document.querySelectorAll<HTMLElement>('#stepper li'));
const choices = Array.from(document.querySelectorAll<HTMLButtonElement>('#choices .choice'));
const backBtn = $<HTMLButtonElement>('wBack');
const nextBtn = $<HTMLButtonElement>('wNext');
const wizardNav = $('wnav');
const choiceError = $('err-type');

let step = 0;
let data = emptyData();

function escapeHtml(value: string): string {
  return value.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] ?? c);
}

function inputValue(id: string): string {
  return ($<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(id)?.value ?? '').trim();
}

function goStep(n: number): void {
  const direction = n < step ? 'back' : 'forward';
  step = n;
  panels.forEach((panel) => {
    panel.classList.toggle('back', direction === 'back');
    panel.classList.toggle('on', Number(panel.dataset.i) === n);
  });
  stepper.forEach((li) => {
    const i = Number(li.dataset.i);
    li.classList.toggle('current', i === n);
    li.classList.toggle('done', i < n || n === 4);
  });
  if (wizardNav) wizardNav.style.display = n === 4 ? 'none' : 'flex';
  if (backBtn) backBtn.style.visibility = n === 0 || n === 4 ? 'hidden' : 'visible';
  if (nextBtn) nextBtn.innerHTML = n === 3 ? 'Send message <span class="arrow">→</span>' : 'Continue <span class="arrow">→</span>';
}

function reset(): void {
  data = emptyData();
  choices.forEach((c) => c.classList.remove('sel'));
  ['w-name', 'w-email', 'w-org', 'w-role', 'w-msg'].forEach((id) => {
    const el = $<HTMLInputElement | HTMLTextAreaElement>(id);
    if (el) el.value = '';
  });
  document.querySelectorAll('#wizard .field').forEach((f) => f.classList.remove('err'));
  choiceError?.classList.remove('show');
  const conditional = $('conditional');
  if (conditional) conditional.innerHTML = '';
  step = 0;
  goStep(0);
}

/* Step 2 asks different extra questions depending on the choice in step 0 */
function buildConditional(): void {
  const box = $('conditional');
  const sub = $('detailSub');
  if (!box || !sub) return;

  if (data.type === 'Founder / operator') {
    sub.textContent = 'A little context on the business helps us route you.';
    box.innerHTML =
      '<div class="two"><div class="field"><label for="w-extra">Sector</label><select id="w-extra"><option value="">Select…</option><option>Industrial &amp; services</option><option>Software &amp; data</option><option>Healthcare</option><option>Consumer</option><option>Other</option></select></div>' +
      '<div class="field"><label for="w-extra2">Approx. revenue</label><select id="w-extra2"><option value="">Select…</option><option>Under $5M</option><option>$5–25M</option><option>$25–100M</option><option>$100M+</option></select></div></div>';
  } else if (data.type === 'Institutional investor') {
    sub.textContent = 'Tell us a little about your mandate.';
    box.innerHTML =
      '<div class="two"><div class="field"><label for="w-extra">Capital type</label><select id="w-extra"><option value="">Select…</option><option>Fund commitment</option><option>Co-investment</option><option>Separate account</option></select></div>' +
      '<div class="field"><label for="w-extra2">Typical ticket</label><select id="w-extra2"><option value="">Select…</option><option>Under $5M</option><option>$5–25M</option><option>$25M+</option></select></div></div>';
  } else {
    sub.textContent = 'Tell us what you’re hoping to discuss.';
    box.innerHTML = '';
  }
}

function buildReview(): void {
  const list = $('reviewList');
  if (!list) return;
  const rows: [label: string, value: string, editStep: number][] = [
    ['Inquiry', data.type, 0],
    ['Name', data.name, 1],
    ['Email', data.email, 1],
    ['Organization', data.org || '—', 1],
    ['Role', data.role || '—', 1],
    ['Message', data.message, 2],
  ];
  if (data.extra) rows.splice(5, 0, ['Details', data.extra, 2]);

  list.innerHTML = rows
    .map(([label, value, go]) => `<div class="r"><span class="k">${label}</span><span class="v">${escapeHtml(value)} <a href="#" class="edit" data-go="${go}">edit</a></span></div>`)
    .join('');
  list.querySelectorAll<HTMLAnchorElement>('.edit').forEach((link) =>
    link.addEventListener('click', (event) => {
      event.preventDefault();
      goStep(Number(link.dataset.go));
    }),
  );
}

function setError(fieldId: string, hasError: boolean): void {
  $(fieldId)?.classList.toggle('err', hasError);
}

function validate(current: number): boolean {
  if (current === 0) {
    if (!data.type) {
      choiceError?.classList.add('show');
      return false;
    }
    return true;
  }

  if (current === 1) {
    const name = inputValue('w-name');
    const email = inputValue('w-email');
    const nameOk = name.length > 0;
    const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    setError('f-name', !nameOk);
    setError('f-email', !emailOk);
    if (!nameOk || !emailOk) return false;
    data.name = name;
    data.email = email;
    data.org = inputValue('w-org');
    data.role = inputValue('w-role');
    return true;
  }

  if (current === 2) {
    const message = inputValue('w-msg');
    if (message.length < 10) {
      setError('f-msg', true);
      return false;
    }
    setError('f-msg', false);
    data.message = message;
    data.extra = [inputValue('w-extra'), inputValue('w-extra2')].filter(Boolean).join(' · ');
    return true;
  }

  return true;
}

choices.forEach((choice) =>
  choice.addEventListener('click', () => {
    choices.forEach((c) => c.classList.remove('sel'));
    choice.classList.add('sel');
    data.type = choice.dataset.val ?? '';
    choiceError?.classList.remove('show');
  }),
);

nextBtn?.addEventListener('click', () => {
  if (!validate(step)) return;
  if (step === 0) buildConditional();
  if (step === 3) {
    const ref = $('refNum');
    if (ref) ref.textContent = `PCA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    goStep(4);
    return;
  }
  const next = step + 1;
  goStep(next);
  if (next === 3) buildReview();
});

backBtn?.addEventListener('click', () => {
  if (step > 0) goStep(step - 1);
});

$('restartBtn')?.addEventListener('click', reset);

reset();
