import { z } from 'zod';

export const validateJoinUs = z.object({
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email address'),
    whyIdrm: z.string().min(1, 'This field is required'),
});
