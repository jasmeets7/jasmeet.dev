import Link from 'next/link';
import style from './socials.module.css';
import { GitHub, LinkedIn, Mail } from '@portfolio/icons/socials';
import FadeIn from '@portfolio/shared/fade-in';

export const Socials: React.FC = () => (
  <div className={`${style.socials}`}>
    <FadeIn delay='25ms'>
      <div>
        <Link
          href='mailto:contact@jasmeet.dev'
          target='_blank'
        >
          <Mail className={`${style.icon}`} />
        </Link>
      </div>
    </FadeIn>
    <FadeIn delay='50ms'>
      <div>
        <Link
          href='https://github.com/jasmeets7'
          target='_blank'
        >
          <GitHub className={`${style.icon}`} />
        </Link>
      </div>
    </FadeIn>
    <FadeIn delay='75ms'>
      <div>
        <Link
          href='https://www.linkedin.com/in/jasmeet-singh7'
          target='_blank'
        >
          <LinkedIn className={`${style.icon}`} />
        </Link>
      </div>
    </FadeIn>
  </div>
);
