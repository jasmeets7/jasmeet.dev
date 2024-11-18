import MethodLink from '../method-link';
import { PropsWithChildren } from 'react';

import style from './method.module.css';
import FadeIn from '@portfolio/shared/fade-in';

const MethodsComponent: React.FC<PropsWithChildren<{ delay?: string }>> = ({
  delay,
  children,
}) => {
  return (
    <FadeIn delay={delay}>
      <div className={`${style.container}`}>{children}</div>
    </FadeIn>
  );
};

MethodLink.displayName = 'Method.Link';

export const Methods = Object.assign(MethodsComponent, {
  Link: MethodLink,
});
