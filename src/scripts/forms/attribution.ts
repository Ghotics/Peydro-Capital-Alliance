/* Where a visitor came from.
   Every QR code and outside link points to a page with a short code in its address, e.g.
     https://www.peydrocapitalalliance.com/asesoramiento?c=renta92-portal
   This file reads that code (and any utm_… tags), keeps it for the rest of the visit in this browser tab,
   and hands it to the form, so the lead is saved with the campaign it came from. */

const STORAGE_KEY = 'pca-attribution';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
/** Campaign codes: letters, numbers, - and _ only (anything else is ignored). */
const CODE_PATTERN = /^[a-z0-9_-]{1,40}$/i;

export interface Attribution {
  /** The QR / link code from ?c=…, or null when the visitor arrived some other way. */
  campaign: string | null;
  utm: Partial<Record<(typeof UTM_KEYS)[number], string>>;
  /** First page of the visit, e.g. "/asesoramiento". */
  landing: string;
}

function read(): Attribution | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

function save(value: Attribution): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    /* storage blocked: the code is still used on this page */
  }
}

/** Reads the code from the address bar (if any), stores it, and returns what is known for this visit. */
export function captureAttribution(): Attribution {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('c')?.trim() ?? '';
  const utm: Attribution['utm'] = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key)?.trim();
    if (value) utm[key] = value.slice(0, 100);
  });

  const stored = read();
  const arrivedWithCode = CODE_PATTERN.test(code);
  const arrivedWithUtm = Object.keys(utm).length > 0;

  /* a new code or new tags in the address win over what was stored earlier in the visit */
  if (arrivedWithCode || arrivedWithUtm || !stored) {
    const fresh: Attribution = {
      campaign: arrivedWithCode ? code.toLowerCase() : (stored?.campaign ?? null),
      utm: arrivedWithUtm ? utm : (stored?.utm ?? {}),
      landing: stored?.landing ?? window.location.pathname,
    };
    save(fresh);
    return fresh;
  }
  return stored;
}
