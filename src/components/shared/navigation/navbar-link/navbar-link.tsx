'use client';

import Link from 'next/link';
import { PropsWithChildren } from 'react';

import style from './navbar-link.module.css';
import { usePathname } from 'next/navigation';
import { useNavigationContext } from '@portfolio/hooks/navigation';

export const NavbarLink: React.FC<PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  const currentRoute = usePathname();
  const { setNavigationState } = useNavigationContext();
  return (
    <Link
      className={`${style.link} ${currentRoute === href ? style.active : ''}`}
      href={href}
      onClick={() => setNavigationState(false)}
    >
      {children}
    </Link>
  );
};
