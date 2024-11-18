import { Loading, Send } from '@portfolio/icons/misc';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => (
  <button
    type='submit'
    disabled={isSubmitting}
    className='btn btn-primary px-2 w-full min-w-full md:min-w-40 gap-1'
  >
    {!isSubmitting ? (
      <>
        <Send className='size-5 -rotate-45 pb-1' />
        <span>Send Message</span>
      </>
    ) : (
      <>
        <Loading className='size-5 animate-spin' />
        <span>Sending</span>
      </>
    )}
  </button>
);
