/* Texts shared by every page: menu, buttons, footer, palette switch.
   Page texts live in src/i18n/pages/<page>.ts. The English object must have the same keys as the Spanish one. */

const es = {
  siteDescription:
    'Peydró Capital Alliance construye arquitecturas que conectan personas, empresas, activos, conocimiento y relaciones para crear nuevas posibilidades de valor.',
  homeTitle: 'Capital paciente',
  skip: 'Saltar al contenido',
  nav: {
    home: 'Inicio',
    about: 'Quiénes somos',
    approach: 'Enfoque',
    growth: 'Crecimiento compuesto de redes',
    insights: 'Perspectivas',
  },
  mainNavLabel: 'Principal',
  menuLabel: 'Menú',
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
  contact: 'Contactar',
  investorLogin: 'Acceso inversores',
  palette: 'Paleta',
  language: 'Idioma',
  theme: {
    gold: 'Dorado',
    dark: 'Oscuro',
    toDark: 'Cambiar a la paleta oscura',
    toGold: 'Cambiar a la paleta dorada',
  },
  keepScrolling: 'Sigue leyendo',
  footer: {
    tagline: 'Capital paciente para empresas hechas para durar. Versión de demostración: las cifras, personas y citas de esta web son de ejemplo.',
    firm: 'Firma',
    company: 'Compañía',
    contact: 'Contacto',
    home: 'Inicio',
    legal: 'Legal',
    terms: 'Términos',
    privacy: 'Privacidad',
    disclosures: 'Avisos legales',
    demo: 'Demo · contenido de ejemplo',
    toTop: 'Volver arriba ↑',
  },
};

const en: typeof es = {
  siteDescription:
    'Peydró Capital Alliance builds architectures that connect people, companies, assets, knowledge and relationships to create new possibilities for value.',
  homeTitle: 'Patient capital',
  skip: 'Skip to content',
  nav: {
    home: 'Home',
    about: 'About us',
    approach: 'Approach',
    growth: 'Compound network growth',
    insights: 'Insights',
  },
  mainNavLabel: 'Main',
  menuLabel: 'Menu',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  contact: 'Get in touch',
  investorLogin: 'Investor login',
  palette: 'Palette',
  language: 'Language',
  theme: {
    gold: 'Gold',
    dark: 'Dark',
    toDark: 'Switch to dark palette',
    toGold: 'Switch to gold palette',
  },
  keepScrolling: 'Keep scrolling',
  footer: {
    tagline: 'Patient capital for companies built to last. A demonstration build — the figures, people and quotes on this site are placeholders.',
    firm: 'Firm',
    company: 'Company',
    contact: 'Contact',
    home: 'Home',
    legal: 'Legal',
    terms: 'Terms',
    privacy: 'Privacy',
    disclosures: 'Disclosures',
    demo: 'Demo · placeholder content',
    toTop: 'Back to top ↑',
  },
};

export const ui = { es, en };
