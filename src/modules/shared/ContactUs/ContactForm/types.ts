import { z } from 'zod';

import { validateContact } from './validation';

export type ContactType = z.infer<typeof validateContact>;
