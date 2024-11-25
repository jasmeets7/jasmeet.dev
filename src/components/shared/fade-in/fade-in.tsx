'use client';

import { FadeInProps } from '@portfolio/domains/fade-in';
import { useIntersectionObserver } from '@portfolio/hooks/fade-in';
import { cloneElement, isValidElement, ReactElement } from 'react';

export const FadeIn: React.FC<React.PropsWithChildren<FadeInProps>> = ({
  children,
  delay,
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  if (!delay) return children;

  if (!isValidElement(children)) {
    console.error('FadeIn expects a single React element as a child.');
    return null;
  }

  const childWithFadeIn = cloneElement(children as ReactElement, {
    ref,
    style: {
      ...children.props.style,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(4vh)',
      transition: 'all 0.6s ease-out, transform 1s ease-out',
      transitionDelay: delay,
    },
    className: `${children.props.className || ''}`,
  });

  return childWithFadeIn;
};
