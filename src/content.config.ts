import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseSchema = ({ image }: { image: any }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    parcial: z.enum(['parcial-1', 'parcial-2', 'proyecto-final']),
    dueDate: z.coerce.date().optional(),
    githubRepo: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: image().optional(),
  });

const tareas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tareas' }),
  schema: baseSchema,
});

const guiados = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guiados' }),
  schema: baseSchema,
});

export const collections = { tareas, guiados };