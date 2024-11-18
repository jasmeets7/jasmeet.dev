import { z } from 'zod';

const name = z.string().trim().min(1, 'is required');
const description = z.string().trim().min(1, 'is required');
const github = z.string().trim().url().optional();
const url = z.string().trim().url().optional();
const tags = z.string().array();
const order = z.number().positive();

export const projectSchema = z.object({
  name,
  description,
  github,
  url,
  tags,
  order,
});

export const projectsSchema = z.array(projectSchema);

export type TProjectSchema = z.infer<typeof projectSchema>;
export type TProjectsSchema = z.infer<typeof projectsSchema>;
