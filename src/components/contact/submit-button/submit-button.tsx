import { Loading, Send } from '@portfolio/icons/misc';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => (
  <button className='group relative w-80 cursor-pointer overflow-hidden rounded-md border-none bg-primary-600 p-2 text-center font-semibold'>
    <span className='inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0'>
      {!isSubmitting ? 'Send Message' : 'Sending'}
    </span>
    <div className='absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100'>
      <span>{!isSubmitting ? 'Send Message' : 'Sending'}</span>
      {!isSubmitting ? (
        <Send className='size-5 -rotate-45 pb-1' />
      ) : (
        <Loading className='size-5 animate-spin' />
      )}
    </div>
    <div
      className={`absolute ${
        isSubmitting ? 'left-[20%]' : 'left-[7%]'
      } top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary-700 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary`}
    ></div>
  </button>
);
