// Role-oriented readings of the same career record. Generic by design: nothing here is written
// for one company. Company-specific material never goes on this site or in its nav, sitemap or llms files.
// Every fact must already be supported by /experience; keep numbers identical to that page.

export const ROLES = [
  {
    slug: 'product-leadership',
    label: 'Product leadership',
    headline: 'Product leader for AI systems that find digital harms before the victims have to.',
    blurb:
      'Head of product or VP of Product for trust and safety, content security, fraud, and agentic investigation platforms.',
    summary: [
      'I lead product for content security and trust and safety platforms: detection, composable tools, and autonomous investigation agents that work the surface, deep, and dark web. At Deep Media I own strategy and roadmap across the platform. Before that I wrote the PRD for Trust Stamp’s deepfake detection API from a blank page.',
      'I came up through sales, so I build from the buyer’s problem backward and I ship with acceptance criteria, not vibes. I write the specs, build my own AI agents, map every feature to the regulation it has to satisfy, and hold the line on detection humility: probability is not ground truth, and the product never claims otherwise.'
    ],
    results: [
      'Own product strategy and roadmap at Deep Media across a composable API and MCP tool layer, Skills composed from those tools, Guardian investigation agents on top, and an auditable evidence vault underneath.',
      'Investigations that previously took weeks now take hours, with audit-ready output built for regulators and courts.',
      'Stood up all-layer web threat intelligence across the surface, deep, and dark web, and built the dark web collection feed for government and brand risk monitoring.',
      'Translate capabilities into compliance workflows for Chief Fraud Officers, Chief Risk Officers, and Heads of Trust & Safety under the DSA, the TAKE IT DOWN Act, and EU AI Act Article 50.',
      'Authored the PRD for Trust Stamp’s deepfake detection API from scratch, evaluated internal R&D models against it, and packaged detection for financial crime, KYC, and identity fraud use cases.',
      'Mapped synthetic identity ring behavior to detection workflows and investigation handoff protocols with fraud operations and compliance leadership.',
      'Built or led teams that generated $60MM+ in pipeline in prior sales roles, which is why I prioritize the roadmap on what buyers will actually pay for.',
      'Built the AI agent stack that runs my own operations, which doubles as a live product lab.'
    ],
    roles: [
      {
        title: 'VP of Product, Deep Media',
        when: 'January 2025 – present',
        note: 'Product strategy and roadmap across detection, composable tools, and investigation agents. Ran product and go-to-market as a one-person team in year one.'
      },
      {
        title: 'Director, Product & Business Development, Trust Stamp',
        when: 'May 2023 – December 2024',
        note: 'Deepfake detection API from PRD to packaging. Technical authority in enterprise pursuits with security architects.'
      },
      {
        title: 'Enterprise Account Executive and SDR Team Lead, Veriff',
        when: 'March 2021 – May 2023',
        note: 'Two years inside enterprise buying committees, which is where my product judgment about defensible economics and defensible architecture comes from.'
      },
      {
        title: 'Founder & CEO, Root Connection',
        when: 'March 2015 – March 2021',
        note: 'Applied formal research methodology to client projects, the foundation for how I now design products and investigation frameworks.'
      },
      {
        title: 'Clinical Research Coordinator, Oregon Health & Science University',
        when: 'November 2007 – February 2013',
        note: 'Phase 3 clinical trials, where data integrity and consent are the whole job.'
      }
    ],
    endorsements: ['kinny']
  },
  {
    slug: 'sales-leadership',
    label: 'Sales leadership',
    headline: 'Enterprise sales leader for trust and safety, identity, fraud, and AI content security.',
    blurb:
      'Head of sales, VP of Sales, or first sales leader for a company selling into regulated buyers.',
    summary: [
      'I have spent more than a decade selling into regulated buyers: banks, platforms, government contractors, and the compliance, fraud, and trust and safety teams inside them. I have beaten quota by 25% or more for five straight quarters, built two sales teams from zero, and been the first go-to-market hire in a new market twice.',
      'I sell as the technical closer. I write the PRDs, so I can talk a security architect through presentation attack detection or walk a Chief Risk Officer through DSA obligations without a solutions engineer on the call. Buyers trust that, and it shortens cycles.'
    ],
    results: [
      'Veriff’s first U.S. hire: opened the market with no playbook, wrote the sales development strategy, and scaled the team from one to 12 in under a year at 115% of team quota for two consecutive quarters. The team generated $50MM+ in new pipeline in its first twelve months.',
      'Beat quota by 25% or more for five consecutive quarters as an enterprise account executive at Veriff, on a $4MM+ pipeline.',
      'Trust Stamp’s first North American go-to-market hire: built a $10MM+ pipeline from a flat territory across financial institutions, social platforms, and dating apps, and hired and managed seven U.S. sales reps.',
      'Served as the technical closer for the U.S. team, working biometric presentation attack detection, false-accept and false-reject thresholds, and synthetic identity ring detection directly with security architects.',
      'Closed a custom data feed agreement with a government contractor to monitor extremist content and weapons-related incitement.',
      'Grew my own company from zero to $1MM in annual revenue in two years and signed 50+ client contracts over six years, all sold myself.',
      'Regular speaker to the buyers themselves: IAFCI, NABCRMP, TrustCon, the ICBA Fraud and Scams Task Force, the TIAA Fraud Summit, and Google’s Trust & Safety CX Summit.'
    ],
    roles: [
      {
        title: 'VP of Product, Deep Media',
        when: 'January 2025 – present',
        note: 'Ran product and go-to-market as a one-person team in year one. Closed the government contractor data feed agreement.'
      },
      {
        title: 'Director, Product & Business Development, Trust Stamp',
        when: 'May 2023 – December 2024',
        note: 'First North American GTM hire. Built the U.S. team of seven and the $10MM+ pipeline.'
      },
      {
        title: 'Enterprise Account Executive, Veriff',
        when: 'November 2021 – May 2023',
        note: 'Five consecutive quarters at 125%+ of quota. Promoted from team lead in eight months.'
      },
      {
        title: 'Sales Development Team Lead, Veriff',
        when: 'March 2021 – October 2021',
        note: 'First U.S. hire. Built the SDR team from one to 12.'
      },
      {
        title: 'Founder & CEO, Root Connection',
        when: 'March 2015 – March 2021',
        note: 'Built the company’s whole revenue engine: marketing, sales, and delivery.'
      }
    ],
    endorsements: ['brian', 'kinny']
  },
  {
    slug: 'enterprise-sales',
    label: 'Enterprise sales',
    headline: 'Enterprise account executive for trust and safety, identity, fraud, and AI content security.',
    blurb:
      'Senior or strategic enterprise AE carrying a number into banks, platforms, and government.',
    summary: [
      'I hunt and close enterprise deals with regulated buyers: banks, platforms, government contractors, and the fraud, risk, and trust and safety teams inside them. Five straight quarters at 125%+ of quota on a $4MM+ pipeline at Veriff. $10MM+ of pipeline built from a flat territory at Trust Stamp. A custom data feed agreement with a government contractor at Deep Media, sourced and closed by me.',
      'I close as the technical seller. I have written the PRDs, so I can take a CISO through presentation attack detection or a Chief Risk Officer through DSA obligations without a solutions engineer on the call. That is what shortens six-month procurement cycles: fewer handoffs, faster answers, and a buyer who trusts the person across the table.'
    ],
    results: [
      '125%+ of quota for five consecutive quarters at Veriff on a $4MM+ enterprise pipeline.',
      'Built a $10MM+ pipeline from nothing as Trust Stamp’s first North American GTM hire, mapping buying committees across banks, social platforms, and dating apps.',
      'Sourced and closed a custom data feed agreement with a government contractor to monitor extremist content and weapons-related incitement.',
      'Ran six-month enterprise cycles end to end: ROI models for finance, redlines with General Counsels, infosec reviews with CISOs, and technical responses to federal RFIs.',
      'Built ROI models showing prospects what conversion-rate gains were worth in onboarding friction, and used them to open budget that did not exist at the start of the cycle.',
      'Promoted from team lead to a quota-carrying enterprise role in eight months.',
      'Signed 50+ client contracts over six years for my own company, which I grew to $1MM in annual revenue.'
    ],
    roles: [
      {
        title: 'VP of Product, Deep Media',
        when: 'January 2025 – present',
        note: 'Sourced and closed the government contractor data feed agreement while running product and go-to-market.'
      },
      {
        title: 'Director, Product & Business Development, Trust Stamp',
        when: 'May 2023 – December 2024',
        note: 'First North American GTM hire and technical closer for the U.S. team.'
      },
      {
        title: 'Enterprise Account Executive, Veriff',
        when: 'November 2021 – May 2023',
        note: 'Six-month procurement cycles with General Counsels, CISOs, and Heads of Fraud at financial institutions.'
      },
      {
        title: 'Sales Development Team Lead and SDR, Veriff and SheerID',
        when: 'June 2020 – October 2021',
        note: 'Mapped buying committees across 200 target accounts, then opened Veriff’s U.S. market.'
      }
    ],
    endorsements: ['brian', 'kinny']
  },
  {
    slug: 'founder',
    label: 'Founder and zero-to-one',
    headline: 'Zero-to-one builder in trust and safety: product, revenue, and markets.',
    blurb:
      'Founder, cofounder, or first product and go-to-market leader at an early-stage company.',
    summary: [
      'I have opened markets from zero four times: my own company, Veriff’s U.S. sales development team, Trust Stamp’s North American go-to-market, and Deep Media’s product and go-to-market as a one-person team. Each time I wrote the playbook, sold the first deals myself, and then built what it took to scale.',
      'My domain is content security and trust and safety: synthetic media, fraud networks, identity, and the regulation now shaping all of it. I write PRDs, build AI agents, close enterprise contracts, and speak regularly to the fraud investigators and trust and safety teams who are the buyers. The through line since my first company is the same: understand a system well enough to protect the people inside it.'
    ],
    results: [
      'Root Connection: founded a research and design firm and grew it from zero to $1MM in annual revenue in two years, ran it profitably for six, and signed 50+ client contracts I sold myself.',
      'Deep Media: sole product and go-to-market lead in year one. Stood up all-layer web threat intelligence, built the dark web collection feed, closed a custom data feed agreement with a government contractor, and authored the pricing architecture and go-to-market roadmap the commercial team runs on.',
      'Veriff: first U.S. hire. Built the sales development function from one to 12 people and $50MM+ in first-year pipeline.',
      'Trust Stamp: first North American go-to-market hire. Built a $10MM+ pipeline from a flat territory while writing the PRD for a new product line.',
      'Ran a company’s whole back office: operations, accounting, delivery with five-person crews and 15+ vendors, and grants written and won for agricultural research.',
      'Winner, Safety by Design Trust & Safety Hackathon (2024), with team FaceLock.'
    ],
    roles: [
      {
        title: 'VP of Product, Deep Media',
        when: 'January 2025 – present',
        note: 'Product and go-to-market as a one-person team in year one.'
      },
      {
        title: 'Director, Product & Business Development, Trust Stamp',
        when: 'May 2023 – December 2024',
        note: 'First North American hire. Pipeline and a new product line at the same time.'
      },
      {
        title: 'Sales Development Team Lead, Veriff',
        when: 'March 2021 – October 2021',
        note: 'First U.S. hire. Opened the market with no playbook.'
      },
      {
        title: 'Founder & CEO, Root Connection',
        when: 'March 2015 – March 2021',
        note: 'Six years of making payroll. Everything I now do in product and sales, I learned here first.'
      }
    ],
    endorsements: []
  }
];

export const ENDORSEMENTS = {
  kinny: {
    quote:
      'Ally quickly demonstrated the ability to build strong relationships with clients and manage complex RFI/RFP responses. His strategic thinking and customer-focused approach earned him the trust of both clients and colleagues.',
    who: 'Kinny Chan, Chief Commercial Officer, Trust Stamp'
  },
  brian: {
    quote:
      'Ally started on my team as an SDR and immediately began having an impact within a month of hiring. In less than one year, he was promoted to Enterprise Account Executive where he continued to show off skills for sourcing and maturing sales opportunities.',
    who: 'Brian Krause, VP of Global Revenue, Veriff'
  }
};
