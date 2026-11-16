/* Home page texts (layout: src/components/pages/HomePage.astro).
   Texts with <span>/<em> tags are inserted as HTML. The English object must have the same keys. */

const es = {
  description: 'Peydro Capital Alliance acompaña a fundadores y equipos directivos de la mediana empresa, aportando convicción, estructura y un horizonte largo a empresas en un punto de inflexión.',
  eyebrow: 'Capital privado · Desde 2019',
  titleLines: ['Capital paciente para', 'empresas hechas <em class="serif-em">para durar</em>.'],
  intro: 'Peydro Capital Alliance acompaña a fundadores y equipos directivos de la mediana empresa, aportando convicción, estructura y un horizonte largo a empresas en un punto de inflexión.',
  primary: 'Iniciar una conversación',
  secondary: 'Quiénes somos',
  scroll: 'Desliza',
  /* key figures (placeholders): the numbers count up when they scroll into view */
  stats: [
    { target: 4.2, decimals: 1, prefix: '$', suffix: 'B', label: 'Activos gestionados' },
    { target: 38, decimals: 0, prefix: '', suffix: '+', label: 'Empresas participadas' },
    { target: 7, decimals: 0, prefix: '', suffix: ' años', label: 'Permanencia media' },
    { target: 100, decimals: 0, prefix: '', suffix: '%', label: 'Operaciones con fundadores' },
  ],
  statement: 'Creemos que los mejores negocios se construyen <span class="hl">despacio</span>, y que el capital debe tener la paciencia necesaria para acompañarlos.',
  statementBy: '— El equipo de inversión de PCA',
  approach: {
    eyebrow: 'Enfoque',
    title: 'Invertimos como propietarios, <span class="serif-em">no como turistas</span>.',
    lead: 'Lo que se acumula con el tiempo es el criterio, la alineación y la voluntad de quedarse cuando una empresa atraviesa momentos difíciles.',
    link: 'Descubre cómo trabajamos',
    cards: [
      { title: 'Convicción antes que consenso', text: 'Posiciones concentradas en empresas que entendemos a fondo.' },
      { title: 'Un reloj más largo', text: 'Rentabilidades medidas en años, con estructuras en las que el tiempo juega a favor.' },
      { title: 'Operar codo con codo', text: 'Operadores integrados con la dirección en lo que realmente marca la diferencia.' },
    ],
  },
  track: {
    eyebrow: 'Trayectoria',
    title: 'Crecimiento compuesto, no fuegos artificiales',
    text: 'Preferimos mantener durante una década un negocio que crece de forma constante antes que perseguir un múltiplo rápido. La mayor parte del valor se crea a partir del tercer año, cuando el plan, las personas y la paciencia se alinean.',
    note: 'Ilustrativo: las cifras son ficticias.',
  },
  coInvest: 'Coinvertimos junto a',
  cta: {
    title: '¿Construyes algo que merezca la pena mantener?',
    text: 'Acompañamos a un número reducido de empresas cada año. Si es el momento adecuado, nos gustaría conocerte.',
    button: 'Solicitar reunión',
  },
};

const en: typeof es = {
  description: 'Peydro Capital Alliance partners with founders and operators across the lower-middle market — bringing conviction, structure and a long horizon to businesses at an inflection point.',
  eyebrow: 'Private Capital · Est. 2019',
  titleLines: ['Patient capital for', 'companies built <em class="serif-em">to last</em>.'],
  intro: 'Peydro Capital Alliance partners with founders and operators across the lower-middle market — bringing conviction, structure and a long horizon to businesses at an inflection point.',
  primary: 'Start a conversation',
  secondary: 'About us',
  scroll: 'Scroll',
  stats: [
    { target: 4.2, decimals: 1, prefix: '$', suffix: 'B', label: 'Assets stewarded' },
    { target: 38, decimals: 0, prefix: '', suffix: '+', label: 'Platform companies' },
    { target: 7, decimals: 0, prefix: '', suffix: 'yr', label: 'Avg. hold period' },
    { target: 100, decimals: 0, prefix: '', suffix: '%', label: 'Founder-led deals' },
  ],
  statement: 'We believe the best businesses are <span class="hl">built slowly</span> — and that capital should have the patience to match.',
  statementBy: '— The PCA investment team',
  approach: {
    eyebrow: 'Approach',
    title: 'We invest like owners, <span class="serif-em">not tourists</span>.',
    lead: 'What compounds is judgment, alignment and the willingness to stay in the room when a business is hard.',
    link: 'See how we work',
    cards: [
      { title: 'Conviction over consensus', text: 'Concentrated positions in businesses we understand deeply.' },
      { title: 'A longer clock', text: 'Returns measured in years, structured so time is an ally.' },
      { title: 'Operating alongside', text: 'Operators embedded with management on what moves the needle.' },
    ],
  },
  track: {
    eyebrow: 'Track record',
    title: 'Compounding, not fireworks',
    text: "We'd rather own a steady grower for a decade than chase a quick multiple. Most of our value is created after year three — once the plan, the people and the patience line up.",
    note: 'Illustrative — figures are fictional.',
  },
  coInvest: 'Co-investing alongside',
  cta: {
    title: 'Building something worth holding?',
    text: "We back a small number of companies each year. If the timing is right, we'd like to hear from you.",
    button: 'Get in touch',
  },
};

export const home = { es, en };
