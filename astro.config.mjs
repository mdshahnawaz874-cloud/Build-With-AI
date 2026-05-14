import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mdshahnawaz874-cloud.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
