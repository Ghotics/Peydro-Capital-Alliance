/* Texts of the legal notice, terms of use and disclosures pages (layout: src/components/pages/LegalPage.astro).
   Routes: /aviso-legal, /terminos, /informacion-regulatoria (es) and /en/legal-notice, /en/terms, /en/disclosures (en).
   These are BASE texts, written to be common for a Spanish advisory firm: have a lawyer review and adapt them before relying on them.
   The Spanish version is the reference text.

   Words in {curly brackets} are filled in by the page:
     {company} {taxId} {address} {email} {registry}  -> company details in src/data/legal.ts (controller)
     {insurance} {investment}                         -> regulatory status in src/data/legal.ts (regulatory)
     {privacy} {legalNotice} {terms} {disclosures}    -> links to the other legal pages
   While a company detail is still a [placeholder], the page shows it highlighted.
   Texts may contain <b> tags. */

export interface LegalSection {
  title: string;
  paras?: string[];
  items?: string[];
  /** Paragraphs shown after the list. */
  after?: string[];
}

export interface LegalDoc {
  title: string;
  description: string;
  heading: string;
  lead: string;
  sections: LegalSection[];
}

export type LegalDocKey = 'legalNotice' | 'terms' | 'disclosures';

const es: Record<LegalDocKey, LegalDoc> & { updated: string; translationNote: string; linkNames: Record<'privacy' | LegalDocKey, string> } = {
  updated: 'Última actualización:',
  translationNote: '',
  linkNames: {
    privacy: 'Política de privacidad',
    legalNotice: 'Aviso legal',
    terms: 'Términos de uso',
    disclosures: 'Información regulatoria',
  },

  legalNotice: {
    title: 'Aviso legal',
    description: 'Quién está detrás de esta web y en qué condiciones puedes usarla.',
    heading: 'Aviso <span class="serif-em">legal</span>',
    lead: 'Quién está detrás de esta web y en qué condiciones puedes usarla.',
    sections: [
      {
        title: '1. Datos del titular',
        paras: [
          'En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), estos son los datos del titular de esta web:',
        ],
        items: [
          '<b>Titular:</b> {company}',
          '<b>NIF:</b> {taxId}',
          '<b>Domicilio social:</b> {address}',
          '<b>Correo electrónico:</b> {email}',
          '<b>Datos registrales:</b> {registry}',
        ],
        after: ['En este aviso lo llamamos «PCA» o «nosotros», y a ti, «usuario».'],
      },
      {
        title: '2. Para qué sirve esta web',
        paras: [
          'Esta web informa sobre PCA y sus servicios (Giza, PCA Business Office y sus departamentos) y te permite pedirnos que te contactemos o reservar una primera reunión.',
          'Usar la web es gratuito y no te obliga a contratar nada. Al usarla aceptas este aviso legal y los {terms}.',
        ],
      },
      {
        title: '3. Uso correcto de la web',
        paras: ['Te comprometes a usar la web de forma lícita y de buena fe. En particular, no puedes:'],
        items: [
          'Usarla para fines ilegales o que perjudiquen a PCA o a otras personas.',
          'Intentar acceder a zonas restringidas, dañar, sobrecargar o interferir en su funcionamiento.',
          'Introducir virus o cualquier programa o código dañino.',
          'Enviar formularios con datos falsos o de otra persona sin su permiso.',
        ],
      },
      {
        title: '4. Propiedad intelectual e industrial',
        paras: [
          'Los textos, diseños, imágenes, logotipos, marcas y el código de esta web son de PCA o de terceros que nos han dado permiso para usarlos. Puedes verlos e imprimirlos para tu uso personal, pero no copiarlos, distribuirlos, modificarlos ni usarlos con fines comerciales sin nuestra autorización por escrito.',
        ],
      },
      {
        title: '5. Responsabilidad',
        paras: [
          'Cuidamos que la información de la web sea correcta y esté al día, pero es <b>información general</b>: no es asesoramiento personalizado y no sustituye a una reunión con nuestro equipo. Más detalles en la {disclosures}.',
          'No podemos garantizar que la web funcione siempre sin interrupciones ni errores. No respondemos de los daños que puedan derivarse de fallos técnicos ajenos a nosotros o de un uso de la web contrario a este aviso.',
        ],
      },
      {
        title: '6. Enlaces a otras webs',
        paras: [
          'La web incluye enlaces a servicios de terceros, como el calendario de reservas (Cal.com) o WhatsApp. No controlamos esas webs ni respondemos de su contenido; cada una tiene sus propias condiciones y política de privacidad.',
        ],
      },
      {
        title: '7. Protección de datos y cookies',
        paras: [
          'Cómo tratamos los datos que nos envías por los formularios, y qué guarda la web en tu navegador, se explica en la {privacy}. Esta web no usa cookies de análisis ni de publicidad.',
        ],
      },
      {
        title: '8. Ley aplicable y tribunales',
        paras: [
          'Este aviso se rige por la ley española. Si surge un conflicto, se resolverá ante los juzgados y tribunales que correspondan según la ley; si eres consumidor, ante los de tu domicilio.',
        ],
      },
    ],
  },

  terms: {
    title: 'Términos de uso',
    description: 'Las reglas para usar esta web, enviar solicitudes y reservar reuniones.',
    heading: 'Términos de <span class="serif-em">uso</span>',
    lead: 'Las reglas para usar esta web, enviar solicitudes y reservar reuniones. Explicado de forma sencilla.',
    sections: [
      {
        title: '1. Quiénes somos y cuándo se aplican',
        paras: [
          'Esta web es de {company} («PCA»). Estos términos se aplican cada vez que la usas, completan el {legalNotice} y la {privacy}, y los aceptas al usar la web o enviar un formulario.',
        ],
      },
      {
        title: '2. Qué puedes hacer en la web',
        items: [
          'Informarte sobre PCA y sus servicios.',
          'Pedir que te contactemos, con los formularios de Giza, PCA Business Office, contacto rápido y consulta general.',
          'Reservar una primera reunión con el especialista del área que te interesa.',
        ],
        after: [
          '<b>Enviar un formulario o reservar una reunión no es contratar.</b> No crea ninguna obligación para ti ni para PCA. Si después decides contratar un servicio, se regirá por su propio contrato o propuesta, que recibirás antes de aceptarlo.',
        ],
      },
      {
        title: '3. Tus solicitudes',
        items: [
          'Los datos que nos des deben ser verdaderos y tuyos, o de alguien que te haya dado permiso.',
          'Respondemos a las solicitudes lo antes posible, normalmente en días laborables, pero no podemos garantizar un plazo concreto.',
          'Podemos no atender solicitudes que parezcan automáticas, abusivas o fuera de lo que ofrecemos.',
        ],
      },
      {
        title: '4. Reservas de reuniones',
        paras: [
          'Las reuniones se reservan en el calendario de Cal.com, un servicio de un tercero con sus propias condiciones. Recibirás un correo de confirmación con enlaces para cambiar la hora o cancelar; si no puedes asistir, te pedimos que lo hagas con antelación. La primera reunión es gratuita y sin compromiso.',
        ],
      },
      {
        title: '5. El contenido es informativo',
        paras: [
          'Los textos, ejemplos, simulaciones y cifras de la web son orientativos y generales. <b>No son asesoramiento financiero, fiscal ni legal, ni una recomendación personalizada.</b> Antes de tomar una decisión, habla con un profesional que conozca tu situación. Más información en la {disclosures}.',
        ],
      },
      {
        title: '6. Uso permitido',
        paras: [
          'Puedes usar la web para tu uso personal o el de tu empresa. No puedes copiar su contenido para otros fines, usar programas automáticos para extraer datos o enviar formularios, ni intentar saltarte sus medidas de seguridad (como la comprobación antispam).',
        ],
      },
      {
        title: '7. Disponibilidad y cambios',
        paras: [
          'Podemos cambiar, ampliar o retirar contenidos y servicios de la web, o interrumpirla por mantenimiento, sin aviso previo.',
        ],
      },
      {
        title: '8. Responsabilidad',
        paras: [
          'PCA no responde de las decisiones que tomes basándote solo en el contenido general de la web, ni de fallos de servicios de terceros (como el calendario de reservas). Nada de lo anterior limita los derechos que te da la ley como consumidor.',
        ],
      },
      {
        title: '9. Cambios en estos términos',
        paras: [
          'Podemos actualizar estos términos. La versión vigente es siempre la publicada en esta página, con su fecha de actualización arriba.',
        ],
      },
      {
        title: '10. Ley aplicable y contacto',
        paras: [
          'Estos términos se rigen por la ley española. Para cualquier duda, escríbenos a {email}.',
        ],
      },
    ],
  },

  disclosures: {
    title: 'Información regulatoria',
    description: 'Avisos importantes sobre la información financiera de esta web, los riesgos y cómo trabajamos.',
    heading: 'Información <span class="serif-em">regulatoria</span>',
    lead: 'Avisos importantes sobre la información financiera de esta web, los riesgos y cómo trabajamos.',
    sections: [
      {
        title: '1. Información general, no asesoramiento',
        paras: [
          'Todo el contenido de esta web es <b>información general y de marketing</b>. No tiene en cuenta tu situación, tus objetivos ni tu perfil de riesgo, y no es asesoramiento financiero, de inversión, fiscal ni legal, ni una recomendación personalizada.',
          'Nada en esta web es una oferta ni una invitación a comprar o vender productos financieros o de seguros. Cualquier servicio se contratará, en su caso, después de analizar tu situación y con la documentación que exija la ley.',
        ],
      },
      {
        title: '2. Riesgos de invertir',
        items: [
          '<b>Puedes perder dinero.</b> El valor de una inversión puede bajar además de subir, y podrías recuperar menos de lo que invertiste.',
          '<b>Las rentabilidades pasadas no garantizan las futuras.</b>',
          '<b>Las simulaciones son hipotéticas.</b> Los ejemplos de crecimiento compuesto de esta web usan rentabilidades supuestas y constantes para explicar una idea; no son una previsión ni una promesa, y no incluyen comisiones, impuestos ni inflación salvo que se diga.',
          'Algunos productos pueden ser difíciles de vender rápidamente (riesgo de liquidez) o depender de otras monedas (riesgo de cambio).',
          'La fiscalidad depende de tu situación personal y puede cambiar.',
        ],
      },
      {
        title: '3. Seguros y planificación financiera',
        paras: [
          'Los seguros y productos de ahorro los emiten entidades aseguradoras y financieras autorizadas. Situación de PCA en la mediación de seguros: {insurance}',
        ],
      },
      {
        title: '4. Servicios de inversión',
        paras: ['Situación de PCA respecto a los servicios de inversión: {investment}'],
      },
      {
        title: '5. Cómo cobramos y conflictos de interés',
        paras: [
          'Según el servicio, PCA puede cobrar honorarios a sus clientes o recibir comisiones de las entidades o colaboradores con los que trabaja. Antes de que contrates nada, te diremos de forma clara cómo y cuánto cobramos, y si existe algún conflicto de interés y cómo lo gestionamos.',
        ],
      },
      {
        title: '6. Otros servicios de PCA Business Office',
        paras: [
          'Los servicios de tecnología, telecomunicaciones y energía, y marketing son servicios profesionales y comerciales. Los ahorros o resultados que se mencionen son estimaciones orientativas y dependen de cada caso; en algunos casos los prestan colaboradores, y te informaremos de ello antes de contratar.',
        ],
      },
      {
        title: '7. Quejas y reclamaciones',
        paras: [
          'Si no estás satisfecho, escríbenos a {email} y te responderemos lo antes posible. Cuando la ley lo prevea, también puedes acudir al servicio de reclamaciones del supervisor que corresponda: el Banco de España, la Comisión Nacional del Mercado de Valores (CNMV) o la Dirección General de Seguros y Fondos de Pensiones (DGSFP).',
        ],
      },
    ],
  },
};

const en: typeof es = {
  updated: 'Last updated:',
  translationNote: 'This is a translation for convenience. If there is any difference, the Spanish version applies.',
  linkNames: {
    privacy: 'Privacy policy',
    legalNotice: 'Legal notice',
    terms: 'Terms of use',
    disclosures: 'Disclosures',
  },

  legalNotice: {
    title: 'Legal notice',
    description: 'Who is behind this website and the conditions for using it.',
    heading: 'Legal <span class="serif-em">notice</span>',
    lead: 'Who is behind this website and the conditions for using it.',
    sections: [
      {
        title: '1. Owner details',
        paras: [
          'As required by article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), these are the details of the owner of this website:',
        ],
        items: [
          '<b>Owner:</b> {company}',
          '<b>Tax ID (NIF):</b> {taxId}',
          '<b>Registered office:</b> {address}',
          '<b>Email:</b> {email}',
          '<b>Registry details:</b> {registry}',
        ],
        after: ['In this notice we call it "PCA" or "we", and you "the user".'],
      },
      {
        title: '2. What this website is for',
        paras: [
          'This website gives information about PCA and its services (Giza, PCA Business Office and its departments) and lets you ask us to contact you or book a first meeting.',
          "Using the website is free and doesn't commit you to buying anything. By using it you accept this legal notice and the {terms}.",
        ],
      },
      {
        title: '3. Using the website properly',
        paras: ['You agree to use the website lawfully and in good faith. In particular, you may not:'],
        items: [
          'Use it for illegal purposes or to harm PCA or other people.',
          'Try to access restricted areas, or damage, overload or interfere with how it works.',
          'Introduce viruses or any harmful program or code.',
          "Send forms with false details, or someone else's details without their permission.",
        ],
      },
      {
        title: '4. Intellectual and industrial property',
        paras: [
          'The texts, designs, images, logos, trademarks and code of this website belong to PCA or to third parties who have allowed us to use them. You may view and print them for your personal use, but not copy, distribute, modify or use them commercially without our written permission.',
        ],
      },
      {
        title: '5. Liability',
        paras: [
          "We take care that the information on the website is correct and up to date, but it is <b>general information</b>: it isn't personal advice and doesn't replace a meeting with our team. More in the {disclosures}.",
          "We can't guarantee that the website will always work without interruptions or errors. We aren't liable for damage caused by technical failures outside our control or by using the website against this notice.",
        ],
      },
      {
        title: '6. Links to other websites',
        paras: [
          "The website links to third-party services, such as the booking calendar (Cal.com) or WhatsApp. We don't control those websites and aren't responsible for their content; each has its own terms and privacy policy.",
        ],
      },
      {
        title: '7. Data protection and cookies',
        paras: [
          "How we handle the details you send through the forms, and what the website saves in your browser, is explained in the {privacy}. This website doesn't use analytics or advertising cookies.",
        ],
      },
      {
        title: '8. Governing law and courts',
        paras: [
          'This notice is governed by Spanish law. Any dispute will be settled by the courts that have jurisdiction under the law; if you are a consumer, by the courts where you live.',
        ],
      },
    ],
  },

  terms: {
    title: 'Terms of use',
    description: 'The rules for using this website, sending requests and booking meetings.',
    heading: 'Terms of <span class="serif-em">use</span>',
    lead: 'The rules for using this website, sending requests and booking meetings. Explained simply.',
    sections: [
      {
        title: '1. Who we are and when these terms apply',
        paras: [
          'This website belongs to {company} ("PCA"). These terms apply every time you use it, complement the {legalNotice} and the {privacy}, and you accept them by using the website or sending a form.',
        ],
      },
      {
        title: '2. What you can do on the website',
        items: [
          'Learn about PCA and its services.',
          'Ask us to contact you, using the Giza, PCA Business Office, quick contact and general enquiry forms.',
          'Book a first meeting with the specialist for the area you are interested in.',
        ],
        after: [
          "<b>Sending a form or booking a meeting is not a contract.</b> It creates no obligation for you or for PCA. If you later decide to use a service, it will be governed by its own contract or proposal, which you'll receive before accepting it.",
        ],
      },
      {
        title: '3. Your requests',
        items: [
          'The details you give us must be true and your own, or those of someone who has given you permission.',
          "We answer requests as soon as we can, usually on working days, but we can't guarantee a specific time.",
          'We may decline requests that look automated, abusive or outside what we offer.',
        ],
      },
      {
        title: '4. Booking meetings',
        paras: [
          "Meetings are booked in the Cal.com calendar, a third-party service with its own terms. You'll get a confirmation email with links to change the time or cancel; if you can't attend, please do so in advance. The first meeting is free and with no obligation.",
        ],
      },
      {
        title: '5. The content is for information only',
        paras: [
          "The texts, examples, simulations and figures on the website are general and for guidance only. <b>They are not financial, tax or legal advice, nor a personal recommendation.</b> Before making a decision, talk to a professional who knows your situation. More in the {disclosures}.",
        ],
      },
      {
        title: '6. Permitted use',
        paras: [
          "You may use the website for your own or your company's purposes. You may not copy its content for other purposes, use automated programs to extract data or send forms, or try to get around its security measures (such as the anti-spam check).",
        ],
      },
      {
        title: '7. Availability and changes',
        paras: [
          'We may change, add to or remove content and services on the website, or interrupt it for maintenance, without prior notice.',
        ],
      },
      {
        title: '8. Liability',
        paras: [
          "PCA isn't liable for decisions you make based only on the general content of the website, or for failures of third-party services (such as the booking calendar). Nothing here limits your legal rights as a consumer.",
        ],
      },
      {
        title: '9. Changes to these terms',
        paras: [
          'We may update these terms. The version in force is always the one published on this page, with its update date at the top.',
        ],
      },
      {
        title: '10. Governing law and contact',
        paras: ['These terms are governed by Spanish law. For any question, write to us at {email}.'],
      },
    ],
  },

  disclosures: {
    title: 'Disclosures',
    description: 'Important notices about the financial information on this website, the risks and how we work.',
    heading: 'Important <span class="serif-em">disclosures</span>',
    lead: 'Important notices about the financial information on this website, the risks and how we work.',
    sections: [
      {
        title: '1. General information, not advice',
        paras: [
          "All content on this website is <b>general and marketing information</b>. It doesn't take into account your situation, goals or risk profile, and it isn't financial, investment, tax or legal advice, nor a personal recommendation.",
          'Nothing on this website is an offer or an invitation to buy or sell financial or insurance products. Any service will only be arranged after looking at your situation, and with the documents the law requires.',
        ],
      },
      {
        title: '2. Investment risks',
        items: [
          '<b>You can lose money.</b> The value of an investment can go down as well as up, and you could get back less than you put in.',
          '<b>Past performance is not a guide to future returns.</b>',
          "<b>Simulations are hypothetical.</b> The compound growth examples on this website use assumed, constant returns to explain an idea; they aren't a forecast or a promise, and don't include fees, taxes or inflation unless stated.",
          'Some products can be hard to sell quickly (liquidity risk) or depend on other currencies (currency risk).',
          'Tax treatment depends on your personal situation and can change.',
        ],
      },
      {
        title: '3. Insurance and financial planning',
        paras: [
          "Insurance and savings products are issued by authorised insurers and financial institutions. PCA's position in insurance intermediation: {insurance}",
        ],
      },
      {
        title: '4. Investment services',
        paras: ["PCA's position regarding investment services: {investment}"],
      },
      {
        title: '5. How we are paid and conflicts of interest',
        paras: [
          "Depending on the service, PCA may charge its clients fees or receive commissions from the institutions or partners it works with. Before you sign up for anything, we'll tell you clearly how and how much we are paid, and whether there is any conflict of interest and how we handle it.",
        ],
      },
      {
        title: '6. Other PCA Business Office services',
        paras: [
          "The technology, telecommunications and energy, and marketing services are professional and commercial services. Any savings or results mentioned are estimates for guidance and depend on each case; some are provided by partners, and we'll tell you before you sign up.",
        ],
      },
      {
        title: '7. Complaints',
        paras: [
          "If you aren't satisfied, write to us at {email} and we'll reply as soon as we can. Where the law provides for it, you can also go to the complaints service of the relevant supervisor: the Bank of Spain, the National Securities Market Commission (CNMV) or the Directorate-General for Insurance and Pension Funds (DGSFP).",
        ],
      },
    ],
  },
};

export const legal = { es, en };
