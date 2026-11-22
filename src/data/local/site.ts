import type { Photo } from './types';

export const SITE = 'https://stillwaterokbailbonds.com';
export const PAGE_DATE = '2026-11-22';

/** Angel Bail Bonds itself. Town pages add areaServed. */
export const business = {
  '@type': 'LocalBusiness',
  telephone: '+1-405-614-3000',
  email: 'bailbondangel@gmail.com',
  image: `${SITE}/images/logo.webp`,
  priceRange: '$$',
  address: { '@type': 'PostalAddress', streetAddress: '800 E 6th Ave, Ste Z', addressLocality: 'Stillwater', addressRegion: 'OK', postalCode: '74075', addressCountry: 'US' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  paymentAccepted: ['Cash', 'Credit Card', 'Zelle', 'Venmo', 'Financing'],
  availableLanguage: ['English', 'Spanish'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '29' },
};

export const imageObject = (p: Photo) => ({
  '@type': 'ImageObject',
  contentUrl: p.src,
  caption: p.caption,
  creditText: p.author,
  creator: { '@type': 'Person', name: p.author },
  license: p.licenseUrl,
  acquireLicensePage: p.sourceUrl,
});
