import Link from 'next/link';

import { TProjectSchema } from '@portfolio/validations/project';

import { GitHub } from '@portfolio/icons/socials';
import { ExternalLink } from '@portfolio/icons/misc';

import FadeIn from '@portfolio/shared/fade-in';
import style from './project-card.module.css';

export const Project: React.FC<{ project: TProjectSchema; delay: string }> = ({
  project,
  delay,
}) => (
  <FadeIn delay={delay}>
    <div>
      <div className={style.card}>
        <div className={style.header_group}>
          <div className={style.title}>{project.name}</div>
          <div className={style.links_group}>
            {project.github && (
              <Link
                href={project.github}
                target='_blank'
              >
                <GitHub />
              </Link>
            )}
            {project.url && (
              <Link
                href={project.url}
                target='_blank'
              >
                <ExternalLink />
              </Link>
            )}
          </div>
        </div>
        <div className={style.description}>{project.description}</div>
        <div className={style.badge_container}>
          {project.tags.map((tag) => (
            <span
              key={`${Math.random()}`}
              className={style.badge}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </FadeIn>
);
