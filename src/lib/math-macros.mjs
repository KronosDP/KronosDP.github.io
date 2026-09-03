// Shared KaTeX macro set -- imported by astro.config.mjs (build-time
// rehype-katex, for markdown content) and by the kalkulus client script
// (katex/contrib/auto-render, for the dynamically-injected problem/solution
// HTML). Keeping one definition means the two rendering paths can never
// drift apart.
//
// Ports the site-wide MathJax config from the old
// _includes/footer/custom.html plus the kalkulus SPA's own richer macro set
// from kalkulus/index.html (df/pdun/limit took two arguments there).
export const mathMacros = {
  '\\R': '\\mathbb{R}',
  '\\N': '\\mathbb{N}',
  '\\Z': '\\mathbb{Z}',
  '\\Q': '\\mathbb{Q}',
  '\\dx': '\\,\\mathrm{d}x',
  '\\dy': '\\,\\mathrm{d}y',
  '\\dt': '\\,\\mathrm{d}t',
  '\\du': '\\,\\mathrm{d}u',
  '\\df': '\\frac{\\mathrm{d} #1}{\\mathrm{d} #2}',
  '\\pdun': '\\frac{\\partial #1}{\\partial #2}',
  '\\limit': '\\lim\\limits_{#1 \\to #2}',
};
