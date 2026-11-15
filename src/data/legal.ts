/* Details for the privacy page (src/pages/privacidad.astro) and the short notice under every form.
   Anything in [square brackets] is a placeholder: the page shows it highlighted until it is filled in.
   Have a lawyer or data-protection adviser review the final text before the site goes live. */

/** Who is responsible for the data ("responsable del tratamiento"). */
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

/** Last time the privacy text changed. Update it whenever the policy changes. */
export const privacyUpdated = '15 de noviembre de 2026';

/** How long leads that never become clients are kept after the last contact. */
export const leadRetention = '12 meses';

/** Companies that handle personal data on PCA's behalf ("encargados del tratamiento").
    Keep this list true: add a provider before it starts receiving data, remove it when it stops. */
export interface Processor {
  name: string;
  /** What it does, in plain words. */
  purpose: string;
  /** Where the data is stored or processed. */
  location: string;
  /** For places outside the EU: the legal safeguard for the transfer. */
  safeguard?: string;
}

export const processors: Processor[] = [
  {
    name: 'GitHub, Inc.',
    purpose: 'Alojamiento de esta web. Registra datos técnicos de la visita, como la dirección IP.',
    location: 'Estados Unidos',
    safeguard: 'Marco de Privacidad de Datos UE-EE. UU. (art. 45 RGPD) y cláusulas contractuales tipo',
  },
  {
    // Remove this entry once the fonts are served from our own site (see README, "Before launch").
    name: 'Google LLC (Google Fonts)',
    purpose: 'Tipografías de la web. Al cargarlas, tu navegador envía tu dirección IP a Google.',
    location: 'Estados Unidos',
    safeguard: 'Marco de Privacidad de Datos UE-EE. UU. (art. 45 RGPD)',
  },
  {
    name: 'Supabase, Inc.',
    purpose: 'Base de datos donde se guardan las solicitudes de los formularios.',
    location: 'Unión Europea (Fráncfort, Alemania)',
    safeguard: 'Cláusulas contractuales tipo de la Comisión Europea para los accesos de soporte desde fuera de la UE',
  },
  {
    name: 'Cal.com, Inc.',
    purpose: 'Reserva de citas, solo si decides reservar una.',
    location: 'Estados Unidos',
    safeguard: 'Marco de Privacidad de Datos UE-EE. UU. (art. 45 RGPD)',
  },
  {
    // Fill in when the email service is chosen (e.g. Resend), before the forms send real emails.
    name: '[Servicio de envío de correos]',
    purpose: 'Envío de los correos de confirmación de tu solicitud.',
    location: '[País]',
    safeguard: '[Garantía para la transferencia, si es fuera de la UE]',
  },
  // WhatsApp (Meta) for the quick form: add here before it is switched on.
];

/** Spain's data-protection authority, where anyone can file a complaint. */
export const authority = {
  name: 'Agencia Española de Protección de Datos (AEPD)',
  address: 'C/ Jorge Juan, 6, 28001 Madrid',
  url: 'https://www.aepd.es',
};

/** True for values that still need to be filled in. */
export const isPlaceholder = (value: string) => value.startsWith('[');
