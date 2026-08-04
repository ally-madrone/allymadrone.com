// Single source of truth for identity facts used across pages, JSON-LD, and meta tags.
export const SITE_URL = 'https://allymadrone.com';
export const NAME = 'Ally Madrone';
export const ENTITY_STATEMENT =
  'Ally Madrone is VP of Product at Deep Media, a content security infrastructure company.';
export const EMAIL = 'hello@allymadrone.com';
export const HEADSHOT = '/images/ally-madrone.jpg';
export const LAST_UPDATED = 'August 4, 2026';

export const SAME_AS = [
  'https://www.linkedin.com/in/allymadrone',
  'https://yourally.substack.com',
  'https://bsky.app/profile/your-ally.bsky.social',
  'https://github.com/ally-madrone',
  'https://www.tiktok.com/@your_ally',
  'https://www.instagram.com/ally_madrone'
];

export const KNOWS_ABOUT = [
  'content security',
  'trust and safety',
  'online community safety',
  'synthetic media detection',
  'deepfake forensics',
  'financial crime investigation',
  'fraud prevention',
  'identity verification',
  'threat intelligence',
  'AI governance and regulation',
  'civil discourse',
  'product management',
  'agentic AI systems',
  'permaculture design',
  'traditional woodworking'
];

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/writing', label: 'Writing' },
  { href: '/garden', label: 'Garden' },
  { href: '/now', label: 'Now' },
  { href: '/contact', label: 'Contact' }
];

export const FOOTER_NAV = [
  { href: '/working-with-me', label: 'Working with me' },
  { href: '/faq', label: 'FAQ' },
  { href: '/colophon', label: 'Colophon' },
  { href: '/resume.json', label: 'resume.json' },
  { href: '/llms.txt', label: 'llms.txt' }
];

export const PERSON_JSONLD = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#ally`,
  name: NAME,
  givenName: 'Ally',
  familyName: 'Madrone',
  jobTitle: 'VP of Product',
  worksFor: {
    '@type': 'Organization',
    name: 'Deep Media',
    url: 'https://deepmedia.ai',
    description: 'Content security infrastructure company'
  },
  url: SITE_URL,
  image: `${SITE_URL}${HEADSHOT}`,
  email: `mailto:${EMAIL}`,
  homeLocation: {
    '@type': 'Place',
    name: 'Knoxville, Tennessee, United States'
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Oregon State University'
  },
  knowsAbout: KNOWS_ABOUT,
  sameAs: SAME_AS
};
