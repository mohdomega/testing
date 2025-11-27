'use client';

import { useMediaQuery } from '@/lib/hooks';

import { ForScreenProps } from './types';

interface ForDesktopProps extends ForScreenProps {}

export default function ForDesktop({ mediaQuery = `(min-width: 1024px)`, children }: ForDesktopProps) {
  const isDesktop = useMediaQuery(mediaQuery);
  if (!isDesktop) return null;
  return <>{children}</>;
}
