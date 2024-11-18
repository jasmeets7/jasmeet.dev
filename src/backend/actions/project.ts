'use server';

import Connect from '@portfolio/db/connect';
import Project from '@portfolio/models/projects';
import { projectsSchema } from '@portfolio/validations/project';

export async function listProjects() {
  await Connect();
  try {
    const projects = await Project.find({});
    projectsSchema.parse(projects);
    return projects;
  } catch (error) {
    console.error(error);
  }
}
