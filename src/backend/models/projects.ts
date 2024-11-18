import mongoose, { Schema, Document, Model } from 'mongoose';

interface Project extends Document {
  name: string;
  description: string;
  tags: string[];
  order: number;
  url?: string | undefined;
}

const ProjectSchema: Schema<Project> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  order: { type: Number, required: true },
  url: { type: String, required: true },
});

const Project: Model<Project> =
  mongoose.models.Project || mongoose.model<Project>('Project', ProjectSchema);

export default Project;
