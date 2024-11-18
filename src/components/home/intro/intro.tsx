import IntroBlocks from '../intro-blocks';
import IntroButtons from '../intro-buttons';
import Typewriter from '../typewriter';

import { DEFAULT_TYPEWRITER } from '@portfolio/defaults/typewriter';

export const Intro: React.FC = () => {
  return (
    <div className='flex flex-wrap flex-col gap-2 w-[inherit] md:px-4 max-w-[37.5rem]'>
      <Typewriter {...DEFAULT_TYPEWRITER} />
      <IntroBlocks />
      <IntroButtons />
    </div>
  );
};
