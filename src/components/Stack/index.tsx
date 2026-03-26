import { Children, ElementType, Fragment, ReactNode, useMemo } from 'react';

import { cn } from '@/lib';
import { VariantProps } from 'class-variance-authority';

import stackVariants from './mapping';

type StackVariants = VariantProps<typeof stackVariants>;

type Props = StackVariants & {
  /** rendered between items */
  divider?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export type StackProps<C extends ElementType = 'div'> = PolymorphicProps<C, Props>;

function Stack<Element extends ElementType = 'div'>({
  ref,
  component,
  direction,
  justifyContent,
  alignItems,
  flexWrap,
  divider,
  className,
  children: _children,
  ...props
}: StackProps<Element>) {
  const Component = component ?? 'div';

  const children = useMemo(() => {
    const childrenArray = Children.toArray(_children);
    return childrenArray.map((child, index) => {
      if (index === 0) return child;

      // @ts-expect-error Due to child.key is any type
      const key = child.key || index;

      return (
        <Fragment key={key}>
          {divider}
          {child}
        </Fragment>
      );
    });
  }, [_children, divider]);

  return (
    <Component
      ref={ref}
      className={cn(stackVariants({ direction, justifyContent, alignItems, flexWrap }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Stack;
