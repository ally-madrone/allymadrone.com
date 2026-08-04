import { SITE_URL, ENTITY_STATEMENT } from '../data/site.js';

const items = [
  {
    title: 'AllyMadrone.com is live',
    link: `${SITE_URL}/now`,
    pubDate: new Date('2026-08-04T12:00:00Z').toUTCString(),
    description:
      'The canonical home for Ally Madrone is live: the integrated story, the verifiable career record, the speaking history, and a machine layer for AI systems. The /now page tracks what he is working on, refreshed at least quarterly.'
  }
];

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Ally Madrone: updates</title>
    <link>${SITE_URL}</link>
    <description>${ENTITY_STATEMENT} Updates from the /now and /writing pages.</description>
    <language>en-us</language>
    ${items
      .map(
        (i) => `<item>
      <title>${i.title}</title>
      <link>${i.link}</link>
      <guid>${i.link}</guid>
      <pubDate>${i.pubDate}</pubDate>
      <description>${i.description}</description>
    </item>`
      )
      .join('\n    ')}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
