import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// -- Projects (/projects/) -------------------------------------------------
// Authored from cv/resume-ai.txt and the design canvas during the Astro
// migration — the old _portfolio/ collection (3 thematic pages: psychology,
// research, work) is superseded by this per-project structure and was
// dropped rather than ported.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(['research', 'speech-nlp', 'computer-vision', 'data-science', 'backend-platform']),
    categoryLabel: z.string(),
    org: z.string(),
    result: z.string().optional(),
    year: z.string(),
    stack: z.array(z.string()),
    description: z.string(),
    hasWriteup: z.boolean().default(false),
    writeupUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    featured: z.boolean().default(false),
    figureCaption: z.string().optional(),
    order: z.number(),
  }),
});

// -- Research case studies (/projects/<slug>/, method-only) ---------------
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    question: z.string(), // the hero h1 -- a research question, not a project name
    slug: z.string(),
    org: z.string(),
    role: z.string(),
    dateRange: z.string(),
    duration: z.string(),
    modelsCompared: z.array(z.string()),
    stack: z.array(z.string()),
    summary: z.string(),
    figureCaption: z.string().optional(),
    benchmarkIntro: z.string(),
    languages: z.array(z.object({ code: z.string(), description: z.string() })),
    hardNegativesIntro: z.string(),
    hardNegativeExamples: z.array(
      z.object({
        verdict: z.enum(['accept', 'reject']),
        sequence: z.string(),
        note: z.string(),
      }),
    ),
    cudaIntro: z.string(),
    resultsNote: z.string(),
    prevProjectSlug: z.string().optional(),
    nextProjectSlug: z.string().optional(),
    order: z.number(),
  }),
});

// -- Talks (/talks/) --------------------------------------------------------
// Scaffolded placeholders — _talks/ has no real entries yet. Fields marked
// "TODO" in content are surfaced with a visible placeholder in TalkCard.
const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    year: z.string().optional(),
    slidesUrl: z.string().optional(),
    featured: z.boolean().default(false),
    isPlaceholder: z.boolean().default(false),
    order: z.number(),
  }),
});

// -- Teaching (/teaching/<slug>/) -------------------------------------------
const teaching = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teaching' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(), // preserves the old /:collection/:path/ URL, date prefix included
    type: z.string(),
    venue: z.string(),
    date: z.coerce.date(),
    course: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    slidesurl: z.string().optional(),
    teaser: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// -- Posts (/posts/<slug>/, unpublished) -------------------------------------
// Ported so nothing is lost, but held back per decision: no blog routes
// ship, no feed entries, draft:true on every entry.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = { projects, research, talks, teaching, posts };
