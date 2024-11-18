import Link from 'next/link';

import { TECHNOLOGIES } from '@portfolio/defaults/technologies';
import FadeIn from '@portfolio/shared/fade-in';
import style from './technologies.module.css';

export const Technologies: React.FC<{ delay?: string }> = ({ delay }) => (
  <FadeIn delay={delay}>
    <div className={style.container}>
      <h3>Technologies I have used</h3>
      <p className={style.sub_heading}>
        I&apos;ve worked with a range of tools and technologies to bring ideas
        to life
      </p>
      <div className={style.technologies}>
        {TECHNOLOGIES.map((Technology) => (
          <Link
            href={Technology.url}
            key={Technology.name}
            className={style.technology_link}
            target='_blank'
            about={Technology.name}
            title={Technology.name}
          >
            <Technology.Icon className={style.technology_icon} />
          </Link>
        ))}
      </div>
    </div>
  </FadeIn>
);
