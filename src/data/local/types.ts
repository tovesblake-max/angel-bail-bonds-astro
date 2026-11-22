export type CountyKey = 'payne' | 'pawnee' | 'lincoln' | 'kay' | 'noble' | 'logan';

export interface Source {
  label: string;
  url: string;
}

/** A photo we are allowed to reuse (Wikimedia Commons, compatible license), credited on the page. */
export interface Photo {
  /** Full image URL (a Wikimedia Commons thumbnail, hotlinked and credited). */
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  author: string;
  license: string;
  licenseUrl: string;
  /** Commons file page. */
  sourceUrl: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface County {
  key: CountyKey;
  name: string;
  seat: string;
  jail: {
    name: string;
    street: string;
    city: string;
    zip: string;
    phone: string;
    /** Our page about this jail. */
    page: string;
  };
  countyPage: string;
  inmateSearchPage?: string;
  courtPage: string;
}

export interface Town {
  slug: string;
  name: string;
  county: CountyKey;
  population: number | null;
  lat: number;
  lng: number;
  highways: string;
  milesToJail: number | null;
  milesToStillwater: number | null;
  police: { name: string; street?: string; zip?: string; phone?: string; source?: string } | null;
  municipalCourt?: { street?: string; phone?: string; source?: string } | null;
  metaDescription: string;
  /** Short hero line. */
  tagline: string;
  /** Self-contained answer to "what happens when someone is arrested in X" (aim ~140-170 words). */
  answer: string;
  /** Local context paragraphs, unique to the town. */
  local: string[];
  faqs: Faq[];
  nearby: string[];
  photo: Photo | null;
  sources: Source[];
}

export interface Court {
  slug: string;
  name: string;
  shortName: string;
  county: CountyKey | null;
  kind: 'district' | 'municipal';
  street: string;
  city: string;
  zip: string;
  phone: string;
  phoneLabel: string;
  otherPhones?: { label: string; phone: string }[];
  hours: string | null;
  district: string | null;
  lat: number | null;
  lng: number | null;
  metaDescription: string;
  tagline: string;
  answer: string;
  body: string[];
  history: string | null;
  faqs: Faq[];
  photo: Photo | null;
  sources: Source[];
}
