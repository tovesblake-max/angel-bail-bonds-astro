import type { County, CountyKey } from './types';

// Jail details match the existing jail pages, which were checked against the sheriffs' own sites in Nov 2026.
export const counties: Record<CountyKey, County> = {
  payne: {
    key: 'payne',
    name: 'Payne',
    seat: 'Stillwater',
    jail: { name: 'Payne County Jail', street: '606 S Husband St', city: 'Stillwater', zip: '74074', phone: '(405) 372-4522', page: '/payne-county-jail-bail-bonds' },
    countyPage: '/payne-county-jail-bail-bonds',
    inmateSearchPage: '/payne-county-inmate-search',
    courtPage: '/payne-county-courthouse',
  },
  pawnee: {
    key: 'pawnee',
    name: 'Pawnee',
    seat: 'Pawnee',
    jail: { name: 'Pawnee County Jail', street: '500 Harrison St', city: 'Pawnee', zip: '74058', phone: '(918) 762-2565', page: '/pawnee-county-jail-bail-bonds' },
    countyPage: '/pawnee-county-bail-bonds',
    inmateSearchPage: '/pawnee-county-inmate-search',
    courtPage: '/pawnee-county-courthouse',
  },
  lincoln: {
    key: 'lincoln',
    name: 'Lincoln',
    seat: 'Chandler',
    jail: { name: 'Lincoln County Jail', street: '811 Manvel Ave #14', city: 'Chandler', zip: '74834', phone: '(405) 258-1191', page: '/lincoln-county-jail-chandler-bail-bonds' },
    countyPage: '/lincoln-county-bail-bonds',
    inmateSearchPage: '/lincoln-county-inmate-search',
    courtPage: '/lincoln-county-courthouse',
  },
  kay: {
    key: 'kay',
    name: 'Kay',
    seat: 'Newkirk',
    jail: { name: 'Kay County Detention Center', street: '1101 W Dry Rd', city: 'Newkirk', zip: '74647', phone: '(580) 362-3393', page: '/kay-county-detention-center-bail-bonds' },
    countyPage: '/kay-county-bail-bonds',
    inmateSearchPage: '/kay-county-inmate-search',
    courtPage: '/kay-county-courthouse',
  },
  noble: {
    key: 'noble',
    name: 'Noble',
    seat: 'Perry',
    jail: { name: 'Noble County Jail', street: '721 Cedar St', city: 'Perry', zip: '73077', phone: '(580) 336-3517', page: '/noble-county-jail-perry-bail-bonds' },
    countyPage: '/noble-county-bail-bonds',
    inmateSearchPage: '/noble-county-inmate-search',
    courtPage: '/noble-county-courthouse',
  },
  logan: {
    key: 'logan',
    name: 'Logan',
    seat: 'Guthrie',
    jail: { name: 'Logan County Detention Center', street: '216 S Broad St', city: 'Guthrie', zip: '73044', phone: '(405) 282-4100', page: '/logan-county-bail-bonds' },
    countyPage: '/logan-county-bail-bonds',
    courtPage: '/logan-county-courthouse',
  },
};

export const telHref = (phone: string) => '+1' + phone.replace(/\D/g, '');
export const mapHref = (q: string) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
