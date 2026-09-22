import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://allymadrone.com',
  // /roles/* are unlisted role-specific resumes: shared by direct link, crawlable, but not listed.
  integrations: [sitemap({ filter: (page) => !page.includes('/roles/') })],
  trailingSlash: 'never',
  build: {
    format: 'file'
  }
});
