/* Giza form page texts (layout: src/components/pages/GizaPage.astro).
   The texts inside the form card itself are in src/i18n/forms.ts. */

const es = {
  title: 'Giza · Planificación financiera',
  badge: 'Giza · Orientación gratuita',
  eyebrow: 'PCA · Giza',
  heading: 'Protección y Planificación Financiera',
  description: 'Seguros, ahorro e inversión e hipotecas. Déjanos tus datos e Irene te ayudará a revisar tus opciones.',
  perks: ['Orientación gratuita y sin compromiso', 'Atención presencial o telemática', 'Puedes enviar una consulta sin reservar cita'],
  intro: 'Déjanos tus datos y, si quieres, una nota sobre tu consulta. Irene se pondrá en contacto contigo.',
};

const en: typeof es = {
  title: 'Giza · Financial planning',
  badge: 'Giza · Free guidance',
  eyebrow: 'PCA · Giza',
  heading: 'Protection and Financial Planning',
  description: 'Insurance, savings and investment, and mortgages. Leave us your details and Irene will help you review your options.',
  perks: ['Free, no-obligation guidance', 'In person or online', 'You can send a question without booking a meeting'],
  intro: 'Leave us your details and, if you like, a note about your enquiry. Irene will get in touch with you.',
};

export const gizaPage = { es, en };
