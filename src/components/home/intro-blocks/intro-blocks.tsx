import FadeIn from '@portfolio/shared/fade-in';

export const IntroBlocks: React.FC = () => {
  return (
    <div className='flex flex-col gap-1 text-center'>
      <FadeIn delay='100ms'>
        <p className='text-accent-50'>
          I&apos;m a Full Stack Software Developer living in Ottawa, Ontario.
        </p>
      </FadeIn>
      <FadeIn delay='200ms'>
        <p className='text-accent-50'>
          Recently, I worked at VectorSolv Corp, where we transformed the
          warranty industry by enhancing customer experiences and streamlining
          operations with innovative SaaS solutions.
        </p>
      </FadeIn>
    </div>
  );
};
