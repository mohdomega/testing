'use client';

import { useMediaQuery } from '@/lib/hooks';

import { ForScreenProps } from './types';

interface ForTabletProps extends ForScreenProps {}

export default function ForTablet({ mediaQuery = `(max-width: 1024px)`, children }: ForTabletProps) {
  const isTablet = useMediaQuery(mediaQuery);
  if (!isTablet) return null;
  return <>{children}</>;
}
