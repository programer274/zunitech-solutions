import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectDetails: z.string().min(20, 'Please describe your project in at least 20 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
