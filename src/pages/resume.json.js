// Generated from src/data/cv.js so the JSON Resume never drifts from /experience.
import { SITE_URL, EMAIL, HEADSHOT, SAME_AS, ENTITY_STATEMENT } from '../data/site.js';
import { CV_SUMMARY, WORK, SKILLS, AWARDS, EDUCATION, LANGUAGES } from '../data/cv.js';

const PROFILES = {
  'linkedin.com': 'LinkedIn',
  'substack.com': 'Substack',
  'bsky.app': 'Bluesky',
  'github.com': 'GitHub',
  'tiktok.com': 'TikTok',
  'instagram.com': 'Instagram'
};

export function GET() {
  const resume = {
    $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: 'Ally Madrone',
      label: 'Product leader, AI systems for trust and safety and fraud investigation',
      image: `${SITE_URL}${HEADSHOT}`,
      email: EMAIL,
      url: SITE_URL,
      summary: `${ENTITY_STATEMENT} ${CV_SUMMARY.join(' ')}`,
      location: { countryCode: 'US' },
      profiles: SAME_AS.map((url) => {
        const host = Object.keys(PROFILES).find((h) => url.includes(h));
        return { network: PROFILES[host], username: url.split('/').pop().replace('@', ''), url };
      })
    },
    work: WORK.map((w) => ({
      name: w.org,
      position: w.title,
      ...(w.url ? { url: w.url } : {}),
      startDate: w.start,
      ...(w.end ? { endDate: w.end } : {}),
      location: w.location,
      summary: [w.context, w.scope].filter(Boolean).join(' '),
      highlights: w.bullets.map((b) => b.text)
    })),
    education: [
      {
        institution: EDUCATION.institution,
        area: EDUCATION.area,
        studyType: EDUCATION.studyType,
        courses: EDUCATION.honors
      }
    ],
    awards: AWARDS,
    skills: SKILLS.map((name) => ({ name })),
    languages: LANGUAGES,
    meta: {
      canonical: `${SITE_URL}/resume.json`,
      lastModified: new Date().toISOString().slice(0, 10),
      note: 'Maintained by Ally Madrone. This file and allymadrone.com are the authoritative source for his career record.'
    }
  };
  return new Response(JSON.stringify(resume, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}
