import { Mail } from '@portfolio/icons/socials';
import FadeIn from '@portfolio/shared/fade-in';

export const FormHeader: React.FC<{ delay?: string }> = ({ delay }) => {
  return (
    <FadeIn delay={delay}>
      <div className='flex items-center gap-2 text-lg px-4 py-1 rounded-sm border bg-accent-900 border-accent-800'>
        <Mail className='size-5' />
        Get in touch
      </div>
    </FadeIn>
  );
};
