'use client';

import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver<T extends HTMLElement>(
  options?: IntersectionObserverInit
): [React.RefObject<T>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);

    observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isVisible];
}
