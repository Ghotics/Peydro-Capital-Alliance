/* "Are you human?" check on the forms: Cloudflare Turnstile (free, usually invisible).
   Only active when `turnstileSiteKey` in src/data/forms.ts is filled in. It gives each form a one-time
   token that is sent with the lead; the server (website-intake) asks Cloudflare whether it's genuine.
   Most visitors see nothing; a suspicious one gets a small box to click. */

interface Turnstile {
  render(element: HTMLElement, options: Record<string, unknown>): string;
  reset(widgetId: string): void;
}

declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

const SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
/** How long a send waits for the check to finish before giving up (the form then shows its error). */
const WAIT_MS = 15_000;

let loading: Promise<Turnstile> | null = null;

/** Loads Cloudflare's script once per page. */
function loadTurnstile(): Promise<Turnstile> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  loading ??= new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;
    script.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error('Turnstile missing')));
    script.onerror = () => reject(new Error('Turnstile could not load'));
    document.head.appendChild(script);
  });
  return loading;
}

export interface HumanCheck {
  /** The current token, waiting for it if the check is still running. Null if it never arrived. */
  token(): Promise<string | null>;
  /** Tokens work once: get a fresh one after each send. */
  reset(): void;
}

/** Starts the check inside `box`. Returns null when the check is switched off (no site key). */
export function startHumanCheck(box: HTMLElement | null, siteKey: string, lang: string): HumanCheck | null {
  if (!box || !siteKey) return null;
  let current: string | null = null;
  let widgetId: string | null = null;
  let waiting: ((token: string | null) => void)[] = [];

  const receive = (token: string | null) => {
    current = token;
    if (token) {
      waiting.forEach((resolve) => resolve(token));
      waiting = [];
    }
  };

  loadTurnstile()
    .then((turnstile) => {
      widgetId = turnstile.render(box, {
        sitekey: siteKey,
        appearance: 'interaction-only',
        language: lang,
        callback: (token: string) => receive(token),
        'expired-callback': () => receive(null),
        'error-callback': () => receive(null),
      });
    })
    .catch((error) => console.error(error));

  return {
    token: () =>
      current
        ? Promise.resolve(current)
        : new Promise((resolve) => {
            waiting.push(resolve);
            setTimeout(() => resolve(current), WAIT_MS);
          }),
    reset: () => {
      current = null;
      if (widgetId && window.turnstile) window.turnstile.reset(widgetId);
    },
  };
}
