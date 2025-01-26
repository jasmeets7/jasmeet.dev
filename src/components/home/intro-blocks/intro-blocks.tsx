import FadeIn from '@portfolio/shared/fade-in';

export const IntroBlocks: React.FC = () => {
  return (
    <>
      <FadeIn delay='100ms'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-8'>
          Hello, I&apos;m Jasmeet
        </h1>
      </FadeIn>
      <FadeIn delay='200ms'>
        <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4'>
          I&apos;m a{' '}
          <span className='text-primary-400'>Full Stack Product Developer</span>{' '}
          living in <span className='text-primary-400'>Ottawa, Ontario</span>.
        </p>
      </FadeIn>
      <FadeIn delay='300ms'>
        <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 mb-4'>
          Recently, I worked at VectorSolv Corp, where we transformed the
          warranty industry by enhancing customer experiences and streamlining
          operations with innovative SaaS solutions.
        </p>
      </FadeIn>
    </>
  );
};
