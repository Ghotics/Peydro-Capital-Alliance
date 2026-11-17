/* Texts shared by every page: menu, buttons, footer, palette switch.
   Page texts live in src/i18n/pages/<page>.ts. The English object must have the same keys as the Spanish one. */

const es = {
  siteDescription:
    'Peydró Capital Alliance construye arquitecturas que conectan personas, empresas, activos, conocimiento y relaciones para crear nuevas posibilidades de valor.',
  homeTitle: 'Conectamos capitales',
  skip: 'Saltar al contenido',
  nav: {
    home: 'Inicio',
    about: 'Quiénes somos',
    growth: 'Crecimiento compuesto de redes',
  },
  mainNavLabel: 'Principal',
  menuLabel: 'Menú',
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
  contact: 'Contactar',
  investorLogin: 'Acceso inversores',
  palette: 'Modo',
  language: 'Idioma',
  theme: {
    gold: 'Claro',
    dark: 'Oscuro',
    toDark: 'Cambiar a modo oscuro',
    toGold: 'Cambiar a modo claro',
  },
  keepScrolling: 'Sigue leyendo',
  footer: {
    tagline: 'Arquitecturas que conectan personas, empresas, activos, conocimiento y relaciones para crear nuevas posibilidades de valor.',
    firm: 'Firma',
    company: 'Compañía',
    contact: 'Contacto',
    home: 'Inicio',
    legal: 'Legal',
    legalNotice: 'Aviso legal',
    terms: 'Términos de uso',
    privacy: 'Privacidad',
    disclosures: 'Información regulatoria',
    toTop: 'Volver arriba ↑',
  },
};

const en: typeof es = {
  siteDescription:
    'Peydró Capital Alliance builds architectures that connect people, companies, assets, knowledge and relationships to create new possibilities for value.',
  homeTitle: 'We connect capital',
  skip: 'Skip to content',
  nav: {
    home: 'Home',
    about: 'About us',
    growth: 'Compound network growth',
  },
  mainNavLabel: 'Main',
  menuLabel: 'Menu',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  contact: 'Get in touch',
  investorLogin: 'Investor login',
  palette: 'Mode',
  language: 'Language',
  theme: {
    gold: 'Light',
    dark: 'Dark',
    toDark: 'Switch to dark mode',
    toGold: 'Switch to light mode',
  },
  keepScrolling: 'Keep scrolling',
  footer: {
    tagline: 'Architectures that connect people, companies, assets, knowledge and relationships to create new possibilities for value.',
    firm: 'Firm',
    company: 'Company',
    contact: 'Contact',
    home: 'Home',
    legal: 'Legal',
    legalNotice: 'Legal notice',
    terms: 'Terms of use',
    privacy: 'Privacy',
    disclosures: 'Disclosures',
    toTop: 'Back to top ↑',
  },
};

export const ui = { es, en };
