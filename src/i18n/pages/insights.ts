/* Perspectivas / Insights page texts (layout: src/components/pages/InsightsPage.astro).
   Placeholder articles — later these can come from Markdown files or a CMS.
   Texts with <span> tags are inserted as HTML. The English object must have the same keys. */

const es = {
  title: 'Perspectivas',
  description: 'Textos ocasionales de Peydro Capital Alliance sobre propiedad, gestión y la disciplina de la paciencia.',
  hero: {
    eyebrow: 'Perspectivas',
    title: 'Notas desde una <span class="serif-em">mirada larga</span>',
    lead: 'Textos ocasionales sobre propiedad, gestión y la disciplina de la paciencia.',
    meta: [
      { value: 'Semanal', label: 'Frecuencia' },
      { value: '4 min', label: 'Lectura media' },
    ],
  },
  featured: {
    meta: 'Destacado · Propiedad · 8 min',
    title: 'El coste de un reloj corto',
    text: 'Por qué el pensamiento trimestral erosiona en silencio las empresas que pretende proteger, y qué cambia un horizonte más largo en cada decisión.',
    link: 'Leer el ensayo',
  },
  posts: [
    { meta: 'Gestión · 4 min', title: 'Tres números que importan', text: 'La mayoría de los cuadros de mando son ruido. Un argumento para medir casi nada.' },
    { meta: 'Personas · 5 min', title: 'Contratar para la segunda década', text: 'Qué cambia cuando piensas mantener una empresa diez años, no dos.' },
    { meta: 'Mercados · 6 min', title: 'La paciencia como ventaja', text: 'Cuando todos los demás se ven obligados a vender, el tiempo se convierte en el activo más escaso.' },
    { meta: 'Análisis · 5 min', title: 'La primera pregunta que hacemos', text: 'La solidez gana al crecimiento en casi todas las operaciones de las que nos alegramos.' },
    { meta: 'Crédito · 4 min', title: 'Cuando la deuda es la herramienta más amable', text: 'No todo buen negocio necesita vender capital para llegar a donde quiere ir.' },
    { meta: 'Cultura · 3 min', title: 'Aburridos a propósito', text: 'Un trimestre tranquilo suele ser la señal de una empresa que hace algo bien.' },
  ],
  readMore: 'Leer →',
  news: {
    title: 'La mirada larga, de vez en cuando',
    text: 'Una nota breve cuando publiquemos algo que merezca tu tiempo. Sin ruido. (Demo: no se guarda nada).',
    placeholder: 'tu@email.com',
    emailLabel: 'Correo electrónico',
    button: 'Suscribirme',
    thanksTitle: 'Gracias, ya estás en la lista (de prueba).',
    thanksText: 'Solo es una demo: no se ha recogido ni guardado ningún correo.',
  },
};

const en: typeof es = {
  title: 'Insights',
  description: 'Occasional writing from Peydro Capital Alliance on ownership, operating and the discipline of patience.',
  hero: {
    eyebrow: 'Insights',
    title: 'Notes from the <span class="serif-em">long view</span>',
    lead: 'Occasional writing on ownership, operating and the discipline of patience.',
    meta: [
      { value: 'Weekly', label: 'Cadence' },
      { value: '4 min', label: 'Avg. read' },
    ],
  },
  featured: {
    meta: 'Featured · Ownership · 8 min',
    title: 'The cost of a short clock',
    text: "Why quarterly thinking quietly erodes the businesses it's meant to protect — and what a longer horizon changes about every decision underneath.",
    link: 'Read the essay',
  },
  posts: [
    { meta: 'Operating · 4 min', title: 'Three numbers that matter', text: 'Most dashboards are noise. A simple case for tracking almost nothing.' },
    { meta: 'People · 5 min', title: 'Hiring for the second decade', text: 'What changes when you plan to own something for ten years, not two.' },
    { meta: 'Markets · 6 min', title: 'Patience as an edge', text: 'When everyone else is forced to sell, time becomes the scarcest asset.' },
    { meta: 'Diligence · 5 min', title: 'The question we ask first', text: "Durability beats growth in almost every deal we've been glad we did." },
    { meta: 'Credit · 4 min', title: 'When debt is the kinder tool', text: "Not every good business needs to sell equity to get where it's going." },
    { meta: 'Culture · 3 min', title: 'Boring on purpose', text: 'A quiet quarter is often the sign of a company doing something right.' },
  ],
  readMore: 'Read →',
  news: {
    title: 'The long view, occasionally',
    text: 'A short note when we publish something worth your time. No noise. (Demo — nothing is collected.)',
    placeholder: 'you@example.com',
    emailLabel: 'Email',
    button: 'Subscribe',
    thanksTitle: 'Thanks — you’re on the (pretend) list.',
    thanksText: 'Demo only: no email was collected or stored.',
  },
};

export const insights = { es, en };
