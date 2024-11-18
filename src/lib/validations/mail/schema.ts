import { z } from 'zod';

const firstName = z.string().trim().min(1, 'is required');
const lastName = z.string().trim().optional();
const email = z.string().trim().email('is invalid');
const phoneNumber = z
  .string()
  .trim()
  .optional()
  .refine(
    (val) =>
      val === '' || /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(val || ''),
    {
      message: 'is invalid',
    }
  );
const message = z.string().trim().min(5, 'must be at least 5 characters');

export const emailSchema = z.object({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
});

export type TEmailSchema = z.infer<typeof emailSchema>;
