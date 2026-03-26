import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'flex gap-2 px-8 py-4 rounded-full text-base font-medium cursor-pointer max-sm:px-4 max-sm:py-3 max-sm:text-sm',
  {
    variants: {
      variant: {
        contained: '',
        outlined: 'border border-white/10 text-white',
        text: 'text-primary-dark',
        icon: 'p-0',
      },
      color: {
        primary: '',
        accent: '',
        gradient: '',
      },
    },
    compoundVariants: [
      {
        variant: 'contained',
        color: 'primary',
        className: 'bg-white text-primary-dark',
      },
      {
        variant: 'contained',
        color: 'accent',
        className: 'bg-accent text-primary-dark',
      },
      {
        variant: 'contained',
        color: 'gradient',
        className: 'gradient-vertical text-white',
      },
    ],
    defaultVariants: {
      variant: 'contained',
      color: 'gradient',
    },
  }
);
