// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jylee2033.github.io',
  output: 'static',
  redirects: {
    '/posts/software-test-engineer/': '/projects/software-test-engineer/',
    '/posts/automation-tester/': '/projects/automation-tester/',
  },
});
