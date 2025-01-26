import { Loading as Spinner } from '@portfolio/icons/misc';

const Loading: React.FC = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <Spinner className='size-20 animate-spin fill-primary-600' />
    </div>
  );
};

export default Loading;
