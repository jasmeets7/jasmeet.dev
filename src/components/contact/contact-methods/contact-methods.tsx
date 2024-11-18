import { LinkedIn } from '@portfolio/icons/socials';
import Methods from '../methods';

export const ContactMethods: React.FC<{ delay?: string }> = ({ delay }) => {
  return (
    <Methods delay={delay}>
      <Methods.Link href='https://calendly.com/contact-jasmeet/30min'>
        <p className='text-accent-50'>Hire Me</p>
        <p className='text-sm text-green-300'>Schedule a meeting</p>
      </Methods.Link>
      <Methods.Link href='mailto:hello@jasmeet.dev'>
        <p className='text-accent-50'>hello@jasmeet.dev</p>
        <p className='text-sm text-accent-300'>Say Hello!</p>
      </Methods.Link>
      <Methods.Link href='https://www.linkedin.com/in/jasmeet-singh7'>
        <p className='flex gap-1 items-center text-accent-50'>
          <LinkedIn />
          Jasmeet Singh
        </p>
        <p className='text-sm text-accent-300'>Ask me anything</p>
      </Methods.Link>
    </Methods>
  );
};
