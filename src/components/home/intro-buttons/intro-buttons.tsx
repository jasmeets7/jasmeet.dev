import Link from 'next/link';

import FadeIn from '@portfolio/shared/fade-in';

import { Mail } from '@portfolio/icons/socials';
import { User } from '@portfolio/icons/misc';

export const IntroButtons: React.FC = () => {
  return (
    <div className='flex flex-col gap-1 text-justify lg:flex-row lg:gap-4 w-[-webkit-fill-available]'>
      <FadeIn
        key={3}
        delay={`300ms`}
      >
        <div className='flex-1'>
          <Link
            href='/contact'
            className='btn btn-primary gap-1'
          >
            <Mail />
            Let&apos;s Connect
          </Link>
        </div>
      </FadeIn>
      <FadeIn
        key={5}
        delay={`400ms`}
      >
        <div className='flex-1'>
          <Link
            href='/about'
            className='btn btn-secondary gap-1'
          >
            <User />
            About Me
          </Link>
        </div>
      </FadeIn>
    </div>
  );
};
