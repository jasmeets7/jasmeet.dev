import { Check, Exclamation } from '@portfolio/icons/misc';

import style from './form-state.module.css';
import { FormStatus } from '@portfolio/domains/contact-form';

interface FormStateProps {
  message?: string;
  type: FormStatus;
}

export const FormState: React.FC<FormStateProps> = ({ type, message }) => (
  <div
    className={`${style.message} ${
      type === 'success' ? style.success : style.error
    } ${type !== 'idle' ? 'opacity-100' : 'opacity-0'}`}
  >
    {type === 'success' ? <Check /> : type === 'error' ? <Exclamation /> : null}
    {message && <span>{message}</span>}
  </div>
);
