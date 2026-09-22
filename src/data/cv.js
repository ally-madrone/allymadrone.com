// The comprehensive CV. Single source for /experience and /resume.json.
// Role pages under /roles/* are unlisted readings of this record: keep their numbers identical to it.
// Public-safe only: no Deep Media internal figures, no customer or partner names from that era.

export const CV_SUMMARY = [
  'Product leader for AI systems that find digital harms before the victims have to. I have spent my career at the intersection of identity, fraud, and trust and safety: in product, in enterprise sales, and as a founder, usually more than one at a time.',
  'The method is the same every time. Find the work that repeats, redesign it around composable tools and agents, keep a human at the decision, and prove the result survives an audit.'
];

export const WORK = [
  {
    org: 'Deep Media',
    url: 'https://deepmedia.ai',
    title: 'VP of Product',
    start: '2025-01',
    end: null,
    location: 'Remote',
    context:
      'Content security infrastructure company. Deep Media’s work is trusted by the U.S. Department of Defense and major technology platforms.',
    highlights: [
      'Own product strategy and roadmap across the platform: a composable API and MCP tool layer that exposes detection, retrieval, provenance, and case-assembly capabilities, Skills composed from those tools, Guardian agents on top, and an auditable evidence vault underneath.',
      'Guardian agents proactively investigate fraud, disinformation, terrorist and violent extremist content, brand safety, NCII, and threat intelligence across the surface, deep, and dark web. Investigations that previously took weeks now take hours, with audit-ready output built for regulators and courts.',
      'Designed the human-in-the-loop controls: permission boundaries, confidence framing, escalation paths, and a reason code, model version, and reviewer signature on every decision.',
      'Stood up all-layer web threat intelligence and built the dark web collection feed for government and brand risk monitoring.',
      'Closed a custom data feed agreement with a government contractor to monitor extremist content and weapons-related incitement, scoping the collection, policy, and delivery terms.',
      'Authored the pricing architecture and go-to-market roadmap the commercial team runs on.',
      'Translate capabilities into compliance workflows for Chief Fraud Officers, Chief Risk Officers, and Heads of Trust & Safety under the DSA, the TAKE IT DOWN Act, and EU AI Act Article 50.',
      'Ran product and go-to-market as a one-person team in year one, and built the AI agent stack that runs my own operations.'
    ]
  },
  {
    org: 'Trust Stamp',
    title: 'Director, Product & Business Development',
    start: '2023-05',
    end: '2024-12',
    location: 'Atlanta, GA (remote)',
    context: 'Biometric authentication and synthetic identity detection for financial services.',
    highlights: [
      'First North American go-to-market hire. Inherited a flat U.S. territory and built a $10MM+ pipeline by mapping buying committees across financial institutions, social platforms, and dating apps.',
      'Authored the PRD for the deepfake detection API from scratch, evaluated internal R&D models against it, and packaged detection for financial crime, KYC, and identity fraud use cases.',
      'Hired and managed seven U.S. sales reps and served as the technical closer, working biometric presentation attack detection, false-accept and false-reject thresholds, and synthetic identity ring detection directly with security architects.',
      'Mapped synthetic identity ring behavior to detection workflows and investigation handoff protocols with fraud operations and compliance leadership.',
      'Set a privacy-first, security-forward engagement standard for integrity-focused clients, and expanded global document coverage and onboarding UX in the core products.',
      'Authored the technical responses to federal RFIs on synthetic identity detection, biometric liveness, and AI-enabled fraud threat modeling.'
    ]
  },
  {
    org: 'Veriff',
    title: 'Enterprise Account Executive',
    start: '2021-11',
    end: '2023-05',
    location: 'Remote, U.S. market',
    context: 'Global identity verification platform.',
    highlights: [
      'Promoted from team lead to a quota-carrying enterprise role in eight months.',
      'Worked a $4MM+ enterprise pipeline and beat quota by 25% or more for five consecutive quarters.',
      'Built the digital communities practice, covering marketplaces and dating, from nothing.',
      'Built ROI models showing prospects what conversion-rate gains were worth in onboarding friction, and used them to open budget that did not exist at the start of the cycle.',
      'Ran six-month enterprise procurement cycles end to end with General Counsels, CISOs, and Heads of Fraud at financial institutions, and built deep expertise in KYC and AML-adjacent identity workflows.'
    ]
  },
  {
    org: 'Veriff',
    title: 'Sales Development Team Lead',
    start: '2021-03',
    end: '2021-10',
    location: 'Remote, U.S. market',
    context: 'Veriff’s first U.S. hire.',
    highlights: [
      'Opened the U.S. market with no playbook and wrote the sales development strategy from scratch.',
      'Scaled the team from one to 12 in under a year at 115% of team quota for two consecutive quarters. The team generated $50MM+ in new pipeline in its first twelve months.',
      'Wrote the first ten email cadences and cold-call scripts for North America, iterating weekly on subject lines and send windows.'
    ]
  },
  {
    org: 'SheerID',
    title: 'Sales Development Representative',
    start: '2020-06',
    end: '2021-03',
    location: 'Portland, OR',
    context: '',
    highlights: [
      'Mapped buying committees across 200 target accounts to book meetings with VP-level marketing buyers at Fortune 500 retail brands.'
    ]
  },
  {
    org: 'Root Connection',
    title: 'Founder & CEO',
    start: '2015-03',
    end: '2021-03',
    location: 'Portland, OR',
    context: 'Scientific research, ecological design-build, and regulated agriculture consulting.',
    highlights: [
      'Built the company from zero to $1MM in annual revenue in two years and ran it profitably for six.',
      'Signed 50+ client contracts over six years by working multi-stakeholder deals across farm owners, contractors, and municipal planners.',
      'Ran full-stack marketing: search ads, SEO, the website, email, and regional trade shows.',
      'Ran operations, accounting, and delivery: five-person crews, 15+ material vendors, and complex builds finished on time and under budget.',
      'Advised regulated agriculture clients on licensing, multi-agency compliance, and audit-ready operations, and wrote and won grants for agricultural research projects.',
      'Applied formal research methodology to client projects, the foundation for how I now design products and investigation frameworks.'
    ]
  },
  {
    org: 'One Green World',
    title: 'Sales & Marketing Lead',
    start: '2015-06',
    end: '2017-06',
    location: 'Portland, OR (concurrent with Root Connection)',
    context: 'Specialty nursery.',
    highlights: [
      'Managed a $500K+ wholesale book of business and drove B2B retail expansion.',
      'Ran the weekly newsletter, social channels, and digital catalog, and represented the company at four trade shows a year.'
    ]
  },
  {
    // CONFIRM with Ally before merge: dates and wording of the 2013 to 2015 line.
    org: 'Oregon State University',
    title: 'Horticulture studies',
    start: '2013',
    end: '2015',
    location: '',
    context: '',
    highlights: [
      'Studied horticulture full time, then helped build the One Green World nursery and its web presence before joining as sales and marketing lead.'
    ],
    kind: 'education'
  },
  {
    org: 'Oregon Health & Science University',
    title: 'Clinical Research Coordinator',
    start: '2007-11',
    end: '2013-02',
    location: 'Portland, OR',
    context: 'Phase 3 clinical trials. Sponsors included Pfizer, Abbott, and Galderma.',
    highlights: [
      'Coordinated Phase 3 clinical trials for five years: protocol adherence, human-subject scheduling and consent workflows, supply procurement, and cross-department coordination in a regulated research environment.',
      'Bilingual Spanish point of contact for patients and families.'
    ]
  },
  {
    org: 'Earlier',
    title: 'Operations and community health',
    start: '2003',
    end: '2008',
    location: '',
    context: '',
    highlights: [
      'Assistant manager of an automotive service location, responsible for hiring, training, budget, inventory, and sales.',
      'Program and budget lead for a community health nonprofit chapter working in the U.S. and Honduras, including Spanish-language program leadership.'
    ],
    kind: 'earlier'
  }
];

export const SKILLS = [
  'Content security and trust and safety product strategy',
  'Agentic AI architecture for fraud and trust and safety investigation',
  'Multi-agent and tool orchestration, Model Context Protocol (MCP) and API design',
  'Human-in-the-loop governance, agent evaluation, and audit-ready reporting',
  'Deepfake and generative AI forensics (audio, video, image, text)',
  'Synthetic identity fraud detection and attribution',
  'KYC, biometric liveness, and presentation attack detection',
  'Regulatory mapping: DSA, EU AI Act, TAKE IT DOWN Act',
  'Enterprise and government procurement',
  'Enterprise sales and go-to-market in regulated industries'
];

export const AFFILIATIONS = [
  'Member, Trust & Safety Professional Association (TSPA)',
  'Member, International Association of Financial Crimes Investigators (IAFCI), which lists him as a speaker and trainer',
  'Committee member and speaker, Association of Payment Professionals (2023 to 2024)'
];

export const AWARDS = [
  { title: 'Winner, Safety by Design Trust & Safety Hackathon, with team FaceLock', date: '2024-04', awarder: 'Trust & Safety Hackathon' },
  { title: 'Participant, inaugural Trust & Safety Hackathon, San Francisco', date: '2023-07', awarder: 'Trust & Safety Hackathon' },
  { title: 'Participant, Trust & Safety Hackathon, Paris', date: '2024', awarder: 'Trust & Safety Hackathon' }
];

export const EDUCATION = {
  institution: 'Oregon State University',
  studyType: 'B.S.',
  area: 'Horticulture (Research Option)',
  honors: ['OSU Research Fellow', 'Pi Alpha Xi Honor Society', 'Permaculture Research Institute']
};

export const LANGUAGES = [
  { language: 'English', fluency: 'Native' },
  { language: 'Spanish', fluency: 'Conversational' }
];

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export function fmtDate(d) {
  if (!d) return 'present';
  const [y, m] = d.split('-');
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
}
