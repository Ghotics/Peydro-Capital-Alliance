/* Site-wide settings. Change the firm's name or emails here and every page picks it up.
   Menu links and their labels are in src/i18n/routes.ts and src/i18n/ui.ts. */

export const site = {
  name: 'Peydro Capital Alliance',
  short: 'PCA',
  email: 'hello@pca.example',
  irEmail: 'ir@pca.example',
};

export interface NavItem {
  href: string;
  label: string;
}

/** Where every "Contactar" / "Get in touch" / "Solicitar reunión" button points:
    the Giza form, the site's only form (Spanish only for now). */
export const contactHref = '/giza';
