/* Where a visitor came from.
   Every QR code and outside link points to a page with a short code in its address, e.g.
     …/asesoramiento?c=renta92-portal
   This file reads that code (and any utm_… tags) from the address and hands it to the form,
   so the lead is saved with the campaign it came from.

   Nothing is stored in the visitor's browser (no cookies, no storage), so no consent banner is needed
   for this. To keep the code when the visitor moves from /asesoramiento to a department form,
   carryAttribution() adds it to the links on the page instead.

   carryAttribution() also counts the visit as a "scan" for the CRM, but only when the visitor arrives
   from outside (QR camera, Instagram…), not when moving between pages of this site. */
import { recordArrival } from './submit';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
/** Campaign codes: letters, numbers, - and _ only (anything else is ignored). */
const CODE_PATTERN = /^[a-z0-9_-]{1,40}$/i;

export interface Attribution {
  /** The QR / link code from ?c=…, or null when the visitor arrived some other way. */
  campaign: string | null;
  utm: Partial<Record<(typeof UTM_KEYS)[number], string>>;
}

/** Reads the code and utm tags from the current page address. */
export function readAttribution(): Attribution {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('c')?.trim() ?? '';
  const utm: Attribution['utm'] = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key)?.trim();
    if (value) utm[key] = value.slice(0, 100);
  });
  return { campaign: CODE_PATTERN.test(code) ? code.toLowerCase() : null, utm };
}

/** Adds the visitor's code and utm tags to every link to another page of this site,
    so the next page still knows where the visitor came from. Same-page links (#…) are left alone. */
export function carryAttribution(): void {
  const { campaign, utm } = readAttribution();
  if (campaign && cameFromOutside()) recordArrival(campaign);
  const extra = new URLSearchParams();
  if (campaign) extra.set('c', campaign);
  Object.entries(utm).forEach(([key, value]) => {
    if (value) extra.set(key, value);
  });
  if ([...extra.keys()].length === 0) return;

  document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
    if (link.getAttribute('href')?.startsWith('#')) return;
    const target = new URL(link.href, window.location.href);
    if (target.origin !== window.location.origin) return;
    extra.forEach((value, key) => target.searchParams.set(key, value));
    link.href = target.toString();
  });
}

/** True when the visitor didn't come from another page of this site (QR scans have no referrer at all). */
function cameFromOutside(): boolean {
  if (!document.referrer) return true;
  try {
    return new URL(document.referrer).origin !== window.location.origin;
  } catch {
    return true;
  }
}
