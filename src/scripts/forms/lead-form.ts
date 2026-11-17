/* Behaviour of every lead form (components/forms/LeadForm.astro):
   checking the fields, sending, and the screens after sending.
   Loaded by each page that shows a form:  <script>import '../scripts/forms/lead-form';</script> */
import type { FormKind } from '../../data/forms';
import { prefersReducedMotion } from '../utils/motion';
import { carryAttribution, readAttribution } from './attribution';
import { submitLead, type LeadPayload } from './submit';
import { startHumanCheck } from './turnstile';

type StepName = 'contact' | 'done' | 'finished';
type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
/** Matches the data-field="…" boxes in LeadForm.astro */
type FieldName = 'first_name' | 'last_name' | 'email' | 'phone' | 'building' | 'unit' | 'privacy';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?\d{9,15}$/;

/** "+34 600-00 00 00" → "+34600000000": keeps the digits and a leading + ("0034…" becomes "+34…"). */
function normalisePhone(raw: string): string {
  const trimmed = raw.trim();
  const digits = trimmed.replace(/\D/g, '');
  if (trimmed.startsWith('+')) return `+${digits}`;
  return digits.startsWith('00') ? `+${digits.slice(2)}` : digits;
}

/** Cal.com page with the visitor's name and email already filled in, and the lead id attached
    (Cal.com sends that id back to us when the booking is made, so we can link the two). */
function bookingUrl(calLink: string, lead: LeadPayload, leadId: string): string {
  const base = /^https?:\/\//.test(calLink) ? calLink : `https://cal.com/${calLink.replace(/^\/+/, '')}`;
  const url = new URL(base);
  url.searchParams.set('name', `${lead.first_name} ${lead.last_name}`);
  url.searchParams.set('email', lead.email);
  if (lead.message) url.searchParams.set('notes', lead.message);
  url.searchParams.set('metadata[leadId]', leadId);
  return url.toString();
}

function initLeadForm(root: HTMLElement, form: HTMLFormElement): void {
  const kind = root.dataset.kind as FormKind;
  const area = root.dataset.area || null;
  const calLink = root.dataset.cal ?? '';
  const steps = Array.from(root.querySelectorAll<HTMLElement>('[data-step]'));
  const submitButton = form.querySelector<HTMLButtonElement>('[data-submit]');
  const submitLabel = submitButton?.querySelector<HTMLElement>('[data-label]');
  const idleLabel = submitLabel?.textContent ?? '';
  const sendError = form.querySelector<HTMLElement>('[data-send-error]');
  const attribution = readAttribution();
  const humanCheck = startHumanCheck(
    root.querySelector<HTMLElement>('[data-turnstile-box]'),
    root.dataset.turnstile ?? '',
    root.dataset.lang ?? 'es',
  );

  let busy = false;
  let sent: { lead: LeadPayload; leadId: string } | null = null;

  const control = (name: string) => form.querySelector<Control>(`[name="${name}"]`);
  const value = (name: string) => (control(name)?.value ?? '').trim();

  /* one rule per field; a field shows its red message while its rule fails */
  const rules: Record<FieldName, () => boolean> = {
    first_name: () => value('first_name').length > 0,
    last_name: () => value('last_name').length > 0,
    email: () => EMAIL_PATTERN.test(value('email')),
    phone: () => PHONE_PATTERN.test(normalisePhone(value('phone'))),
    building: () => value('building') !== '',
    unit: () => value('unit') !== '',
    privacy: () => (control('privacy') as HTMLInputElement | null)?.checked === true,
  };

  const isFieldName = (name: string | undefined): name is FieldName => name !== undefined && name in rules;
  const setError = (name: FieldName, hasError: boolean) =>
    root.querySelector(`[data-field="${name}"]`)?.classList.toggle('err', hasError);

  /** Checks the given fields (only those on the page), marks the wrong ones and focuses the first. */
  function validate(names: FieldName[]): boolean {
    const present = names.filter((name) => root.querySelector(`[data-field="${name}"]`));
    const failed = present.filter((name) => !rules[name]());
    present.forEach((name) => setError(name, failed.includes(name)));
    const [firstWrong] = failed;
    if (firstWrong) control(firstWrong)?.focus();
    return failed.length === 0;
  }

  function show(name: StepName): void {
    steps.forEach((step) => step.classList.toggle('on', step.dataset.step === name));
    root.querySelector<HTMLElement>(`[data-step="${name}"] .lf-title`)?.focus({ preventScroll: true });
    /* on phones the card can be taller than the screen: bring its top back into view */
    const top = root.getBoundingClientRect().top;
    if (top < 0 || top > window.innerHeight * 0.6) {
      root.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }
  }

  function buildLead(): LeadPayload {
    return {
      form: kind,
      area,
      interests: [], // the interests step was removed: always empty, kept so the saved data keeps its shape
      first_name: value('first_name'),
      last_name: value('last_name'),
      email: value('email').toLowerCase(),
      phone: normalisePhone(value('phone')),
      building: value('building') || null,
      unit: value('unit') || null,
      message: value('message') || null,
      privacy_accepted: true,
      campaign: attribution.campaign,
      utm: attribution.utm,
      page: window.location.pathname,
    };
  }

  function showSent(lead: LeadPayload, leadId: string): void {
    sent = { lead, leadId };
    root.querySelectorAll<HTMLElement>('[data-echo]').forEach((el) => {
      const key = el.dataset.echo as keyof LeadPayload;
      el.textContent = String(lead[key] ?? '');
    });
    show('done');
  }

  /* once a field has been marked wrong, re-check it while the visitor fixes it */
  const recheck = (event: Event) => {
    const box = (event.target as HTMLElement).closest<HTMLElement>('[data-field]');
    const name = box?.dataset.field;
    if (box && isFieldName(name) && box.classList.contains('err') && rules[name]()) setError(name, false);
  };
  form.addEventListener('input', recheck);
  form.addEventListener('change', recheck);

  /* ---------- sending ---------- */
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (busy) return;
    if (!validate(['first_name', 'last_name', 'email', 'phone', 'building', 'unit', 'privacy'])) return;

    const lead = buildLead();

    /* the hidden spam trap was filled in: act as if it worked, send nothing */
    if (value('website')) {
      showSent(lead, 'ignored');
      return;
    }

    busy = true;
    if (submitButton) submitButton.disabled = true;
    /* "Enviando…" / "Sending…", in the page's language (data-sending-label in LeadForm.astro) */
    if (submitLabel) submitLabel.textContent = submitButton?.dataset.sendingLabel ?? 'Enviando…';
    if (sendError) sendError.hidden = true;
    try {
      /* With the human check on, wait for its token first (usually ready long before the click). */
      const token = humanCheck ? await humanCheck.token() : null;
      if (humanCheck && !token) throw new Error('Human check did not finish');
      const { leadId } = await submitLead(lead, token);
      showSent(lead, leadId);
    } catch (error) {
      console.error('Lead could not be sent', error);
      if (sendError) sendError.hidden = false;
    } finally {
      humanCheck?.reset(); // each token works once
      busy = false;
      if (submitButton) submitButton.disabled = false;
      if (submitLabel) submitLabel.textContent = idleLabel;
    }
  });

  /* ---------- after sending: book a meeting or finish ---------- */
  root.querySelector('[data-book]')?.addEventListener('click', () => {
    if (!sent) return;
    if (calLink) {
      window.open(bookingUrl(calLink, sent.lead, sent.leadId), '_blank', 'noopener');
      root.querySelector<HTMLElement>('[data-cal-opened]')?.removeAttribute('hidden');
    } else {
      root.querySelector<HTMLElement>('[data-cal-missing]')?.removeAttribute('hidden');
    }
  });
  root.querySelector('[data-finish]')?.addEventListener('click', () => show('finished'));

}

carryAttribution();
document.querySelectorAll<HTMLElement>('[data-lead-form]').forEach((root) => {
  const form = root.querySelector<HTMLFormElement>('form');
  if (form) initLeadForm(root, form);
});
