import { ComponentProps, ElementType, PropsWithChildren } from 'react';

declare global {
  export type DistributiveOmit<Element, TOmitted extends keyof any> = Element extends any
    ? Omit<Element, TOmitted>
    : never;

  export type PolymorphicProps<Element extends ElementType, Props = {}> = PropsWithChildren<
    Props & Omit<ComponentProps<Element>, 'component'>
  > & {
    component?: Element;
  };

  export type PolymorphicComponent<Element extends ElementType, Props = {}> = (
    props: PolymorphicProps<Element, Props>
  ) => Element;

  export type SearchParams = Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}
