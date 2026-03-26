import { ReactNode } from 'react';

export interface ForScreenProps {
  /**
   *  It takes min or max width and it should be with **min-** or **max-** prefix, you can't use range syntax and must be wrapped in parentheses inside the expression.
   *
   *  @example max-width -> `(max-width: 1024px)`
   *  @example min-width -> `(min-width: 1024px)`
   *  @example both -> `(min-width: 512px) and (max-width: 1024px)`
   *
   *  For more info visit:
   *   @link https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
   */
  mediaQuery?: string;
  children: ReactNode;
}
