/* Details for the privacy page (components/pages/PrivacyPage.astro) and the short notice under every form.
   Anything in [square brackets] is a placeholder: the page shows it highlighted until it is filled in.
   Texts that change with the language have an `es` and an `en` version.
   Have a lawyer or data-protection adviser review the final text before the site goes live. */
import type { Lang } from '../i18n/config';

/** A text in both languages. */
export type Bilingual = Record<Lang, string>;

/** Who is responsible for the data ("responsable del tratamiento"). Same in both languages. */
export const controller = {
  /** Legal company name, e.g. "Peydró Capital Alliance, S.L." */
  name: '[Razón social de PCA]',
  /** Tax number (NIF / CIF). */
  taxId: '[NIF]',
  /** Registered address. */
  address: '[Domicilio social completo]',
  /** Mailbox for privacy requests (access, deletion…). Someone must read it. */
  email: '[privacidad@peydrocapitalalliance.com]',
};

/** Last time the privacy text changed. Update it (both languages) whenever the policy changes. */
export const privacyUpdated: Bilingual = { es: '16 de noviembre de 2026', en: '16 November 2026' };

/** How long leads that never become clients are kept after the last contact. */
export const leadRetention: Bilingual = { es: '12 meses', en: '12 months' };

/** Companies that handle personal data on PCA's behalf ("encargados del tratamiento").
    Keep this list true: add a provider before it starts receiving data, remove it when it stops. */
export interface Processor {
  name: string;
  /** What it does, in plain words. */
  purpose: Bilingual;
  /** Where the data is stored or processed. */
  location: Bilingual;
  /** For places outside the EU: the legal safeguard for the transfer. */
  safeguard?: Bilingual;
}

export const processors: Processor[] = [
  {
    name: 'GitHub, Inc.',
    purpose: {
      es: 'Alojamiento de esta web. Registra datos técnicos de la visita, como la dirección IP.',
      en: 'Hosting of this website. It records technical data about the visit, such as the IP address.',
    },
    location: { es: 'Estados Unidos', en: 'United States' },
    safeguard: {
      es: 'Marco de Privacidad de Datos UE-EE. UU. (art. 45 RGPD) y cláusulas contractuales tipo',
      en: 'EU-US Data Privacy Framework (art. 45 GDPR) and standard contractual clauses',
    },
  },
  {
    // Remove this entry once the fonts are served from our own site (see README, "Before launch").
    name: 'Google LLC (Google Fonts)',
    purpose: {
      es: 'Tipografías de la web. Al cargarlas, tu navegador envía tu dirección IP a Google.',
      en: "The website's fonts. When loading them, your browser sends your IP address to Google.",
    },
    location: { es: 'Estados Unidos', en: 'United States' },
    safeguard: { es: 'Marco de Privacidad de Datos UE-EE. UU. (art. 45 RGPD)', en: 'EU-US Data Privacy Framework (art. 45 GDPR)' },
  },
  {
    name: 'Supabase, Inc.',
    purpose: {
      es: 'Base de datos donde se guardan las solicitudes de los formularios.',
      en: 'Database where the form requests are stored.',
    },
    location: { es: 'Unión Europea (Fráncfort, Alemania)', en: 'European Union (Frankfurt, Germany)' },
    safeguard: {
      es: 'Cláusulas contractuales tipo de la Comisión Europea para los accesos de soporte desde fuera de la UE',
      en: "European Commission standard contractual clauses for support access from outside the EU",
    },
  },
  {
    name: 'Cal.com, Inc.',
    purpose: { es: 'Reserva de citas, solo si decides reservar una.', en: 'Booking appointments, only if you choose to book one.' },
    location: { es: 'Estados Unidos', en: 'United States' },
    safeguard: { es: 'Marco de Privacidad de Datos UE-EE. UU. (art. 45 RGPD)', en: 'EU-US Data Privacy Framework (art. 45 GDPR)' },
  },
  {
    // Fill in when the email service is chosen (e.g. Resend), before the forms send real emails.
    name: '[Servicio de envío de correos]',
    purpose: { es: 'Envío de los correos de confirmación de tu solicitud.', en: 'Sending the confirmation emails for your request.' },
    location: { es: '[País]', en: '[Country]' },
    safeguard: { es: '[Garantía para la transferencia, si es fuera de la UE]', en: '[Safeguard for the transfer, if outside the EU]' },
  },
  // WhatsApp (Meta) for the quick form: add here before it is switched on.
];

/** Spain's data-protection authority, where anyone can file a complaint. */
export const authority = {
  name: {
    es: 'Agencia Española de Protección de Datos (AEPD)',
    en: 'Spanish Data Protection Agency (Agencia Española de Protección de Datos, AEPD)',
  } as Bilingual,
  address: 'C/ Jorge Juan, 6, 28001 Madrid',
  url: 'https://www.aepd.es',
};

/** True for values that still need to be filled in. */
export const isPlaceholder = (value: string) => value.startsWith('[');
