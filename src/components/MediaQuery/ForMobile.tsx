'use client';

import { useMediaQuery } from '@/lib/hooks';

import { ForScreenProps } from './types';

interface ForMobileProps extends ForScreenProps {}

export default function ForMobile({ mediaQuery = `(max-width: 640px)`, children }: ForMobileProps) {
  const isMobile = useMediaQuery(mediaQuery);
  if (!isMobile) return null;
  return <>{children}</>;
}
