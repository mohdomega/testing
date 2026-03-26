'use client';

import { ElementType, ReactNode } from 'react';

import { cn } from '@/lib';
import { VariantProps } from 'class-variance-authority';

import Loader from '../Loader';
import { buttonVariants } from './mapping';
import useButton, { UseButton } from './vm';

type ButtonVariants = VariantProps<typeof buttonVariants>;

export type Props = UseButton &
  ButtonVariants & {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    /**
     * displayed when an async operation is ongoing.
     * Button is disabled automatically to block the user interactions
     * */
    loader?: ReactNode;
    /**
     * @default false
     */
    disabled?: boolean;
    className?: string;
    children?: ReactNode;
  };

export type ButtonProps<C extends ElementType = 'button'> = PolymorphicProps<C, Props>;

function Button<Element extends ElementType = 'button'>({
  ref,
  component,
  variant = 'contained',
  color,
  startIcon,
  endIcon,
  loader,
  disabled = false,
  className = '',
  children,
  isLoading = false,
  onClick,
  ...props
}: ButtonProps<Element>) {
  const Component = component ?? 'button';

  const { isLoading: _isLoading, handleClick } = useButton({
    isLoading,
    onClick,
  });

  return (
    <Component
      ref={ref}
      className={cn(
        'flex justify-center items-center gap-2 rounded-sm',
        buttonVariants({ variant, color }),
        className
      )}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {startIcon}
      {children}
      {_isLoading ? loader || <Loader /> : endIcon}
    </Component>
  );
}

export default Button;
