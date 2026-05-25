// Define blog content collection with its glob loader and validation schema
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog };
