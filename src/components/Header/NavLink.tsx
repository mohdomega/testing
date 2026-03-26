'use client';

import { ReactNode } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  className?: string;
  children?: ReactNode;
  onClick?: any;
}

export default function NavLink({ href, className, children, onClick }: NavLink) {
  const pathname = usePathname();

  return (
    <Link href={href} data-active={pathname === href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
