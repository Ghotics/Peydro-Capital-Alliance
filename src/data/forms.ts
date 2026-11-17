/* Everything the lead forms show: department names, buildings and booking links.
   Change a text here and every form and page picks it up.

   The three intake forms:
     Form 1 · Giza            /giza  (+ /en/giza)      on the website: every "Contactar" / "Get in touch" button
     Form 2 · Business Office /asesoramiento (+ areas) only through QR codes, hidden from the menu and Google
     Form 3 · Quick           /contacto-rapido         only through an outside link, hidden too */

/** Which intake form a lead came from. It is saved with every lead. */
export type FormKind = 'giza' | 'business_office' | 'quick';

/** Small line icons drawn by components/forms/FormIcon.astro */
export type IconName = 'shield' | 'laptop' | 'antenna' | 'megaphone' | 'chat' | 'form' | 'calendar' | 'handshake';

/** Renta 92 buildings offered in the Business Office forms. */
export const buildings = ['14', '16', '18'];

/** Cloudflare Turnstile "are you human?" check on every form. Paste the SITE key here (it's public;
    Cloudflare → Turnstile → the widget). Empty = no check. The SECRET key goes only into Supabase
    (TURNSTILE_SECRET_KEY on the website-intake function) — add it AFTER this site key is live. */
export const turnstileSiteKey = '0x4AAAAAAGFtYTS1bmnNUjnr';

/** Turn on (true) once confirmation emails are switched on in Supabase (RESEND_API_KEY on the
    website-intake function, see the CRM README). While false, the forms don't promise an email. */
export const confirmationEmails = true;

/** The privacy page every form links to (src/pages/privacidad.astro). */
export const privacyHref = '/privacidad';

/** Shown in the side panel of the Business Office forms. */
export const officePerks = [
  'Orientación gratuita y sin compromiso',
  'Atención presencial o telemática',
  'Puedes enviar una consulta sin reservar cita',
];

/* ------------------------------------------------------------------ */
/* Form 2 · Business Office                                            */
/* ------------------------------------------------------------------ */

export interface Area {
  /** Address of the form: /asesoramiento/<slug> */
  slug: string;
  /** Official department name. It must read exactly the same on every screen. */
  name: string;
  /** One line under the name on the landing cards. */
  short: string;
  /** Longer text on the department picker and in the side panel of the form. */
  description: string;
  icon: IconName;
  /** The specialist's public Cal.com booking page, e.g. 'team/pca/tecnologia' or a full https:// link
      (in Cal.com: Event types → the event → "Copy link"). Empty = not connected yet (the button then says so). */
  calLink: string;
  /** Not one of the four departments: the "not sure which one" form. */
  general?: boolean;
}

export const areas: Area[] = [
  {
    slug: 'planificacion-financiera',
    name: 'Protección y Planificación Financiera',
    short: 'Seguros, ahorro e inversión, hipotecas.',
    description: 'Seguros, ahorro e inversión, hipotecas y financiación para empresas, autónomos y particulares.',
    icon: 'shield',
    calLink: 'https://cal.com/peydro-capital-alliance/primera-reunion', // Cal.com account: Irene (same as Giza)
  },
  {
    slug: 'tecnologia',
    name: 'Tecnología y Automatización',
    short: 'Procesos, CRM, IA.',
    description: 'Digitalización de procesos, inteligencia artificial, CRM y herramientas para mejorar la eficiencia de tu empresa.',
    icon: 'laptop',
    calLink: 'https://cal.com/tecnologiapca/primera-reunion', // Cal.com account: Tecnología
  },
  {
    slug: 'telecomunicaciones',
    name: 'Telecomunicaciones y Energía',
    short: 'Telefonía, fibra, luz y gas.',
    description: 'Revisión de contratos, tarifas y consumos para detectar posibles mejoras y oportunidades de ahorro.',
    icon: 'antenna',
    calLink: 'https://cal.com/suministrospca/primera-reunion', // Cal.com account: Suministros
  },
  {
    slug: 'marketing',
    name: 'Marketing y Captación Digital',
    short: 'Estrategia, visibilidad, campañas.',
    description: 'Estrategia, publicidad, redes sociales y sistemas de captación para impulsar la visibilidad y el crecimiento.',
    icon: 'megaphone',
    calLink: 'https://cal.com/marketingpca/primera-reunion', // Cal.com account: Marketing
  },
];

/** "¿No tienes claro qué departamento elegir?" — same fields, PCA picks the department afterwards. */
export const generalArea: Area = {
  slug: 'consulta',
  name: 'Consulta general',
  short: 'Te orientamos hacia el área adecuada.',
  description: 'Cuéntanos tu consulta y el equipo de PCA Business Office te orientará hacia el departamento adecuado.',
  icon: 'chat',
  calLink: '',
  general: true,
};

/** Every page under /asesoramiento/ (the four departments + the general one). */
export const allAreas: Area[] = [...areas, generalArea];

/* ------------------------------------------------------------------ */
/* Form 1 · Giza                                                       */
/* ------------------------------------------------------------------ */

/* The Giza page texts (Spanish and English) are in src/i18n/pages/giza.ts */
export const giza = {
  /** Who the visitor books with. */
  specialist: 'Irene',
  /** Irene's public Cal.com booking page. Empty = not connected yet. */
  calLink: 'https://cal.com/peydro-capital-alliance/giza', // Cal.com account: Irene
};

/* ------------------------------------------------------------------ */
/* Form 3 · Quick                                                      */
/* ------------------------------------------------------------------ */

export const quick = {
  eyebrow: 'Peydro Capital Alliance',
  title: 'Hablemos',
  description: 'Déjanos tus datos y un mensaje. Te contactaremos lo antes posible.',
  perks: ['Respuesta rápida', 'Sin compromiso', 'Tus datos solo los ve el equipo de PCA'],
};
