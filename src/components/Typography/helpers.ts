import { cva } from 'class-variance-authority';

export const typographyVariants = cva('', {
  variants: {
    variant: {
      // h1: 'text-6xl',
      // h2: 'text-6xl font-medium max-lg:text-4xl max-sm:text-2xl',
      h1: 'text-[56px] max-lg:text-4xl max-sm:text-2xl',
      h2: 'text-[56px] font-medium max-lg:text-4xl max-sm:text-2xl',
      h3: 'text-4xl max-lg:text-xl max-sm:text-md',
      h4: 'text-3xl max-lg:text-xl max-sm:text-md',
      h5: 'text-2xl max-lg:text-xl max-sm:text-md',
      h6: 'text-xl max-lg:text-md max-sm:text-sm',
      body: 'text-base max-sm:text-sm',
      body2: 'text-md max-lg:text-base max-sm:text-sm',
      title: 'text-xl max-lg:text-base max-sm:text-sm',
      subtitle: 'text-lg max-lg:text-md max-sm:text-sm',
      small: 'text-sm max-sm:text-xs',
    },
  },
});
