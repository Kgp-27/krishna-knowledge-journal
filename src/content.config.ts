// src/content.config.ts
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/articles",
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Krishna Pal'),

    category: z.enum([
      'Finance',
      'Economics',
      'Indian Banking',
      'Taxation',
      'History'
    ]),

    tags: z.array(z.string()).default([]),

    featuredImage: image().optional(),

    publishDate: z.coerce.date(),

    updatedDate: z.coerce.date().optional(),

    editorialStatus: z.enum([
      'none',
      'minor',
      'major',
      'retraction',
    ]).default('none'),

    updateReason: z.string().default(''),

    featured: z.boolean().default(false),

    draft: z.boolean().default(true),
  }),
});

export const collections = {
  articles,
};