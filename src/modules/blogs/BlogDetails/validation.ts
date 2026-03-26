import { z } from 'zod';

export const validateNewsletter = z.object({
    email: z.string().email('Please enter a valid email address'),
});
