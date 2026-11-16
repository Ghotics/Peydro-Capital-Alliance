/* Privacy policy texts (layout: src/components/pages/PrivacyPage.astro).
   Company details, providers, retention and dates come from src/data/legal.ts.
   Texts may contain <b> tags (inserted as HTML). {retention} is replaced by the retention period.
   The Spanish version is the reference text; have a lawyer review both before launch. */

const es = {
  title: 'Política de privacidad',
  description: 'Qué datos recogemos con los formularios de esta web, para qué los usamos y qué derechos tienes.',
  eyebrow: 'Legal',
  heading: 'Política de <span class="serif-em">privacidad</span>',
  lead: 'Qué datos recogemos con los formularios de esta web, para qué los usamos y qué derechos tienes. Explicado de forma sencilla.',
  translationNote: '',
  updated: 'Última actualización:',
  intro: 'Esta política se aplica a los formularios de esta web: el de Giza, los de PCA Business Office, el de contacto rápido y el de contacto general. Cumple el Reglamento General de Protección de Datos (Reglamento (UE) 2016/679, «RGPD») y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales («LOPDGDD»).',
  summary: {
    title: 'En resumen',
    controller: 'Responsable',
    purpose: 'Finalidad',
    purposeText: 'Atender tu solicitud, contactarte y, si lo pides, gestionar tu cita.',
    basis: 'Legitimación',
    basisText: 'Tu propia solicitud (medidas precontractuales, art. 6.1.b RGPD).',
    recipients: 'Destinatarios',
    recipientsText: 'No cedemos tus datos a terceros, salvo obligación legal. Usamos proveedores que los tratan por encargo nuestro; algunos están en EE. UU., con las garantías del RGPD.',
    rights: 'Derechos',
    rightsText: 'Acceso, rectificación, supresión, oposición, limitación y portabilidad. Puedes reclamar ante la AEPD.',
  },
  s1: {
    title: '1. ¿Quién es el responsable de tus datos?',
    controller: 'Responsable:',
    taxId: 'NIF:',
    address: 'Domicilio:',
    email: 'Correo para temas de privacidad:',
    note: 'En esta página lo llamamos «PCA» o «nosotros».',
  },
  s2: {
    title: '2. ¿Qué datos recogemos?',
    items: [
      '<b>Los que escribes en el formulario:</b> nombre, apellidos, correo electrónico y teléfono. En los formularios de Business Office, también el edificio y el número de local. Además, la nota o el mensaje, si decides escribirlo.',
      '<b>De dónde llegas:</b> el código de la campaña o del código QR por el que entras (por ejemplo, el de un cartel), la página del formulario y la fecha y hora del envío.',
      '<b>Si reservas una cita:</b> los datos que introduces en el calendario de reservas (nombre, correo, día, hora y modalidad de la reunión).',
      '<b>Datos técnicos de la visita:</b> tu dirección IP y el tipo de navegador, que registran el servicio que aloja la web y el de tipografías (ver el punto 5).',
    ],
    after: [
      'Los campos marcados con <b>*</b> son necesarios para atender tu solicitud: si no los rellenas, no podremos tramitarla. La nota es siempre opcional.',
      '<b>No te pedimos</b> datos de salud, ingresos, patrimonio ni documentos. Por favor, no los incluyas en la nota: si hacen falta más adelante, te los pediremos por un canal adecuado.',
    ],
  },
  s3: {
    title: '3. ¿Para qué usamos tus datos y con qué base legal?',
    headWhat: 'Para qué',
    headBasis: 'Base legal',
    rows: [
      ['Atender tu solicitud, llamarte o escribirte para responderte.', 'Aplicar, a petición tuya, medidas precontractuales (art. 6.1.b RGPD).'],
      ['Gestionar la cita, si decides reservarla, y enviarte la confirmación.', 'Aplicar, a petición tuya, medidas precontractuales (art. 6.1.b RGPD).'],
      ['Saber por qué campaña o código QR nos encontraste, para medir qué publicidad funciona.', 'Nuestro interés legítimo en medir nuestras campañas (art. 6.1.f RGPD). Puedes oponerte.'],
      ['Cumplir nuestras obligaciones legales y defendernos ante posibles reclamaciones.', 'Obligación legal (art. 6.1.c RGPD) e interés legítimo (art. 6.1.f RGPD).'],
    ],
    after: 'No te enviaremos publicidad ni boletines, salvo que nos des tu consentimiento por separado. No tomamos decisiones automatizadas sobre ti ni elaboramos perfiles.',
  },
  s4: {
    title: '4. ¿Cuánto tiempo guardamos tus datos?',
    items: [
      'Mientras atendemos tu solicitud.',
      'Si no llegas a ser cliente, como máximo <b>{retention}</b> desde nuestro último contacto. Si pasas a ser cliente, mientras dure la relación.',
      'Después, los bloqueamos: solo se conservan para atender posibles responsabilidades legales durante los plazos que marca la ley, y luego se borran (art. 32 LOPDGDD).',
    ],
  },
  s5: {
    title: '5. ¿Quién puede ver tus datos?',
    paragraphs: [
      'Solo el equipo de PCA que atiende tu solicitud, incluido el especialista del área que elijas. No vendemos ni cedemos tus datos a terceros, salvo cuando una ley nos obliga (por ejemplo, a jueces o autoridades).',
      'Para funcionar usamos proveedores que tratan los datos por encargo nuestro, con un contrato que les obliga a protegerlos y a usarlos solo para lo que les pedimos (art. 28 RGPD):',
    ],
    headProvider: 'Proveedor',
    headWhat: 'Para qué',
    headWhere: 'Dónde',
  },
  s6: {
    title: '6. ¿Salen tus datos de la Unión Europea?',
    intro: 'Algunos de estos proveedores están en Estados Unidos o pueden acceder a los datos desde allí. En esos casos la transferencia está protegida por una de las garantías que prevé el RGPD:',
    after: 'Puedes pedirnos más información o una copia de estas garantías escribiendo al correo del punto 1.',
  },
  s7: {
    title: '7. ¿Qué derechos tienes?',
    items: [
      '<b>Acceso:</b> saber si tratamos tus datos y recibir una copia.',
      '<b>Rectificación:</b> corregir datos que estén mal o incompletos.',
      '<b>Supresión:</b> pedir que borremos tus datos.',
      '<b>Oposición:</b> pedir que dejemos de usarlos, por ejemplo para medir campañas.',
      '<b>Limitación:</b> pedir que los guardemos sin usarlos durante un tiempo, por ejemplo mientras comprobamos una corrección.',
      '<b>Portabilidad:</b> recibir tus datos en un formato que puedas llevar a otra empresa.',
      '<b>Retirar tu consentimiento</b>, si en algún momento nos lo das para algo, sin que afecte a lo hecho antes.',
    ],
    how: '<b>Cómo ejercerlos:</b> escríbenos al correo del punto 1 con el asunto «Protección de datos» e indica qué derecho quieres ejercer. Es gratuito. Si tenemos dudas de que eres tú, podemos pedirte algo que lo confirme. Te responderemos en un plazo de un mes, que puede ampliarse dos meses más en casos complejos (art. 12.3 RGPD); si lo ampliamos, te avisaremos.',
    complainBefore: '<b>Reclamar:</b> si crees que no hemos tratado bien tus datos, puedes presentar una reclamación ante la',
  },
  s8: {
    title: '8. Menores de edad',
    text: 'Nuestros servicios están dirigidos a personas mayores de edad. Si tienes menos de 14 años, no nos envíes tus datos: en ese caso tendría que hacerlo tu madre, padre o tutor (art. 7 LOPDGDD).',
  },
  s9: {
    title: '9. ¿Cómo protegemos tus datos?',
    text: 'Usamos conexión cifrada (HTTPS), solo acceden las personas del equipo que los necesitan, con usuario y contraseña personales, y trabajamos con proveedores que ofrecen garantías de seguridad. Si ocurriera un incidente que pusiera en riesgo tus datos, actuaríamos como marca la ley, incluido avisar a la AEPD y, cuando corresponda, a ti.',
  },
  s10: {
    title: '10. Cookies y datos en tu navegador',
    text: 'Esta web no usa cookies de análisis ni de publicidad. Solo guarda en tu navegador dos preferencias, y solo si las cambias tú, para recordarlas cuando vuelvas: el estilo de colores (Dorado u Oscuro) y el idioma (español o inglés). Puedes borrarlas desde los ajustes de tu navegador. El código de campaña viaja en la dirección de la página y no se guarda en tu navegador.',
  },
  s11: {
    title: '11. Si nos das datos de otra persona',
    text: 'Si escribes datos de otra persona (por ejemplo, de un socio o un familiar), debes contar con su permiso e informarle de esta política.',
  },
  s12: {
    title: '12. Cambios en esta política',
    text: 'Si cambiamos cómo tratamos tus datos, actualizaremos esta página y la fecha de arriba. Si el cambio es importante, te lo comunicaremos.',
  },
};

const en: typeof es = {
  title: 'Privacy policy',
  description: 'What data we collect through the forms on this website, what we use it for and what rights you have.',
  eyebrow: 'Legal',
  heading: 'Privacy <span class="serif-em">policy</span>',
  lead: 'What data we collect through the forms on this website, what we use it for and what rights you have. Explained simply.',
  translationNote: 'This is an English translation of our Spanish privacy policy. If the two versions ever differ, the Spanish version prevails.',
  updated: 'Last updated:',
  intro: 'This policy applies to the forms on this website: the Giza form, the PCA Business Office forms, the quick contact form and the general enquiry form. It complies with the General Data Protection Regulation (Regulation (EU) 2016/679, "GDPR") and Spain\'s Organic Law 3/2018 on the Protection of Personal Data and Guarantee of Digital Rights ("LOPDGDD").',
  summary: {
    title: 'In short',
    controller: 'Controller',
    purpose: 'Purpose',
    purposeText: 'To handle your request, contact you and, if you ask, manage your appointment.',
    basis: 'Legal basis',
    basisText: 'Your own request (pre-contractual steps, art. 6.1.b GDPR).',
    recipients: 'Recipients',
    recipientsText: "We don't share your data with third parties unless the law requires it. We use providers that process it on our behalf; some are in the US, with the GDPR safeguards.",
    rights: 'Rights',
    rightsText: 'Access, correction, deletion, objection, restriction and portability. You can complain to the AEPD.',
  },
  s1: {
    title: '1. Who is responsible for your data?',
    controller: 'Controller:',
    taxId: 'Tax ID (NIF):',
    address: 'Registered address:',
    email: 'Email for privacy matters:',
    note: 'On this page we call it "PCA" or "we".',
  },
  s2: {
    title: '2. What data do we collect?',
    items: [
      '<b>What you type in the form:</b> first name, last name, email and phone number. In the Business Office forms, also the building and unit number. And the note or message, if you choose to write one.',
      '<b>Where you come from:</b> the campaign or QR code you came through (for example, one on a poster), the form page, and the date and time it was sent.',
      '<b>If you book an appointment:</b> the details you enter in the booking calendar (name, email, day, time and type of meeting).',
      '<b>Technical data about the visit:</b> your IP address and browser type, recorded by the service that hosts the website and the font service (see section 5).',
    ],
    after: [
      "Fields marked with <b>*</b> are needed to handle your request: if you don't fill them in, we can't process it. The note is always optional.",
      "<b>We don't ask for</b> health, income, wealth or document details. Please don't include them in the note: if they're needed later, we'll ask for them through a suitable channel.",
    ],
  },
  s3: {
    title: '3. What do we use your data for, and on what legal basis?',
    headWhat: 'What for',
    headBasis: 'Legal basis',
    rows: [
      ['To handle your request, and call or write to you to reply.', 'Taking pre-contractual steps at your request (art. 6.1.b GDPR).'],
      ['To manage the appointment, if you choose to book one, and send you the confirmation.', 'Taking pre-contractual steps at your request (art. 6.1.b GDPR).'],
      ['To know which campaign or QR code led you to us, to measure which advertising works.', 'Our legitimate interest in measuring our campaigns (art. 6.1.f GDPR). You can object.'],
      ['To meet our legal obligations and defend ourselves against possible claims.', 'Legal obligation (art. 6.1.c GDPR) and legitimate interest (art. 6.1.f GDPR).'],
    ],
    after: "We won't send you advertising or newsletters unless you give us separate consent. We don't make automated decisions about you or build profiles.",
  },
  s4: {
    title: '4. How long do we keep your data?',
    items: [
      'While we handle your request.',
      "If you don't become a client, for at most <b>{retention}</b> after our last contact. If you become a client, for as long as the relationship lasts.",
      'After that, we block it: it is only kept to deal with possible legal liabilities for the periods set by law, and then deleted (art. 32 LOPDGDD).',
    ],
  },
  s5: {
    title: '5. Who can see your data?',
    paragraphs: [
      "Only the PCA team handling your request, including the specialist for the area you choose. We don't sell or share your data with third parties, except when a law requires it (for example, to courts or authorities).",
      'To operate, we use providers that process data on our behalf, under a contract that obliges them to protect it and use it only for what we ask (art. 28 GDPR):',
    ],
    headProvider: 'Provider',
    headWhat: 'What for',
    headWhere: 'Where',
  },
  s6: {
    title: '6. Does your data leave the European Union?',
    intro: 'Some of these providers are in the United States or may access the data from there. In those cases the transfer is protected by one of the safeguards provided for in the GDPR:',
    after: 'You can ask us for more information or a copy of these safeguards by writing to the email in section 1.',
  },
  s7: {
    title: '7. What are your rights?',
    items: [
      '<b>Access:</b> find out whether we process your data and receive a copy.',
      '<b>Correction:</b> fix data that is wrong or incomplete.',
      '<b>Deletion:</b> ask us to delete your data.',
      '<b>Objection:</b> ask us to stop using it, for example to measure campaigns.',
      '<b>Restriction:</b> ask us to keep it without using it for a while, for example while we check a correction.',
      '<b>Portability:</b> receive your data in a format you can take to another company.',
      '<b>Withdraw your consent</b>, if you ever give it to us for something, without affecting what was done before.',
    ],
    how: "<b>How to exercise them:</b> write to the email in section 1 with the subject \"Data protection\" and say which right you want to exercise. It's free. If we're unsure it's you, we may ask for something to confirm it. We'll reply within one month, which can be extended by two more months in complex cases (art. 12.3 GDPR); if we extend it, we'll let you know.",
    complainBefore: "<b>Complaints:</b> if you think we haven't handled your data properly, you can file a complaint with the",
  },
  s8: {
    title: '8. Minors',
    text: "Our services are aimed at adults. If you are under 14, don't send us your data: in that case your mother, father or guardian would need to do it (art. 7 LOPDGDD).",
  },
  s9: {
    title: '9. How do we protect your data?',
    text: 'We use an encrypted connection (HTTPS), only the team members who need it have access, with personal usernames and passwords, and we work with providers that offer security guarantees. If an incident ever put your data at risk, we would act as the law requires, including notifying the AEPD and, where appropriate, you.',
  },
  s10: {
    title: '10. Cookies and data in your browser',
    text: "This website doesn't use analytics or advertising cookies. It only saves two preferences in your browser, and only if you change them yourself, so they're remembered when you come back: the colour style (Gold or Dark) and the language (Spanish or English). You can delete them in your browser settings. The campaign code travels in the page address and isn't saved in your browser.",
  },
  s11: {
    title: "11. If you give us someone else's data",
    text: "If you enter another person's details (for example, a business partner or a relative), you must have their permission and tell them about this policy.",
  },
  s12: {
    title: '12. Changes to this policy',
    text: "If we change how we handle your data, we'll update this page and the date above. If the change is significant, we'll let you know.",
  },
};

export const privacy = { es, en };
