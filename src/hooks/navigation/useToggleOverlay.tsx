'use client';

import { useEffect, useRef } from 'react';
import { useNavigationContext } from './useNavigationContext';

export function useToggleOverlay() {
  const { isOpen, setNavigationState } = useNavigationContext();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = () => {
      setNavigationState(false);
    };

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        close();
      }
    }

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        close();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setNavigationState]);

  return ref;
}
