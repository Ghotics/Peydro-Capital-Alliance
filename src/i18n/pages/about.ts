/* Quiénes somos / About us page texts (layout: src/components/pages/AboutPage.astro).
   Texts with <span>/<br> tags are inserted as HTML. The English object must have the same keys. */

const es = {
  title: 'Quiénes somos',
  description: 'Peydró Capital Alliance construye arquitecturas que conectan personas, empresas, activos, conocimiento y relaciones para crear nuevas posibilidades de valor.',
  hero: {
    eyebrow: 'Quiénes somos',
    title: 'Construimos arquitecturas para que las redes sean <span class="serif-em">más capaces</span>.',
    lead: 'Peydró Capital Alliance parte de una convicción: muchas de las capacidades necesarias para generar crecimiento ya existen, pero suelen estar dispersas, desconectadas o infrautilizadas. Nuestra función es entenderlas, conectarlas y desarrollar alrededor de ellas estructuras capaces de producir y escalar valor.',
  },
  intro: {
    eyebrow: 'Qué es PCA',
    title: 'No somos una colección de <span class="serif-em">servicios</span>.',
    paragraphs: [
      'PCA es una arquitectura de crecimiento que conecta personas, empresas, activos, conocimiento y relaciones para crear nuevas posibilidades de valor.',
      'No se limita a resolver una necesidad puntual: observa la red, detecta lo que puede combinarse y desarrolla estructuras que permiten que las oportunidades se multipliquen.',
    ],
  },
  method: {
    eyebrow: 'Forma de trabajar',
    title: 'Entender. Conectar.<br />Desarrollar. <span class="serif-em">Escalar.</span>',
    steps: [
      { title: 'Entender', text: 'Conocer qué existe, qué falta y dónde hay potencial real.' },
      { title: 'Conectar', text: 'Encontrar complementariedades entre personas, empresas, activos, conocimiento y capacidades.' },
      { title: 'Desarrollar', text: 'Convertir una combinación prometedora en una propuesta, iniciativa, proyecto o nueva capacidad.' },
      { title: 'Escalar', text: 'Sistematizar lo que funciona para que pueda crecer, repetirse y generar aprendizaje.' },
    ],
  },
  architecture: {
    eyebrow: 'Arquitectura PCA',
    title: 'Cinco áreas.',
    lead: 'Funciones diferentes dentro de una misma arquitectura.',
    groups: [
      {
        label: 'Núcleo de escalabilidad',
        areas: [
          { name: 'OPUS', role: 'Crecimiento compuesto, desarrollo y escalado', text: 'Diseña, activa y escala nuevas formas de crecimiento alrededor de empresas, capacidades y ecosistemas. Detecta posibilidades, conecta recursos, desarrolla propuestas de valor, crea iniciativas y convierte lo que funciona en capacidades replicables.' },
          { name: 'PCA OS', role: 'Sistema operativo, datos y automatización', text: 'Organiza y conecta empresas, personas, capacidades, solicitudes, oportunidades, proyectos, documentación, trazabilidad, métricas y procesos para permitir que PCA funcione y escale.' },
        ],
      },
      {
        label: 'Conectada al núcleo',
        areas: [
          { name: 'LOGOS', role: 'Marca, comunicación, audiencia y captación', text: 'Convierte la actividad, el conocimiento y los resultados de PCA en contenido, reputación, visibilidad y nueva demanda.' },
        ],
      },
      {
        label: 'Áreas específicas',
        areas: [
          { name: 'GIZA', role: 'Alianzas, originación y referenciación', text: 'Desarrolla relaciones con negocios, comunidades y redes externas para detectar, generar y canalizar oportunidades hacia PCA.' },
          { name: 'NEXUS', role: 'Real Estate, activos y operaciones', text: 'Canaliza y estructura las oportunidades vinculadas a inmuebles, activos, operaciones y financiación asociada.' },
        ],
      },
    ],
  },
  statement: 'No buscamos construir una red más grande. <span class="hl">Buscamos construir una red más capaz.</span>',
  capable: [
    'Más capaz de detectar posibilidades.',
    'Más capaz de desarrollar propuestas de valor.',
    'Más capaz de combinar conocimiento.',
    'Más capaz de ejecutar.',
    'Y cada vez más capaz de escalar lo que funciona.',
  ],
  cta: {
    title: 'Hablemos',
    text: 'Cuéntanos qué necesitas o qué puedes aportar a la red. Te pondremos en contacto con la persona adecuada de PCA.',
    button: 'Solicitar reunión',
  },
};

const en: typeof es = {
  title: 'About us',
  description: 'Peydró Capital Alliance builds architectures that connect people, companies, assets, knowledge and relationships to create new possibilities for value.',
  hero: {
    eyebrow: 'About us',
    title: 'We build architectures that make networks <span class="serif-em">more capable</span>.',
    lead: 'Peydró Capital Alliance starts from a conviction: many of the capabilities needed to generate growth already exist, but they are often scattered, disconnected or underused. Our role is to understand them, connect them and build structures around them that can produce and scale value.',
  },
  intro: {
    eyebrow: 'What PCA is',
    title: 'We are not a collection of <span class="serif-em">services</span>.',
    paragraphs: [
      'PCA is a growth architecture that connects people, companies, assets, knowledge and relationships to create new possibilities for value.',
      "It doesn't stop at solving a one-off need: it observes the network, detects what can be combined and develops structures that let opportunities multiply.",
    ],
  },
  method: {
    eyebrow: 'How we work',
    title: 'Understand. Connect.<br />Develop. <span class="serif-em">Scale.</span>',
    steps: [
      { title: 'Understand', text: 'Know what exists, what is missing and where the real potential lies.' },
      { title: 'Connect', text: 'Find complementarities between people, companies, assets, knowledge and capabilities.' },
      { title: 'Develop', text: 'Turn a promising combination into a proposal, initiative, project or new capability.' },
      { title: 'Scale', text: 'Systematise what works so it can grow, be repeated and generate learning.' },
    ],
  },
  architecture: {
    eyebrow: 'PCA architecture',
    title: 'Five areas.',
    lead: 'Different functions within one architecture.',
    groups: [
      {
        label: 'Scalability core',
        areas: [
          { name: 'OPUS', role: 'Compound growth, development and scaling', text: 'Designs, activates and scales new forms of growth around companies, capabilities and ecosystems. It detects possibilities, connects resources, develops value propositions, creates initiatives and turns what works into replicable capabilities.' },
          { name: 'PCA OS', role: 'Operating system, data and automation', text: 'Organises and connects companies, people, capabilities, requests, opportunities, projects, documentation, traceability, metrics and processes so that PCA can run and scale.' },
        ],
      },
      {
        label: 'Connected to the core',
        areas: [
          { name: 'LOGOS', role: 'Brand, communication, audience and acquisition', text: "Turns PCA's activity, knowledge and results into content, reputation, visibility and new demand." },
        ],
      },
      {
        label: 'Specific areas',
        areas: [
          { name: 'GIZA', role: 'Alliances, origination and referrals', text: 'Develops relationships with businesses, communities and external networks to detect, generate and channel opportunities towards PCA.' },
          { name: 'NEXUS', role: 'Real estate, assets and operations', text: 'Channels and structures opportunities linked to property, assets, operations and related financing.' },
        ],
      },
    ],
  },
  statement: 'We are not trying to build a bigger network. <span class="hl">We are building a more capable one.</span>',
  capable: [
    'More capable of detecting possibilities.',
    'More capable of developing value propositions.',
    'More capable of combining knowledge.',
    'More capable of executing.',
    'And ever more capable of scaling what works.',
  ],
  cta: {
    title: "Let's talk",
    text: "Tell us what you need or what you can bring to the network. We'll put you in touch with the right person at PCA.",
    button: 'Request a meeting',
  },
};

export const about = { es, en };
