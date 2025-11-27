import { z } from 'zod';

export const validateContact = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  message: z.string().optional(),
});
