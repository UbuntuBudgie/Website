import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      author: z.string(), // This matches the filename in /team/
      description: z.string(),
      image: z.string().optional(), // Changed from image() to z.string() for static paths
      tags: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
    }),
});

// Renamed from authorsCollection to teamCollection for clarity
const authorsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: z.string().optional(), // Changed from image() to z.string() for static paths
    }),
});
const teamCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string().optional(),
      avatar: image().optional(), // Image field
      email: z.string().email().optional(), // Added basic email validation
      social: z
        .object({
          twitter: z.string().optional(),
          github: z.string().optional(),
          linkedin: z.string().optional(),
        })
        .optional(),
    }),
});

// --------------------------------------------------------------------
// --- 3. Downloads Collection (File & Number field support) ---
const downloadsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    version: z.string(),
    releaseDate: z.date(),
    // Pages CMS 'file' type usually saves a string path (to the file location)
    file: z.string(),
    fileSize: z.string().optional(),
    downloadCount: z.number().default(0),
  }),
});

// -----------------------------------------------------------------
// --- 4. Gallery Collection (Standard Content Schema) ---
const galleryCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      image: z.string(), // Changed from image() to z.string() for static paths
      category: z.string().optional(),
      date: z.date(),
    }),
});
export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
  team: teamCollection,
  downloads: downloadsCollection,
  gallery: galleryCollection,
};
