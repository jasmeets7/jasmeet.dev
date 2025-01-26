'use client';
import { ShootingStarsProps } from '@portfolio/domains/shooting-stars';
import { useCreateStar } from '@portfolio/hooks/shooting-stars';
import { cn } from '@portfolio/utils';

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  starColor = '#9E00FF',
  trailColor = '#2EB9DF',
  starWidth = 10,
  starHeight = 1,
  minSpeed,
  maxSpeed,
  minDelay,
  maxDelay,
  className,
}) => {
  const star = useCreateStar(minSpeed, maxSpeed, minDelay, maxDelay);

  return (
    <svg className={cn('w-full h-full absolute inset-0', className)}>
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill='url(#gradient)'
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient
          id='gradient'
          x1='0%'
          y1='0%'
          x2='100%'
          y2='100%'
        >
          <stop
            offset='0%'
            style={{ stopColor: trailColor, stopOpacity: 0 }}
          />
          <stop
            offset='100%'
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
