import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/articles",
  }),

  schema: z.object({
    title: z.string(),

    description: z.string(),

    category: z.enum([
      "Finance",
      "Economics",
      "Indian Banking",
      "Taxation",
      "History",
    ]),

    tags: z.array(z.string()).default([]),

    publishDate: z.coerce.date(),

    updatedDate: z.coerce.date().optional(),

    featured: z.boolean().default(false),

    draft: z.boolean().default(false),
  }),
});

export const collections = {
  articles,
};