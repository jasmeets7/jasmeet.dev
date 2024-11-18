interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <span className='text-red-700'>{message}</span>
);
