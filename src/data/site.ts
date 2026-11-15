/* Site-wide settings and navigation.
   Change the firm's name, emails or menu links here and every page picks it up. */

export const site = {
  name: 'Peydro Capital Alliance',
  short: 'PCA',
  description:
    'Peydro Capital Alliance partners with founders and operators across the lower-middle market — bringing conviction, structure and a long horizon to businesses at an inflection point.',
  email: 'hello@pca.example',
  irEmail: 'ir@pca.example',
};

export interface NavItem {
  href: string;
  label: string;
}

/** Links shown in the top bar on larger screens. */
export const mainNav: NavItem[] = [
  { href: '/quienes-somos', label: 'Quiénes somos' },
  { href: '/approach', label: 'Approach' },
  { href: '/crecimiento-compuesto', label: 'Crecimiento compuesto de redes' },
  { href: '/insights', label: 'Insights' },
];

/** Links shown in the phone / tablet menu (Home first). */
export const menuNav: NavItem[] = [{ href: '/', label: 'Home' }, ...mainNav];

/** Where every "Get in touch" / "Solicitar reunión" button points: the Giza form, the site's only form. */
export const contactHref = '/giza';
