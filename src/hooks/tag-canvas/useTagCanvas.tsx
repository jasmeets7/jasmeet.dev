'use client';

import { useEffect, useRef } from 'react';
import { TagCanvasOptions } from '@portfolio/domains/tag-canvas';
import { getStyle } from '@portfolio/getStyle';

export const useTagCanvas = (
  canvasId: string,
  options: TagCanvasOptions
): React.RefObject<HTMLCanvasElement> => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const textColour = getStyle('--color-accent-50');
    const textHeight = getStyle('--tag-font-size');

    const shapes = ['sphere', 'vring', 'hring'];
    const shape = shapes[Math.floor(Math.random() * 3)];

    const script = document.createElement('script');
    script.src = 'https://www.goat1000.com/tagcanvas.min.js';
    script.onload = () => {
      if (window.TagCanvas && canvasRef.current) {
        try {
          window.TagCanvas.Start(canvasId, 'tags', {
            ...options,
            textColour,
            textHeight,
            shape,
          });
        } catch (error) {
          console.error('TagCanvas initialization error:', error);
        }
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [canvasId, options]);

  return canvasRef;
};
