// Unlisted role variants, mirroring the generic resumes in Ally's resume system.
// A variant owns only its headline, summary, second section, and which pool bullets appear in
// what order. Every fact comes from src/data/cv.js by id. Company-specific variants never go here.

export const ROLES = [
  {
    slug: 'product-leadership',
    label: 'VP of Product',
    headline: 'Content security, agentic investigation, and human-at-the-helm platforms',
    summary: [
      'Product leader for AI systems that find digital harms before the victims have to. At Deep Media I own strategy and roadmap across a composable tool layer, the skills composed from it, and the investigation agents on top.',
      'I came up through sales, so I build from the buyer’s problem backward and I ship with acceptance criteria rather than vibes. I write the specs, I build my own agent stack, and I prioritize the roadmap on what buyers will actually pay for.'
    ],
    secondTitle: 'Selected results',
    second: [
      'Defined the platform architecture: a composable API and MCP tool layer, skills composed from it, and investigation agents on top.',
      'Stood up collection across the surface, deep, and dark web, and shipped it as a paid licensed feed.',
      'Authored the PRD for Trust Stamp’s deepfake detection API and took it from R&D evaluation to enterprise packaging.',
      'Built or led teams that generated $60M+ in pipeline in prior sales roles, which is why the roadmap gets prioritized on what buyers will pay for.'
    ],
    experience: [
      ['deepmedia', ['tools', 'helm', 'agentic', 'collection', 'licensing', 'compliance'], { scope: true }],
      ['truststamp', ['prd', 'privacy', 'rings', 'team']],
      ['veriff-ae', ['cycles', 'roi']],
      ['veriff-sdr', ['open', 'scale']],
      ['rootconnection', ['built', 'research', 'ops']],
      ['ohsu', ['trials']]
    ]
  },
  {
    slug: 'sales-leadership',
    label: 'Enterprise sales leader',
    headline: 'Trust & Safety, identity, fraud, and AI content security',
    summary: [
      'Twelve years selling into regulated buyers: banks, platforms, government contractors, and the compliance and fraud teams inside them. My teams and I have opened three markets from zero.',
      'I sell as the technical closer. I write the PRDs, so I can talk a security architect through presentation-attack detection or walk a Chief Risk Officer through what the DSA actually requires of them.'
    ],
    secondTitle: 'Selected results',
    second: [
      'Beat quota by 25% or more for 5 consecutive quarters at Veriff on a $4M+ enterprise pipeline.',
      'Built Veriff’s U.S. sales development team from 1 to 12. The team produced $50M+ in pipeline in its first year.',
      'Built a $10M+ pipeline from a flat territory as Trust Stamp’s first North American GTM hire, and hired and managed 7 U.S. reps.',
      'Closed 50+ client contracts over 6 years through direct and consultative selling, growing my own company to $1M in annual revenue.',
      'Regular speaker to the buyers themselves: IAFCI, NABCRMP, TrustCon, ICBA, TIAA Fraud Summit, Google Trust & Safety Summit.'
    ],
    experience: [
      ['deepmedia', ['collection', 'licensing', 'compliance', 'oneperson']],
      ['truststamp', ['gtm', 'team', 'rfi', 'prd']],
      ['veriff-ae', ['quota', 'roi', 'cycles', 'promo']],
      ['veriff-sdr', ['open', 'scale', 'cadences']],
      ['sheerid', ['committees']],
      ['rootconnection', ['built', 'signed', 'marketing']],
      ['onegreenworld', ['book']]
    ]
  },
  {
    slug: 'enterprise-sales',
    label: 'Enterprise Account Executive',
    headline: 'Trust & Safety, identity, fraud, and AI content security',
    summary: [
      'I hunt and close enterprise deals with regulated buyers: banks, platforms, government contractors, and the fraud, risk, and trust and safety teams inside them.',
      'I close as the technical seller. I have written the PRDs, so I can take a CISO through presentation-attack detection or a Chief Risk Officer through what the DSA actually requires of them.'
    ],
    secondTitle: 'Selected results',
    second: [
      '125% or more of quota for 5 consecutive quarters at Veriff on a $4M+ enterprise pipeline.',
      'Built a $10M+ pipeline from nothing as Trust Stamp’s first North American GTM hire, mapping buying committees across banks, social platforms, dating apps, and marketplaces.',
      'Sourced and closed a recurring data licensing agreement at Deep Media.',
      'Ran 6-month enterprise cycles end to end: ROI models for finance, redlines with legal teams, infosec reviews with CISOs, federal RFI responses.',
      'Personally sold 50+ client contracts over 6 years for my own company, which I grew to $1M in annual revenue.'
    ],
    experience: [
      ['deepmedia', ['licensing', 'compliance', 'gov']],
      ['truststamp', ['gtm', 'team', 'rfi']],
      ['veriff-ae', ['quota', 'roi', 'cycles', 'promo']],
      ['veriff-sdr', ['open', 'scale', 'cadences']],
      ['sheerid', ['committees']],
      ['rootconnection', ['built', 'signed', 'marketing']],
      ['onegreenworld', ['book']]
    ]
  },
  {
    slug: 'founder',
    label: 'Trust & Safety founder',
    headline: 'Zero-to-one product, revenue, and market builder',
    summary: [
      'I have opened markets from zero four times: my own company, Veriff’s U.S. sales development team, Trust Stamp’s North American GTM, and Deep Media’s first licensed data feed.',
      'My domain is content security and trust and safety: synthetic media, fraud networks, identity, and the regulation now shaping all of it. I write the PRDs, build the agent stack, and carry the number.'
    ],
    secondTitle: 'Founder track record',
    second: [
      'Root Connection: founded and grew a research and design firm from $0 to $1M in annual revenue in 2 years, ran it profitably for 6, and personally signed 50+ client contracts.',
      'Deep Media: as sole product and go-to-market lead in year one, shipped a new collection feed, closed the first recurring licensing agreement, and built the pricing architecture the commercial team runs on.',
      'Veriff: first U.S. hire. Built the sales development function from 1 to 12 people and $50M+ in first-year pipeline.',
      'Trust Stamp: first North American GTM hire. Built a $10M+ pipeline from nothing while writing the PRD for a new product line.',
      'Safety by Design Trust & Safety Hackathon winner with team FaceLock (2024). Regular speaker across IAFCI, TrustCon, NABCRMP, and Google’s Trust & Safety Summit.'
    ],
    experience: [
      ['deepmedia', ['oneperson', 'collection', 'licensing', 'tools']],
      ['truststamp', ['gtm', 'prd', 'team']],
      ['veriff-ae', ['quota', 'promo']],
      ['veriff-sdr', ['open', 'scale']],
      ['rootconnection', ['built', 'signed', 'ops', 'marketing']],
      ['onegreenworld', ['book']],
      ['ohsu', ['trials']]
    ]
  }
];
