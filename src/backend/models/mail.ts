import mongoose, { Schema, Document, Model } from 'mongoose';

interface Mail extends Document {
  firstName: string;
  lastName: string | null;
  email: string;
  phoneNumber: string | null;
  message: string;
}

const MailSchema: Schema<Mail> = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  message: { type: String, required: true },
});

const MailModel: Model<Mail> =
  mongoose.models.Mail || mongoose.model<Mail>('Mail', MailSchema);

export default MailModel;
