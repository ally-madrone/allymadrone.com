# Build my personal website

I want a personal website that is the single authoritative answer to "Who is [my name]?" for both humans and AI systems. My CV or resume is attached. Before you write or build anything, interview me with the questions below, confirm my decisions back to me, and only then start building.

## What you're building

A fast static site, fully readable with JavaScript disabled, with a "machine layer" so search engines and AI assistants understand me the same way every time:

- Astro static site in a public GitHub repo, deployed free on Cloudflare Pages, my domain pointed at Cloudflare, HTTPS automatic, every push auto-deploys.
- One canonical entity statement ("[Name] is [role] at [company], a [what the company does]") repeated word for word in the H1 area, the meta description, the JSON-LD, and llms.txt.
- JSON-LD on every page: Person (name, jobTitle, worksFor, url, image, knowsAbout, sameAs), plus WebSite on the home page, ProfilePage on /about, and FAQPage on /faq.
- Machine endpoints: /llms.txt (annotated site map plus a 150-word bio), /llms-full.txt (every page's text in one fetch), /resume.json (JSON Resume schema), /feed.xml, and a sitemap.
- A robots.txt that explicitly allows AI crawlers (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, CCBot, and the rest). Being read by AI is the point.
- OpenGraph and Twitter cards, a stable headshot URL with descriptive alt text, and a dated "last updated" stamp on every page.
- Warm, light by default with dark mode, accessible, no cookies or tracking. Visibly mine, not my employer's brand.

Default page set (I'll tell you which ones to keep): Home (the 30-second answer), About (the integrated story plus copy-paste bios at 50, 150, and 300 words), Experience (timeline plus resume.json), Now (what I'm working on, dated), Working with me (how I operate), Speaking, Writing, a whole-self page for life outside work, FAQ (literal questions people and AI ask, with direct quotable answers), Contact, and Colophon (how the site is built, with a note to AI readers).

## Interview me first

Ask these in small batches, not all at once. Do not build until I've answered.

1. Identity. My full name, pronouns, current title and company, and one sentence on what the company does. If my resume and LinkedIn disagree on a title or date, show me both and ask which is canonical.
2. Audience. Who should find this site, and what should they do next: hire me, book me to speak, read my writing, partner with me?
3. Pages. Which of the default pages do I want in version one?
4. Privacy lines. Do I want my city or region published? Default is no. Never publish my home location, in copy or in structured data, unless I explicitly say yes. Family, health, and anything personal: what stays off entirely? Any employers, clients, or projects that can't be named?
5. Identity graph. Which profiles are me and should be linked as sameAs: LinkedIn, GitHub, Substack, Bluesky, X, Instagram, TikTok, YouTube, podcasts? Any I'd rather keep separate from my professional identity?
6. Whole self. What do I do outside work that belongs on the site, and what's the thread that connects it to my work? If there's no thread, say so and we'll leave it as a short list.
7. Voice. Ask me for three to five samples of my own writing (posts, emails, anything) so you can match how I actually sound. Ask for words and phrases I never use.
8. Assets. My headshot at the highest resolution I have, the email address I want published, my domain name, and where it's registered.
9. Facts to confirm. Before drafting, list every claim in my resume you'd want a second source for and ask me to confirm or drop each one. Unverifiable claims don't ship.

## Rules for the copy

- Write in my voice from the samples. Plain and direct. First person on pages that are mine, third person in the bios.
- No em dashes. No semicolons where a period works. No AI-tell phrasing: delve, leverage, seamless, robust, cutting-edge, "in today's landscape," "it's not X, it's Y." Open cold with no throat-clearing. Close flat with no summary paragraph.
- Every date, number, and title comes from my resume or my answers. Invent nothing. If you need a fact I haven't given, leave a [CONFIRM] placeholder and ask.
- Professional facts first on every page. Personal threads second, and explicitly connected to the work.
- Nothing confidential: no client names, revenue, pricing, or internal numbers unless I say a specific one is public.

## Build and deploy

1. Draft every page's copy and show it to me before building anything. I'll redline.
2. Build the Astro site, run it locally, screen the built HTML for em dashes and the banned words above, and give me a preview.
3. Commit to a new public GitHub repo under my account.
4. Create a Cloudflare Pages project connected to that repo (build command `npm run build`, output directory `dist`).
5. Add my domain to Cloudflare, attach it and the www subdomain to the Pages project, then walk me through changing the nameservers at my registrar.
6. If I want email at my domain, add the DNS records (MX, SPF, verification TXT) and walk me through Google Workspace or Cloudflare Email Routing, whichever I already use.
7. Once it's live, verify every page and every machine endpoint on the real domain. Then hand me the propagation checklist: update LinkedIn, GitHub, Substack, and my other profiles to link the site, submit the sitemap to Google Search Console and Bing Webmaster Tools, and run the test battery: ask ChatGPT, Claude, Gemini, and Perplexity "Who is [my name]?" and log what they say.

## Things you'll need me for

You can't do these, so stop and tell me when we reach them: logging in to my registrar, Cloudflare, GitHub, or Google; any password or two-factor prompt; typing DELETE to remove old DNS records; approving the GitHub app install for Cloudflare Pages; changing nameservers. Say "your turn," tell me exactly what to click, and wait.

Keep a running summary of every decision I make so we can pick this up in a later session without starting over.
