/* Home page texts: "Crecimiento compuesto de redes" / "Compound network growth"
   (layout: src/components/pages/HomePage.astro).
   Texts with <span>/<em> tags are inserted as HTML. The English object must have the same keys. */

const es = {
  description: 'Cada nueva conexión aumenta lo que la red puede llegar a crear: así convierte PCA una red en un ecosistema que detecta, combina y escala valor.',
  hero: {
    eyebrow: 'Crecimiento compuesto de redes',
    /* each entry is one line of the big headline */
    titleLines: ['Cada nueva conexión', 'aumenta lo que la red', '<em class="serif-em">puede llegar a crear</em>.'],
    lead: 'Una red no crece únicamente porque incorpora más participantes. Crece porque cada nueva persona, empresa, activo, capacidad o relación aumenta las combinaciones posibles del conjunto.',
    primary: 'Solicitar reunión',
    secondary: 'Quiénes somos',
    scroll: 'Desliza',
  },
  ecosystem: {
    eyebrow: 'De red a ecosistema',
    title: 'Una red conecta participantes. <span class="serif-em">Un ecosistema activa capacidades.</span>',
    paragraphs: [
      'Una red se convierte en un ecosistema PCA cuando entendemos qué puede aportar cada participante, qué necesita, qué relaciones existen y qué nuevas posibilidades pueden construirse entre ellos.',
      'El valor no procede únicamente del tamaño de la red, sino de su capacidad para generar conexiones útiles, actividad, aprendizaje y nuevas formas de crecimiento.',
    ],
    flow: ['Red', 'Conocimiento', 'Conexión', 'Activación', 'Valor'],
    flowEnd: 'Ecosistemas PCA',
  },
  types: {
    eyebrow: 'Ecosistemas PCA',
    title: 'Una arquitectura. <span class="serif-em">Diferentes tipos de red.</span>',
    lead: 'PCA puede desplegar su lógica de conexión, activación y crecimiento sobre redes de naturaleza distinta sin tener que rediseñar su arquitectura de base.',
    cards: [
      { title: 'Ecosistemas empresariales', text: 'Empresas, profesionales, expertos, proveedores, activos y conocimiento conectados para detectar necesidades, desarrollar propuestas de valor, generar colaboraciones y construir nuevas formas de crecimiento.', badge: '' },
      { title: 'Ecosistemas residenciales', text: 'Comunidades de propietarios, urbanizaciones, hogares, administradores, proveedores y servicios conectados alrededor de las necesidades reales de una comunidad y de las oportunidades de coordinación, eficiencia y valor compartido.', badge: '' },
      { title: 'Ecosistemas personales y patrimoniales', text: 'Personas, familias, patrimonio, profesionales de confianza, conocimiento y necesidades conectados dentro de una arquitectura coordinada.', badge: 'En evolución' },
    ],
    sameTitle: 'Cambia la red. <span class="serif-em">No cambia la arquitectura.</span>',
    sameParagraphs: [
      'Cada ecosistema requiere una combinación distinta de capacidades, pero PCA mantiene una estructura común sobre la que puede desplegar nuevas implantaciones.',
      'La arquitectura se adapta al contexto, al tipo de participante y a las necesidades de la red, sin convertir cada nuevo ecosistema en una organización distinta.',
    ],
  },
  opus: {
    eyebrow: 'OPUS',
    title: 'La maquinaria de crecimiento compuesto de <span class="serif-em">PCA</span>.',
    paragraphs: [
      'OPUS trabaja sobre empresas, capacidades y ecosistemas para detectar posibilidades de crecimiento, desarrollar nuevas propuestas de valor y convertir lo que funciona en modelos capaces de escalarse y replicarse.',
      'Puede generar conexiones, campañas, programas, productos, proyectos, nuevas líneas de negocio, experiencias, colaboraciones y otras iniciativas cuando tengan sentido.',
      'Su función no es esperar a que una necesidad llegue: es observar activamente la red, diseñar posibilidades y construir mecanismos para que el valor se multiplique.',
    ],
    steps: [
      { title: 'Detectar', text: 'Escucha y analiza la red: qué necesita, qué puede aportar y dónde hay potencial.' },
      { title: 'Diseñar', text: 'Imagina nuevas combinaciones y desarrolla propuestas de valor alrededor de ellas.' },
      { title: 'Construir', text: 'Activa iniciativas concretas y mide lo que ocurre con cada una.' },
      { title: 'Escalar', text: 'Convierte los modelos que funcionan en activos replicables.' },
    ],
    loopLabel: 'El ciclo de OPUS',
    loop: ['Escuchar', 'Detectar', 'Conectar', 'Imaginar', 'Construir', 'Activar', 'Monetizar', 'Medir', 'Aprender', 'Replicar'],
  },
  os: {
    title: 'La infraestructura operativa y de datos que permite escalar PCA.',
    paragraphs: [
      'PCA OS organiza y conecta la información de empresas, personas, capacidades, solicitudes, oportunidades, proyectos, documentos, relaciones, métricas y procesos.',
      'Su función es reducir dependencia de memoria dispersa, dar trazabilidad a la actividad y convertir lo que PCA aprende en una base operativa reutilizable.',
    ],
    tags: ['Empresas', 'Personas', 'Capacidades', 'Solicitudes', 'Oportunidades', 'Proyectos', 'Documentos', 'Relaciones', 'Métricas', 'Procesos'],
  },
  logos: {
    title: 'La actividad que genera PCA también puede convertirse en audiencia.',
    paragraphs: [
      'LOGOS transforma conocimiento, proyectos, casos, expertos, actividades y resultados en contenido, visibilidad, reputación y nueva demanda.',
      'A medida que OPUS genere más actividad, LOGOS puede convertirse en una capa cada vez más conectada a ese motor de crecimiento.',
    ],
    flowEnd: 'Audiencia · Reputación · Nueva demanda',
  },
  cycle: {
    eyebrow: 'El ciclo compuesto',
    title: 'La red no solo crece. <span class="serif-em">Aprende.</span>',
    steps: [
      { title: 'Actividad', text: 'Cada nueva iniciativa, conexión o proyecto genera información.' },
      { title: 'Datos', text: 'PCA OS estructura esa información y le da trazabilidad.' },
      { title: 'Aprendizaje', text: 'OPUS utiliza ese aprendizaje para mejorar decisiones, propuestas e iniciativas.' },
      { title: 'Mejores propuestas', text: 'Cada iteración parte de más conocimiento que la anterior.' },
      { title: 'Nueva actividad', text: 'LOGOS puede amplificar lo que funciona y atraer nueva actividad a la red.' },
    ],
    end: 'El resultado es una red con cada vez más capacidad para detectar, combinar y escalar valor.',
  },
  model: {
    eyebrow: 'Modelo económico',
    title: 'Crear valor también exige <span class="serif-em">saber cómo capturarlo</span>.',
    lead: 'PCA puede monetizar de formas distintas según la naturaleza de cada iniciativa:',
    items: ['Memberships', 'Fees', 'Proyectos', 'Comisiones', 'Revenue share', 'Patrocinios', 'Eventos', 'Implantaciones', 'Ventures', 'Operaciones sobre activos'],
  },
  cta: {
    eyebrow: 'Hablemos de tu red',
    title: 'Cada conexión que entra multiplica lo que la red puede crear.',
    button: 'Solicitar reunión',
  },
};

const en: typeof es = {
  description: 'Every new connection increases what the network can create: how PCA turns a network into an ecosystem that detects, combines and scales value.',
  hero: {
    eyebrow: 'Compound network growth',
    titleLines: ['Every new connection', 'increases what the network', '<em class="serif-em">can go on to create</em>.'],
    lead: "A network doesn't grow only because it adds more participants. It grows because each new person, company, asset, capability or relationship increases the possible combinations of the whole.",
    primary: 'Request a meeting',
    secondary: 'About us',
    scroll: 'Scroll',
  },
  ecosystem: {
    eyebrow: 'From network to ecosystem',
    title: 'A network connects participants. <span class="serif-em">An ecosystem activates capabilities.</span>',
    paragraphs: [
      'A network becomes a PCA ecosystem when we understand what each participant can contribute, what they need, which relationships exist and what new possibilities can be built between them.',
      "Value doesn't come only from the size of the network, but from its ability to generate useful connections, activity, learning and new forms of growth.",
    ],
    flow: ['Network', 'Knowledge', 'Connection', 'Activation', 'Value'],
    flowEnd: 'PCA ecosystems',
  },
  types: {
    eyebrow: 'PCA ecosystems',
    title: 'One architecture. <span class="serif-em">Different kinds of network.</span>',
    lead: 'PCA can deploy its logic of connection, activation and growth across networks of very different kinds, without redesigning its underlying architecture.',
    cards: [
      { title: 'Business ecosystems', text: 'Companies, professionals, experts, suppliers, assets and knowledge connected to detect needs, develop value propositions, create collaborations and build new forms of growth.', badge: '' },
      { title: 'Residential ecosystems', text: "Owners' associations, housing estates, households, property managers, suppliers and services connected around a community's real needs and its opportunities for coordination, efficiency and shared value.", badge: '' },
      { title: 'Personal and wealth ecosystems', text: 'People, families, wealth, trusted professionals, knowledge and needs connected within a coordinated architecture.', badge: 'In development' },
    ],
    sameTitle: "The network changes. <span class=\"serif-em\">The architecture doesn't.</span>",
    sameParagraphs: [
      'Each ecosystem needs a different mix of capabilities, but PCA keeps a common structure on which it can deploy new implementations.',
      'The architecture adapts to the context, the type of participant and the needs of the network, without turning each new ecosystem into a separate organisation.',
    ],
  },
  opus: {
    eyebrow: 'OPUS',
    title: 'The compound growth machinery of <span class="serif-em">PCA</span>.',
    paragraphs: [
      'OPUS works across companies, capabilities and ecosystems to detect growth possibilities, develop new value propositions and turn what works into models that can be scaled and replicated.',
      'It can generate connections, campaigns, programmes, products, projects, new business lines, experiences, collaborations and other initiatives whenever they make sense.',
      'Its role is not to wait for a need to arrive: it is to actively observe the network, design possibilities and build mechanisms that multiply value.',
    ],
    steps: [
      { title: 'Detect', text: 'Listens to and analyses the network: what it needs, what it can contribute and where the potential is.' },
      { title: 'Design', text: 'Imagines new combinations and develops value propositions around them.' },
      { title: 'Build', text: 'Activates concrete initiatives and measures what happens with each one.' },
      { title: 'Scale', text: 'Turns the models that work into replicable assets.' },
    ],
    loopLabel: 'The OPUS cycle',
    loop: ['Listen', 'Detect', 'Connect', 'Imagine', 'Build', 'Activate', 'Monetise', 'Measure', 'Learn', 'Replicate'],
  },
  os: {
    title: 'The operating and data infrastructure that lets PCA scale.',
    paragraphs: [
      'PCA OS organises and connects information on companies, people, capabilities, requests, opportunities, projects, documents, relationships, metrics and processes.',
      'Its role is to reduce reliance on scattered memory, make activity traceable and turn what PCA learns into a reusable operating base.',
    ],
    tags: ['Companies', 'People', 'Capabilities', 'Requests', 'Opportunities', 'Projects', 'Documents', 'Relationships', 'Metrics', 'Processes'],
  },
  logos: {
    title: 'The activity PCA generates can also become an audience.',
    paragraphs: [
      'LOGOS turns knowledge, projects, cases, experts, activities and results into content, visibility, reputation and new demand.',
      'As OPUS generates more activity, LOGOS can become a layer ever more connected to that growth engine.',
    ],
    flowEnd: 'Audience · Reputation · New demand',
  },
  cycle: {
    eyebrow: 'The compound cycle',
    title: "The network doesn't just grow. <span class=\"serif-em\">It learns.</span>",
    steps: [
      { title: 'Activity', text: 'Every new initiative, connection or project generates information.' },
      { title: 'Data', text: 'PCA OS structures that information and makes it traceable.' },
      { title: 'Learning', text: 'OPUS uses that learning to improve decisions, proposals and initiatives.' },
      { title: 'Better proposals', text: 'Each iteration starts from more knowledge than the last.' },
      { title: 'New activity', text: 'LOGOS can amplify what works and bring new activity into the network.' },
    ],
    end: 'The result is a network ever more able to detect, combine and scale value.',
  },
  model: {
    eyebrow: 'Business model',
    title: 'Creating value also means <span class="serif-em">knowing how to capture it</span>.',
    lead: 'PCA can monetise in different ways depending on the nature of each initiative:',
    items: ['Memberships', 'Fees', 'Projects', 'Commissions', 'Revenue share', 'Sponsorships', 'Events', 'Implementations', 'Ventures', 'Asset transactions'],
  },
  cta: {
    eyebrow: "Let's talk about your network",
    title: 'Every connection that joins multiplies what the network can create.',
    button: 'Request a meeting',
  },
};

export const home = { es, en };
