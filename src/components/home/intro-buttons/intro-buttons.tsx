import Link from 'next/link';

import FadeIn from '@portfolio/shared/fade-in';

import { Mail } from '@portfolio/icons/socials';
import { User } from '@portfolio/icons/misc';

export const IntroButtons: React.FC = () => {
  return (
    <div className='flex gap-4'>
      <FadeIn
        key={3}
        delay={`300ms`}
      >
        <Link
          href='/contact'
          className='group relative w-44 cursor-pointer overflow-hidden rounded-md border-none bg-primary-600 p-2 text-center font-semibold'
        >
          <span className='inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0'>
            Let&apos;s Connect
          </span>
          <div className='absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100'>
            <span>Let&apos;s Connect</span>
            <Mail />
          </div>
          <div className='absolute left-[10%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary-700 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary'></div>
        </Link>
      </FadeIn>
      <FadeIn
        key={5}
        delay={`400ms`}
      >
        <Link
          href='/about'
          className='group relative w-44 cursor-pointer overflow-hidden rounded-md border-none bg-accent-600 p-2 text-center font-semibold hover:border-accent-700'
        >
          <span className='inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0'>
            About Me
          </span>
          <div className='absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100'>
            <span>About Me</span>
            <User />
          </div>
          <div className='absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-accent-700 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-accent-700'></div>
        </Link>
      </FadeIn>
    </div>
  );
};
