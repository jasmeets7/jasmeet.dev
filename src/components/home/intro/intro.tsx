import IntroBlocks from '../intro-blocks';
import IntroButtons from '../intro-buttons';

export const Intro: React.FC = () => {
  return (
    <div className='relative z-10 flex flex-col items-center justify-center h-full text-center'>
      <IntroBlocks />
      <IntroButtons />
    </div>
  );
};
