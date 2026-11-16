/* Talks to the backend: the `website-intake` function in Supabase (code in the CRM repo,
   supabase/functions/website-intake). It checks the data, saves the lead and returns its id.
     submitLead()    a finished form        -> POST …/website-intake/lead
     recordArrival() someone came in with a QR / link code -> POST …/website-intake/scan
   The address can be changed with PUBLIC_INTAKE_URL at build time (e.g. a test project). */
import type { FormKind } from '../../data/forms';
import type { Attribution } from './attribution';

const INTAKE_URL = (
  (import.meta.env.PUBLIC_INTAKE_URL as string | undefined) ||
  'https://vocranrdldtamdcoulzi.supabase.co/functions/v1/website-intake'
).replace(/\/+$/, '');

/** Give up after this long, so the visitor sees the error message instead of waiting forever. */
const TIMEOUT_MS = 15_000;

/** Everything one form sends. The keys match the database columns. */
export interface LeadPayload {
  form: FormKind;
  /** Department slug (Business Office), otherwise null. */
  area: string | null;
  /** Always [] now: the interests step was removed (all forms are one page). Kept so the saved data
      keeps the same shape; drop it together with the database column if it's no longer wanted. */
  interests: string[];
  first_name: string;
  last_name: string;
  email: string;
  /** Digits only, with a leading + when given, e.g. "+34600000000". */
  phone: string;
  building: string | null;
  unit: string | null;
  message: string | null;
  privacy_accepted: true;
  /** QR / link code and utm tags, see attribution.ts */
  campaign: Attribution['campaign'];
  utm: Attribution['utm'];
  /** Page the form was sent from. */
  page: string;
}

export interface SubmitResult {
  /** Id of the saved lead. Passed on to Cal.com so a booking can be linked back to the lead. */
  leadId: string;
}

/** Sends the lead. Throws when it couldn't be saved (the form then shows its error message). */
export async function submitLead(payload: LeadPayload): Promise<SubmitResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(`${INTAKE_URL}/lead`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      throw new Error(`Lead not saved (${response.status}) ${detail}`);
    }
    const data = (await response.json()) as Partial<SubmitResult>;
    if (!data.leadId) throw new Error('Lead saved without an id');
    return { leadId: data.leadId };
  } finally {
    clearTimeout(timer);
  }
}

/** Counts one visit that arrived with a campaign code (for the scans count in the CRM).
    Fire and forget: it never blocks the page or shows an error. Sends only the code: no cookies, no personal data.
    Sent as plain text so the browser doesn't need an extra "may I?" request first. */
export function recordArrival(campaign: string): void {
  try {
    fetch(`${INTAKE_URL}/scan`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ campaign }),
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    /* counting is optional: ignore */
  }
}
