import { Availability } from '@portfolio/icons/misc';
import FadeIn from '@portfolio/shared/fade-in';

export const ResponseTime: React.FC<{ delay?: string }> = ({ delay }) => {
  return (
    <FadeIn delay={delay}>
      <div className='flex items-center gap-1 bg-accent-900 p-1 rounded-sm border border-accent-800'>
        <Availability className='size-8 flex justify-center items-center' />
        <span>
          Average response time <b>24 Hours</b>
        </span>
      </div>
    </FadeIn>
  );
};
