/* Enfoque / Approach page texts (layout: src/components/pages/ApproachPage.astro).
   Texts with <span> tags are inserted as HTML. The English object must have the same keys. */

const es = {
  title: 'Enfoque',
  description: 'Cómo invierte Peydro Capital Alliance: tres principios y un proceso en cuatro etapas, pensados para un horizonte largo.',
  hero: {
    eyebrow: 'Enfoque',
    title: 'Criterio, alineación y <span class="serif-em">tiempo</span>.',
    lead: 'Primero evaluamos a las personas y después acompañamos a largo plazo. Tres principios guían cada alianza, y un proceso en cuatro etapas nos mantiene honestos.',
    meta: [
      { value: '3', label: 'Principios' },
      { value: '4', label: 'Etapas del proceso' },
      { value: '7 años', label: 'Permanencia media' },
    ],
  },
  principles: [
    { title: 'Convicción antes que consenso', text: 'Unas pocas empresas que entendemos a fondo, en lugar de una cartera dispersa que no podríamos seguir.' },
    { title: 'Un reloj más largo', text: 'Estructuramos cada alianza para que el tiempo sea un aliado, no una presión.' },
    { title: 'Operar codo con codo', text: 'Un equipo de operadores que ya han construido y escalado empresas, integrado con la dirección.' },
  ],
  statement: '“Antes de cada operación nos hacemos una pregunta: <span class="hl">¿estaríamos orgullosos de tener esto dentro de diez años?</span>”',
  statementBy: '— Principio del comité de inversión',
  process: {
    eyebrow: 'Proceso',
    title: 'Cómo toma forma una alianza',
    lead: 'Cuatro etapas, sin atajos. La línea se completa a medida que avanzas.',
    steps: [
      { title: 'Originar', text: 'Nuestras mejores operaciones nacen de relaciones construidas durante años. Preferimos conocer una empresa mucho antes de que esté en venta.' },
      { title: 'Analizar', text: 'Profundizamos en la economía del negocio, las personas y su solidez, y somos honestos pronto cuando no encajamos.' },
      { title: 'Acompañar', text: 'Condiciones alineadas, un plan claro y unas pocas prioridades que perseguimos junto a la dirección.' },
      { title: 'Hacer crecer', text: 'Mantenemos la paciencia, reinvertimos en lo que funciona y dejamos que el tiempo y la disciplina hagan el trabajo pesado.' },
    ],
  },
  history: {
    eyebrow: 'Desde 2019',
    title: 'Una breve historia',
    items: [
      { year: '2019', title: 'Nace PCA', text: 'Tres socios y una tesis sencilla: capital paciente para la mediana empresa.' },
      { year: '2021', title: 'Primeras desinversiones', text: 'Dos de las primeras alianzas llegan a su madurez y validan el modelo de permanencia larga.' },
      { year: '2023', title: 'Abrimos el mandato de crédito', text: 'Ampliamos a crédito privado flexible para situaciones que el capital por sí solo no resuelve.' },
      { year: '2026', title: 'Tercera oficina', text: 'Singapur se une a Londres y Zúrich y la plataforma se vuelve global.' },
    ],
  },
};

const en: typeof es = {
  title: 'Approach',
  description: 'How Peydro Capital Alliance invests: three principles and a four-stage process, built around a long holding period.',
  hero: {
    eyebrow: 'Approach',
    title: 'Judgment, alignment, <span class="serif-em">time</span>.',
    lead: 'We underwrite people first and hold for the long arc. Three principles shape every partnership — and a four-stage process keeps us honest.',
    meta: [
      { value: '3', label: 'Principles' },
      { value: '4', label: 'Process stages' },
      { value: '7yr', label: 'Avg. hold' },
    ],
  },
  principles: [
    { title: 'Conviction over consensus', text: "A handful of businesses we understand deeply, rather than a sprawling book we can't." },
    { title: 'A longer clock', text: 'We structure every partnership so time is an ally, not a pressure.' },
    { title: 'Operating alongside', text: 'A bench of operators who have built and scaled, embedded with management.' },
  ],
  statement: '“We ask one question before every deal: <span class="hl">would we be proud to own this in ten years?</span>”',
  statementBy: '— Investment committee principle',
  process: {
    eyebrow: 'Process',
    title: 'How a partnership takes shape',
    lead: 'Four stages, no shortcuts. The line fills as you scroll.',
    steps: [
      { title: 'Originate', text: "Our best deals come from relationships years in the making. We'd rather know a company long before it's for sale." },
      { title: 'Diligence', text: "We go deep on unit economics, people and durability — and we're honest early when the fit isn't there." },
      { title: 'Partner', text: 'Aligned terms, a clear plan, and a small set of priorities we pursue shoulder-to-shoulder with management.' },
      { title: 'Compound', text: "We stay patient, reinvest behind what's working, and let time and discipline do the heavy lifting." },
    ],
  },
  history: {
    eyebrow: 'Since 2019',
    title: 'A short history',
    items: [
      { year: '2019', title: 'PCA is founded', text: 'Three partners and a simple thesis: patient capital for the lower-middle market.' },
      { year: '2021', title: 'First platform exits', text: 'Two early partnerships reach maturity, validating the long-hold model.' },
      { year: '2023', title: 'Credit mandate opens', text: "We extend into flexible private credit for situations equity alone can't solve." },
      { year: '2026', title: 'Third office', text: 'Singapore joins London and Zürich as the platform goes global.' },
    ],
  },
};

export const approach = { es, en };
