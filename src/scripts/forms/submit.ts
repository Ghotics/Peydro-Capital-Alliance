/* Sends a finished form to the backend.

   DEMO FOR NOW: nothing leaves the browser. The lead is printed in the browser console instead.
   In the Supabase step, only this file changes: submitLead() will call the `submit-lead` Edge Function,
   which checks the data, saves the lead in the database, sends the emails and returns the lead's id. */
import type { FormKind } from '../../data/forms';
import type { Attribution } from './attribution';

/** Everything one form sends. The keys match the future database columns. */
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

/** True while submitLead() is the demo version below. The forms show a small "demo" note. */
export const isDemo = true;

export async function submitLead(payload: LeadPayload): Promise<SubmitResult> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  console.info('[PCA demo] This lead would be sent to the backend:', payload);
  return { leadId: `demo-${Date.now().toString(36)}` };
}
