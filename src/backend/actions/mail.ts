'use server';

import Connect from '@portfolio/db/connect';
import Mail from '@portfolio/models/mail';
import { emailSchema, TEmailSchema } from '@portfolio/validations/mail';

export async function sendMail(email: TEmailSchema) {
  await Connect();
  try {
    emailSchema.parse(email);
    const mail = new Mail(email);
    const { id } = await mail.save();
    return id;
  } catch (error) {
    console.error(error);
  }
}
