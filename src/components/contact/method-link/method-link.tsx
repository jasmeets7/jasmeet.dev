import Link from 'next/link';
import style from './method-link.module.css';
import { PropsWithChildren } from 'react';

const MethodLink: React.FC<PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  return (
    <Link
      className={`${style.link}`}
      href={href}
      target='_blank'
    >
      {children}
    </Link>
  );
};

export default MethodLink;
