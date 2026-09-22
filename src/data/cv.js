// The CV bullet pool. Mirrors Ally's resume system (Desktop/2026.09 Resumes): every shared fact
// (employer, title, dates, metrics, affiliations, education, endorsements) lives here once.
// /experience shows the whole pool; /resume.json is generated from it; the unlisted /roles/*
// variants select and order bullets by id. Never rewrite a bullet inside a variant.
// Public-safe only: bullets carrying [ADD:] or [VERIFY:] placeholders stay off the site until resolved.

export const CV_SUMMARY = [
  'Product leader for AI systems that find digital harms before the victims have to. I have spent my career at the intersection of identity, fraud, and trust and safety: in product, in enterprise sales, and as a founder, usually more than one at a time.',
  'The method is the same every time. Find the work that repeats, redesign it around composable tools and agents, move the human from processing volume to making the calls that need judgment, and prove the result survives an audit.'
];

export const WORK = [
  {
    id: 'deepmedia',
    org: 'Deep Media',
    url: 'https://deepmedia.ai',
    title: 'VP of Product',
    start: '2025-01',
    end: null,
    location: 'Remote',
    context: 'Content security infrastructure. Trusted by the U.S. Department of Defense and major technology platforms.',
    scope:
      'Sole product executive, reporting to the CEO, and the commercial owner of what product sells. Ran product, sales, and marketing together, extending a lean team’s reach with an agentic workforce, and set roadmap and sequencing for engineering on a weekly product cycle.',
    bullets: [
      { id: 'tools', text: 'Architected a composable API and MCP tool layer that exposed detection, retrieval, provenance, and case-assembly capabilities as reusable skills, so new workflows composed from existing tools instead of new builds.' },
      { id: 'helm', text: 'Designed the human-at-the-helm controls: permission boundaries, confidence framing, escalation paths, and a reason code, model version, and reviewer signature on every decision, so reviewers spend their attention on judgment calls instead of queue volume and every call stays auditable.' },
      { id: 'agentic', text: 'Led product for agentic policy enforcement and investigation workflows spanning discovery, multimodal assessment, provenance, evidence assembly, and human-reviewed action. Investigations that previously took weeks now take hours, with synthetic-media detection as one signal inside end-to-end enforcement rather than the product.' },
      { id: 'collection', text: 'Launched collection across the surface, deep, and dark web and carried it from commercial scope to a paid licensed feed in 4 months, owning collection scope, data taxonomy, delivery format, and pricing, across licensed platform firehoses and dark and deep web sources.' },
      { id: 'licensing', text: 'Turned bespoke internal capability into repeatable commercial offers. Scoped, priced, negotiated, and closed a recurring data licensing agreement, then authored the pricing architecture and go-to-market roadmap the commercial team runs on.' },
      { id: 'unified', text: 'Unified voice-clone detection, biometric liveness and presentation-attack detection, document authenticity, GenAI origin attribution, child sexual abuse material (CSAM) signals, and 50+ policy classifiers behind a single API and MCP integration surface for banks, platforms, and contractors.' },
      { id: 'evidence', text: 'Defined the evidence architecture that ties every enforcement decision to a structured, human-readable record carrying its reason code, confidence framing, model version, and reviewer signature, held in an auditable vault and built for retroactive policy enforcement.' },
      { id: 'fincrime', text: 'Architected an agentic fraud and financial crime capability that monitors synthetic identity markets and fraud networks upstream of customer-facing systems and delivers Suspicious Activity Report (SAR)-ready intelligence packages formatted for regulatory filing.' },
      // 'gov' (government-facing data feed terms) is held back until its [VERIFY] in the resume system is resolved.
      { id: 'procurement', text: 'Cleared complex enterprise and government procurement, including general counsel redlines, CISO reviews, and federal requests for information (RFIs), and designed product to support customers’ obligations under DSA Articles 13 to 17, EU AI Act Article 50, and the TAKE IT DOWN Act.' },
      { id: 'compliance', text: 'Translated capabilities into compliance workflows for Chief Fraud Officers, Chief Risk Officers, and Heads of Trust & Safety at Tier 1 institutions under the DSA, the TAKE IT DOWN Act, and EU AI Act Article 50.' },
      { id: 'oneperson', text: 'Ran product and go-to-market as a one-person team in year one.' }
    ]
  },
  {
    id: 'truststamp',
    org: 'Trust Stamp',
    title: 'Director, Product & Business Development',
    start: '2023-05',
    end: '2024-12',
    location: 'Atlanta, GA (remote)',
    context: 'Biometric authentication and synthetic identity detection for financial services.',
    bullets: [
      { id: 'gtm', text: 'First North American GTM hire. Inherited a flat U.S. territory and built a $10M+ pipeline by mapping buying committees across financial institutions, social media, dating platforms, and marketplaces.' },
      { id: 'prd', text: 'Authored the product requirements document for the deepfake detection API, evaluated internal R&D models against it, and packaged detection for financial crime, know-your-customer (KYC), and identity fraud use cases.' },
      { id: 'team', text: 'Hired and managed a 7-person U.S. sales team and served as the technical closer, working biometric presentation-attack detection, false-accept and false-reject thresholds, and synthetic identity ring detection directly with customer security architects.' },
      { id: 'rings', text: 'Mapped synthetic identity ring behavior to detection workflows and investigation handoff protocols with fraud operations and compliance leadership.' },
      { id: 'privacy', text: 'Set a privacy-first, security-forward engagement standard for integrity-focused clients, and expanded global document coverage and onboarding UX in the core products.' },
      { id: 'rfi', text: 'Authored the technical responses to federal RFIs covering synthetic identity detection, biometric liveness, and AI-enabled fraud threat modeling.' }
    ]
  },
  {
    id: 'veriff-ae',
    org: 'Veriff',
    title: 'Enterprise Account Executive',
    start: '2021-11',
    end: '2023-05',
    location: 'Remote, U.S. market',
    context: 'Global identity verification platform.',
    bullets: [
      { id: 'quota', text: 'Worked a $4M+ enterprise pipeline and beat quota by 25% or more for 5 consecutive quarters.' },
      { id: 'communities', text: 'Built the digital communities practice, covering marketplaces and dating, and worked the identity-verification stand-up for a major platform relaunch during its ownership transition.' },
      { id: 'roi', text: 'Built ROI models that proved conversion-rate gains would save prospects millions in onboarding friction, and used them to open budget that did not exist at the start of the cycle.' },
      { id: 'cycles', text: 'Ran 6-month enterprise procurement cycles end to end: ROI models for finance, redlines with legal teams, infosec reviews with CISOs.' },
      { id: 'promo', text: 'Promoted from team lead to a senior quota-carrying role in 8 months.' }
    ]
  },
  {
    id: 'veriff-sdr',
    org: 'Veriff',
    title: 'Sales Development Team Lead',
    start: '2021-03',
    end: '2021-10',
    location: 'Remote, U.S. market',
    context: 'First U.S. hire.',
    bullets: [
      { id: 'open', text: 'Employee number one in the region. Opened the U.S. market and wrote the sales development strategy from scratch.' },
      { id: 'scale', text: 'Scaled the team from 1 to 12 in under a year, hitting 115% of team quota for 2 consecutive quarters before my promotion. The team generated $50M+ in new pipeline in its first 12 months.' },
      { id: 'cadences', text: 'Wrote the first 10 email cadences and cold-call scripts for North America, iterating weekly on subject lines and send windows.' }
    ]
  },
  {
    id: 'sheerid',
    org: 'SheerID',
    title: 'Sales Development Representative',
    start: '2020-06',
    end: '2021-03',
    location: 'Portland, OR',
    context: 'Identity and eligibility verification for consumer brands.',
    bullets: [
      { id: 'committees', text: 'Mapped buying committees across 200 target accounts to book meetings with VP-level marketing buyers at Fortune 500 retail brands.' }
    ]
  },
  {
    id: 'rootconnection',
    org: 'Root Connection',
    title: 'Founder & CEO',
    start: '2015-03',
    end: '2021-03',
    location: 'Portland, OR',
    context: 'Scientific research, ecological design-build, and regulated-industry compliance consulting.',
    bullets: [
      { id: 'built', text: 'Built the company from $0 to $1M in annual revenue in 2 years and ran it profitably for 6.' },
      { id: 'signed', text: 'Signed 50+ client contracts over 6 years by managing multi-stakeholder acquisition across farm owners, contractors, and municipal planners.' },
      { id: 'compliance', text: 'Advised state-licensed operators on licensing, multi-agency compliance regimes, and audit-ready operations in a controlled market (cannabis), and wrote and won grants for agricultural research projects.' },
      { id: 'ops', text: 'Ran operations, accounting, and delivery: 5-person crews, 15+ material vendors, and complex builds finished on time and under budget.' },
      { id: 'marketing', text: 'Ran full-stack marketing: Google Ads, SEO, the website, email, and experiential regional trade-show activations.' },
      { id: 'research', text: 'Applied formal research methodology to client projects, which became the foundation for how I design products and investigation frameworks.' }
    ]
  },
  {
    id: 'onegreenworld',
    org: 'One Green World',
    title: 'Sales & Marketing Lead',
    start: '2015-06',
    end: '2017-06',
    location: 'Portland, OR (concurrent)',
    context: 'Specialty horticultural nursery.',
    bullets: [
      { id: 'book', text: 'Managed a $500K+ wholesale book of business and drove B2B retail expansion, running the weekly newsletter, social channels, digital catalog, and four trade shows a year.' }
    ]
  },
  {
    id: 'ohsu',
    org: 'Oregon Health & Science University',
    title: 'Clinical Research Coordinator',
    start: '2007-11',
    end: '2013-02',
    location: 'Portland, OR',
    context: 'Sponsors included Pfizer, Abbott, and Galderma.',
    bullets: [
      { id: 'trials', text: 'Coordinated Phase 3 clinical trials for 5 years: protocol adherence, human-subject scheduling and consent workflows, supply procurement, and cross-department coordination in a regulated research environment. Served as the bilingual Spanish point of contact for patients and families.' }
    ]
  }
];

export const SKILLS = [
  'Agentic AI transformation and human-AI operating model design',
  'Multi-agent and tool orchestration, Model Context Protocol (MCP) and API architecture',
  'Retrieval and knowledge systems, agent evaluation and observability',
  'Human-at-the-helm governance and audit-ready reporting',
  'Policy enforcement at scale and trust and safety delivery',
  'Deepfake and generative AI forensics, synthetic identity fraud detection',
  'KYC, biometric liveness, and presentation-attack detection',
  'Regulatory mapping: DSA, EU AI Act, TAKE IT DOWN Act',
  'Enterprise and government procurement',
  'Enterprise sales and go-to-market in regulated industries'
];

export const AFFILIATIONS = [
  'Member, Trust & Safety Professional Association (TSPA) and the International Association of Financial Crimes Investigators (IAFCI).',
  'Committee member and speaker, Association of Payment Professionals (2023 to 2024).',
  'Repeat speaker at IAFCI events, and at TrustCon.'
];

export const AWARDS = [
  { title: 'Winner, Safety by Design Trust & Safety Hackathon, team FaceLock', date: '2024-04', awarder: 'Trust & Safety Hackathon' },
  { title: 'Participant, inaugural Trust & Safety Hackathon, San Francisco', date: '2023', awarder: 'Trust & Safety Hackathon' },
  { title: 'Participant, Trust & Safety Hackathon, Paris', date: '2024', awarder: 'Trust & Safety Hackathon' }
];

export const EDUCATION = {
  institution: 'Oregon State University',
  studyType: 'B.S.',
  area: 'Horticulture (Research Option)',
  honors: ['OSU Research Fellow']
};

export const LANGUAGES = [
  { language: 'English', fluency: 'Native' },
  { language: 'Spanish', fluency: 'Professional working proficiency' }
];
export const LANGUAGE_NOTE =
  'Bilingual point of contact for patients and families at OHSU, and Spanish-language program lead for U.S. and Honduras community health partnerships.';

export const ENDORSEMENTS = [
  {
    quote:
      'Ally quickly demonstrated the ability to build strong relationships with clients and manage complex RFI/RFP responses. His strategic thinking and customer-focused approach earned him the trust of both clients and colleagues.',
    who: 'Kinny Chan, Chief Commercial Officer, Trust Stamp'
  },
  {
    quote:
      'Ally started on my team as an SDR and immediately began having an impact within a month of hiring. In less than one year, he was promoted to Enterprise Account Executive.',
    who: 'Sales leadership, Veriff'
  }
];

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export function fmtDate(d) {
  if (!d) return 'present';
  const [y, m] = d.split('-');
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
}

export const byId = (id) => WORK.find((w) => w.id === id);
export function bullet(workId, bulletId) {
  const b = byId(workId).bullets.find((x) => x.id === bulletId);
  if (!b) throw new Error(`Unknown bullet ${workId}.${bulletId}`);
  return b.text;
}

export const SPEAKING_LINE =
  'IAFCI International Training Conference (Aug 2026, Nashville), Cyber Fraud Summit (May 2026, Chicago), and Florida Chapter Conference (Oct 2025), the last with a live deepfake-call demo. TrustCon (2024). Google Trust & Safety CX Summit (2024). NABCRMP Global Summit (Aug 2025) and Annual Summit (Jan 2024). ICBA Fraud and Scams Task Force and TIAA Fraud Summit (2025).';
