'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Logo } from '@portfolio/icons/misc';
import { useToggleOverlay } from '@portfolio/hooks/navigation';

import FadeIn from '../fade-in';
import Socials from './socials';
import Navbar from './navbar';

import style from './navigation.module.css';

export const Navigation: React.FC = () => {
  const ref = useToggleOverlay();
  const currentRoute = usePathname();

  return (
    <>
      <div className={`${style.contianer} z-50`}>
        {currentRoute !== '/' ? (
          <FadeIn>
            <Link
              href='/'
              className='flex pt-4 items-center gap-0.5 pl-4 md:pl-8 lg:pl-12'
            >
              <Logo className='size-7' />
              <span className='text-xl'>Jasmeet Singh</span>
            </Link>
          </FadeIn>
        ) : (
          <div />
        )}
        <div className='flex items-center'>
          <Socials />
          <Navbar.Toggle />
        </div>
      </div>
      <div ref={ref}>
        <Navbar>
          <Navbar.Link href='/'>Home</Navbar.Link>
          <Navbar.Link href='/about'>About Me</Navbar.Link>
          <Navbar.Link href='/portfolio'>Portfolio</Navbar.Link>
          <Navbar.Link href='/contact'>Contact</Navbar.Link>
        </Navbar>
      </div>
    </>
  );
};
