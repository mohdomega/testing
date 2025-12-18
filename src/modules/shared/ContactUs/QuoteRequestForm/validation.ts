import { z } from 'zod';

export const validateQuoteRequest = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().optional().nullable(),
  service: z.string().min(1, 'Service selection is required'),
  budget: z.string().optional().nullable(),
  deliveryTime: z.string().min(1, 'Delivery time selection is required'),
  formType: z.enum(['quote', 'request']).optional(),
});
