/* Home page texts (layout: src/components/pages/HomePage.astro).
   Texts with <span>/<em> tags are inserted as HTML. The English object must have the same keys. */

const es = {
  description: 'PCA es una arquitectura empresarial diseñada para conectar personas, empresas, activos, conocimiento, relaciones y capacidades, y transformar su combinación en oportunidades, proyectos y crecimiento.',
  hero: {
    eyebrow: 'Peydró Capital Alliance',
    /* each entry is one line of the big headline */
    titleLines: ['Conectamos capitales.', 'Creamos nuevas', '<em class="serif-em">posibilidades de valor</em>.'],
    lead: 'PCA es una arquitectura empresarial diseñada para conectar personas, empresas, activos, conocimiento, relaciones y capacidades, y transformar su combinación en oportunidades, proyectos y crecimiento.',
    button: 'Solicitar reunión',
    scroll: 'Desliza',
  },
  capital: {
    eyebrow: 'Peydró Capital Alliance',
    title: 'El capital no es solo dinero. <span class="serif-em">Es todo aquello capaz de generar valor.</span>',
    paragraphs: [
      'Capital es financiación, pero también conocimiento, tecnología, activos, talento, acceso, relaciones, información y capacidad de ejecución.',
      'PCA identifica qué recursos existen, cuáles faltan y qué combinación puede transformar una necesidad o una posibilidad en una oportunidad real.',
    ],
    kindsLabel: 'Tipos de capital',
    kinds: ['Financiero', 'Empresarial', 'Humano', 'Tecnológico', 'Relacional', 'Inmobiliario', 'Intelectual', 'Operativo'],
  },
  why: {
    eyebrow: 'Por qué PCA',
    title: 'Muchas oportunidades ya existen. <span class="serif-em">Lo que falta es conectar las piezas.</span>',
    paragraphs: [
      'Una empresa puede tener clientes pero necesitar financiación. Un activo puede necesitar comprador. Una organización puede disponer de datos pero no de automatización. Una relación puede tener potencial pero carecer de estructura para convertirse en acción.',
      'Los recursos existen, pero suelen estar fragmentados.',
      'PCA existe para detectar esas piezas, entender cómo pueden encajar y construir alrededor de ellas nuevas posibilidades de valor.',
    ],
    /* index of the paragraph shown bigger */
    strong: 1,
    flow: ['Recursos dispersos', 'PCA'],
    flowEnd: 'Posibilidad estructurada',
  },
  architecture: {
    eyebrow: 'Arquitectura PCA',
    title: 'Una arquitectura. <span class="serif-em">Distintas capacidades para crear y escalar valor.</span>',
    lead: 'PCA combina áreas con funciones diferentes. Algunas operan como verticales especializadas; otras forman parte del núcleo que permite desarrollar, sistematizar y escalar el modelo.',
    groups: [
      {
        label: 'Núcleo de escalabilidad',
        areas: [
          { name: 'OPUS', role: 'Crecimiento compuesto, desarrollo y escalado' },
          { name: 'PCA OS', role: 'Sistema operativo, datos y automatización' },
        ],
      },
      {
        label: 'Conectada al núcleo',
        areas: [{ name: 'LOGOS', role: 'Marca, comunicación, audiencia y captación' }],
      },
      {
        label: 'Áreas específicas',
        areas: [
          { name: 'GIZA', role: 'Alianzas, originación y referenciación' },
          { name: 'NEXUS', role: 'Real Estate, activos y operaciones' },
        ],
      },
    ],
    link: 'Conocer cómo crece la red',
  },
  cta: {
    title: 'Capitales que se conectan. Valor que se multiplica.',
    text: 'PCA diseña conexiones, coordina capacidades y desarrolla estructuras capaces de convertir relaciones y recursos dispersos en nuevas posibilidades de crecimiento.',
    button: 'Solicitar reunión',
  },
};

const en: typeof es = {
  description: 'PCA is a business architecture designed to connect people, companies, assets, knowledge, relationships and capabilities, and turn their combination into opportunities, projects and growth.',
  hero: {
    eyebrow: 'Peydró Capital Alliance',
    titleLines: ['We connect capital.', 'We create new', '<em class="serif-em">possibilities for value</em>.'],
    lead: 'PCA is a business architecture designed to connect people, companies, assets, knowledge, relationships and capabilities, and turn their combination into opportunities, projects and growth.',
    button: 'Request a meeting',
    scroll: 'Scroll',
  },
  capital: {
    eyebrow: 'Peydró Capital Alliance',
    title: 'Capital is not only money. <span class="serif-em">It is everything capable of generating value.</span>',
    paragraphs: [
      'Capital is financing, but also knowledge, technology, assets, talent, access, relationships, information and the capacity to execute.',
      'PCA identifies which resources exist, which are missing and what combination can turn a need or a possibility into a real opportunity.',
    ],
    kindsLabel: 'Kinds of capital',
    kinds: ['Financial', 'Business', 'Human', 'Technological', 'Relational', 'Real estate', 'Intellectual', 'Operational'],
  },
  why: {
    eyebrow: 'Why PCA',
    title: 'Many opportunities already exist. <span class="serif-em">What is missing is connecting the pieces.</span>',
    paragraphs: [
      'A company may have clients but need financing. An asset may need a buyer. An organisation may have data but no automation. A relationship may have potential but lack the structure to turn into action.',
      'The resources exist, but they are usually fragmented.',
      'PCA exists to detect those pieces, understand how they can fit together and build new possibilities for value around them.',
    ],
    strong: 1,
    flow: ['Scattered resources', 'PCA'],
    flowEnd: 'Structured possibility',
  },
  architecture: {
    eyebrow: 'PCA architecture',
    title: 'One architecture. <span class="serif-em">Different capabilities to create and scale value.</span>',
    lead: 'PCA combines areas with different functions. Some operate as specialised verticals; others are part of the core that makes it possible to develop, systematise and scale the model.',
    groups: [
      {
        label: 'Scalability core',
        areas: [
          { name: 'OPUS', role: 'Compound growth, development and scaling' },
          { name: 'PCA OS', role: 'Operating system, data and automation' },
        ],
      },
      {
        label: 'Connected to the core',
        areas: [{ name: 'LOGOS', role: 'Brand, communication, audience and acquisition' }],
      },
      {
        label: 'Specific areas',
        areas: [
          { name: 'GIZA', role: 'Alliances, origination and referrals' },
          { name: 'NEXUS', role: 'Real estate, assets and operations' },
        ],
      },
    ],
    link: 'See how the network grows',
  },
  cta: {
    title: 'Capital that connects. Value that multiplies.',
    text: 'PCA designs connections, coordinates capabilities and develops structures able to turn scattered relationships and resources into new possibilities for growth.',
    button: 'Request a meeting',
  },
};

export const home = { es, en };
