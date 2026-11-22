'use client';

import { FadeInProps } from '@portfolio/domains/fade-in';
import { useIntersectionObserver } from '@portfolio/hooks/fade-in';

export const FadeIn: React.FC<React.PropsWithChildren<FadeInProps>> = ({
  children,
  delay,
  className,
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  if (!delay) return children;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(4vh)',
        transition: 'all 0.6s ease-out, transform 1s ease-out',
        transitionDelay: delay,
      }}
    >
      {children}
    </div>
  );
};
