import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      author: z.string(),
      description: z.string(),
      image: z.string().optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
    }),
});

const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    showFaq: z.boolean().default(false),
  }),
});

const authorsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: z.string().optional(),
    }),
});

const teamCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string().optional(),
      avatar: image().optional(),
      email: z.string().email().optional(),
      social: z
        .object({
          twitter: z.string().optional(),
          github: z.string().optional(),
          linkedin: z.string().optional(),
        })
        .optional(),
    }),
});

const downloads = defineCollection({
  type: "content",
  schema: z.object({
    version: z.string(),
    releaseType: z.string(),
    supportPeriod: z.string().optional(),
    description: z.string().optional(),
    downloadUrl: z.string().optional(),
    torrentUrl: z.string().optional(),
    readmeUrl: z.string().optional(),
    usbBuyUrl: z.string().optional(),
    checksum: z.string().optional(),
    order: z.number().optional(),
  }),
});

const downloadsSettings = defineCollection({
  type: "data",
  schema: z.object({
    donationTitle: z.string().optional(),
    donationDescription: z.string().optional(),
    tip1Label: z.string().optional(),
    tip1Url: z.string().optional(),
    tip2Label: z.string().optional(),
    tip2Url: z.string().optional(),
    tip3Label: z.string().optional(),
    tip3Url: z.string().optional(),
    tip4Label: z.string().optional(),
    tip4Url: z.string().optional(),
    usbDescription: z.string().optional(),
    usbButtonText: z.string().optional(),
    usbButtonUrl: z.string().optional(),
    installationTitle: z.string().optional(),
    installationContent: z.string().optional(),
  }),
});

const galleryCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      image: z.string(),
      category: z.string().optional(),
      date: z.date(),
    }),
});

export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
  pages: pagesCollection,
  team: teamCollection,
  downloads: downloads,
  "downloads-settings": downloadsSettings,
  gallery: galleryCollection,
};