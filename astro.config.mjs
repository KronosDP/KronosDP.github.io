// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { mathMacros } from './src/lib/math-macros.mjs';

export default defineConfig({
  site: 'https://kronosdp.github.io',
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { macros: mathMacros }]],
    }),
  },
  redirects: {
    // Ports Jekyll's redirect-from stubs. The demo/filler pages they used to
    // point at (markdown.md's Plotly demo, non-menu-page.md) were pruned as
    // dead weight during the Astro migration, so those now fall back to home
    // rather than a page that no longer exists.
    '/about': '/',
    '/about.html': '/',
    '/resume': '/cv/',
    '/resume-json': '/cv/',
    '/md': '/',
    '/markdown.html': '/',
    '/nmp': '/',
    '/nmp.html': '/',
    '/portfolio': '/projects/',
  },
});
