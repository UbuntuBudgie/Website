import { defineCollection, z } from "astro:content";

const authors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    // This MUST be z.string() to accept a URL or a local public path.
    image: z.string(), 
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    // This MUST be z.string().optional() for the same reason.
    image: z.string().optional(),
    category: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, authors };