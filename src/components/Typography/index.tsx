import React, { ElementType, ReactNode } from 'react';

import { cn } from '@/lib';

import { typographyVariants } from './helpers';
import { variantMapping } from './mappings';
import type { Variant } from './types';

interface Props {
  /**
   * @default 'body'
   */
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export type TypographyProps<C extends ElementType = 'span'> = PolymorphicProps<C, Props>;

function Typography<C extends ElementType = 'span'>({
  ref,
  component,
  variant = 'body',
  className,
  children,
  ...props
}: TypographyProps<C>) {
  const Component = component ?? variantMapping[variant];

  return (
    <Component ref={ref} className={cn(typographyVariants({ variant }), className)} {...props}>
      {children}
    </Component>
  );
}

export default Typography;
