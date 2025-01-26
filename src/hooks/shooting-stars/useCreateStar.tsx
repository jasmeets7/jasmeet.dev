'use client';
import { useEffect, useState } from 'react';

import { ShootingStar } from '@portfolio/domains/shooting-stars';
import { getRandomStartPoint } from '@portfolio/utils';
import { useMoveStar } from './useMoveStar';

export const useCreateStar = (
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200
) => {
  const [star, setStar] = useState<ShootingStar | null>(null);

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStar(newStar);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();

    return () => {};
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useMoveStar(star, setStar);

  return star;
};
