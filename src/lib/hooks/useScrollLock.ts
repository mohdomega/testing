'use client';

import { useEffect } from 'react';

/**
 * Hook to lock body scroll when a component (like a modal or menu) is active.
 * Adds the 'no-scroll' class to both html and body elements.
 */
export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const html = document.documentElement;
    const body = document.body;

    if (isLocked) {
      html.classList.add('no-scroll');
      body.classList.add('no-scroll');
    } else {
      html.classList.remove('no-scroll');
      body.classList.remove('no-scroll');
    }

    // Clean up to ensure scroll is restored if component unmounts while locked
    return () => {
      html.classList.remove('no-scroll');
      body.classList.remove('no-scroll');
    };
  }, [isLocked]);
}
