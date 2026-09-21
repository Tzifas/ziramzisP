export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ziramzis-p.vercel.app').replace(/\/$/, '');

export const site = {
  name: 'Ziramzis',
  tagline: 'Busy Bee Studio',
  email: 'ziramzisfeis@gmail.com',
  phone: '+254 711 410 442',
  whatsapp: '254711410442',
  location: 'Mombasa, Kenya',
};

export const absoluteUrl = (path = '/') => `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
