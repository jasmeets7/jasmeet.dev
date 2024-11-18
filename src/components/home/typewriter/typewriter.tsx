'use client';

import { TypewriterProps } from '@portfolio/domains/typewriter';

import Writer from 'typewriter-effect';

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  typingSpeed,
  cursor,
}) => (
  <div className='self-center min-w-[288px] min-h-7 text-center lg:min-h-8'>
    <Writer
      onInit={(typewriter) => {
        typewriter.changeDelay(typingSpeed).typeString(text).start();
      }}
      options={{
        cursor: cursor,
        cursorClassName: 'Typewriter__cursor text-primary-300',
        wrapperClassName: 'Typewriter__wrapper',
      }}
    />
  </div>
);
