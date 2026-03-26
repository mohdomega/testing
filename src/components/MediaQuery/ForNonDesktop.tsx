'use client';

import { useMediaQuery } from '@/lib/hooks';

import { ForScreenProps } from './types';

interface ForNonDesktopProps extends ForScreenProps {}

export default function ForNonDesktop({ mediaQuery = `(max-width: 1024px)`, children }: ForNonDesktopProps) {
  const isNonDesktop = useMediaQuery(mediaQuery);
  if (!isNonDesktop) return null;
  return <>{children}</>;
}
