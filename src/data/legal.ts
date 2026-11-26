/* Details for the legal pages (privacy, legal notice, terms, disclosures) and the short notice under every form.
   Anything in [square brackets] is a placeholder: the page shows it highlighted until it is filled in.
   Texts that change with the language have an `es` and an `en` version.
   Have a lawyer or data-protection adviser review the final text before the site goes live. */
import type { Lang } from '../i18n/config';
import { telegramAlerts, turnstileSiteKey, whatsappAlerts } from './forms';

/** A text in both languages. */
export type Bilingual = Record<Lang, string>;

/** Who is responsible for the data ("responsable del tratamiento"). Same in both languages. */
export const controller = {
  /** Legal company name (razón social). */
  name: 'Peydró Sabido Capital Alliance S.L.',
  /** Tax number (NIF / CIF). */
  taxId: '[NIF]',
  /** Registered address. */
  address: '[Domicilio social completo]',
  /** Mailbox for privacy requests (access, deletion…). Someone must read it. */
  email: '[privacidad@peydrocapitalalliance.com]',
  /** Commercial registry details (Registro Mercantil: tomo, folio, hoja), shown on the legal notice. */
  registry: '[Datos de inscripción en el Registro Mercantil]',
};

/** PCA's regulatory status, shown on the disclosures page (src/i18n/pages/legal.ts). Confirm with the lawyer. */
export const regulatory: Record<'insurance' | 'investment', Bilingual> = {
  insurance: {
    es: '[Indicar si PCA es mediador de seguros inscrito en la DGSFP (con su número) o con qué mediador inscrito colabora]',
    en: '[State whether PCA is an insurance intermediary registered with the DGSFP (with its number) or which registered intermediary it works with]',
  },
  investment: {
    es: '[Indicar si PCA está autorizada por la CNMV (con su número) o con qué entidad autorizada colabora; si no presta servicios de inversión, decirlo]',
    en: "[State whether PCA is authorised by the CNMV (with its number) or which authorised firm it works with; if it doesn't provide investment services, say so]",
  },
};

/** Last time the legal notice, terms or disclosures changed. Update both languages when they do. */
export const legalUpdated: Bilingual = { es: '17 de noviembre de 2026', en: '17 November 2026' };

/** Last time the privacy text changed. Update it (both languages) whenever the policy changes. */
export const privacyUpdated: Bilingual = { es: '17 de noviembre de 2026', en: '17 November 2026' };

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
    name: 'Supabase, Inc.',
    purpose: {
      es: 'Base de datos donde se guardan las solicitudes de los formularios.',
      en: 'Database where the form requests are stored.',
    },
    location: { es: 'Unión Europea (Estocolmo, Suecia)', en: 'European Union (Stockholm, Sweden)' },
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
    name: 'Resend, Inc.',
    purpose: {
      es: 'Envío de los correos automáticos: la confirmación de tu solicitud y el aviso interno al equipo que la atiende.',
      en: 'Sending the automatic emails: the confirmation of your request and the internal notice to the team handling it.',
    },
    location: {
      es: 'Estados Unidos (empresa); los correos se envían desde servidores en Irlanda (UE)',
      en: 'United States (company); emails are sent from servers in Ireland (EU)',
    },
    safeguard: {
      es: 'Marco de Privacidad de Datos UE-EE. UU. (art. 45 RGPD)',
      en: 'EU-US Data Privacy Framework (art. 45 GDPR)',
    },
  },
  // Listed automatically once WhatsApp alerts are on (whatsappAlerts in src/data/forms.ts).
  ...(whatsappAlerts
    ? [
        {
          name: 'Meta Platforms Ireland Ltd. (WhatsApp Business)',
          purpose: {
            es: 'Aviso interno por WhatsApp al equipo de PCA cuando llega una consulta general o del formulario rápido (nombre, teléfono y formulario).',
            en: 'Internal WhatsApp alert to the PCA team when a general enquiry or quick-form request arrives (name, phone and form).',
          },
          location: {
            es: 'Irlanda (UE), con posibles transferencias a Estados Unidos',
            en: 'Ireland (EU), with possible transfers to the United States',
          },
          safeguard: {
            es: 'Marco de Privacidad de Datos UE-EE. UU. (art. 45 RGPD)',
            en: 'EU-US Data Privacy Framework (art. 45 GDPR)',
          },
        },
      ]
    : []),
  // Listed automatically once Telegram alerts are on (telegramAlerts in src/data/forms.ts).
  // Telegram doesn't sign data-processing agreements like the others: check the safeguard with the adviser.
  ...(telegramAlerts
    ? [
        {
          name: 'Telegram Messenger Inc.',
          purpose: {
            es: 'Aviso interno por Telegram al grupo del equipo de PCA cuando llega una solicitud (nombre, teléfono y área).',
            en: 'Internal Telegram alert to the PCA team group when a request arrives (name, phone and area).',
          },
          location: {
            es: 'Centros de datos en los Países Bajos (UE); empresa con sede fuera de la UE',
            en: 'Data centres in the Netherlands (EU); company based outside the EU',
          },
          safeguard: {
            es: '[Garantía para Telegram: revisar con el asesor de protección de datos]',
            en: '[Safeguard for Telegram: check with the data-protection adviser]',
          },
        },
      ]
    : []),
  // Listed automatically while the "are you human?" check is on (turnstileSiteKey in src/data/forms.ts).
  ...(turnstileSiteKey
    ? [
        {
          name: 'Cloudflare, Inc. (Turnstile)',
          purpose: {
            es: 'Comprobación antispam de los formularios: analiza datos técnicos del navegador, como la dirección IP, para distinguir personas de programas automáticos.',
            en: 'Anti-spam check on the forms: it looks at technical data from the browser, such as the IP address, to tell people from automated programs.',
          },
          location: { es: 'Estados Unidos', en: 'United States' },
          safeguard: {
            es: 'Marco de Privacidad de Datos UE-EE. UU. (art. 45 RGPD)',
            en: 'EU-US Data Privacy Framework (art. 45 GDPR)',
          },
        },
      ]
    : []),
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
