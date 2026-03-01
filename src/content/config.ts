import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    link: z.string().url().optional(),
  }),
});

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    order: z.number(),
  }),
});

const skillsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    skills: z.array(z.string()),
    order: z.number(),
  }),
});

const opensourceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string(),
    description: z.string(),
    link: z.string().url(),
    order: z.number(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'articles': articlesCollection,
  'experience': experienceCollection,
  'skills': skillsCollection,
  'opensource': opensourceCollection,
};
