import { PropsWithChildren } from 'react';

export const FormGroup: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='flex flex-col md:flex-row gap-4'>{children}</div>;
};
