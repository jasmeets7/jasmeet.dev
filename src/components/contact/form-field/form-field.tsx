import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import ErrorMessage from '../error-message';
import style from './form-field.module.css';

interface FormFieldProps {
  label: string;
  id: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  register: UseFormRegisterReturn;
  placeholder: string;
  error?: FieldError;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type,
  register,
  placeholder,
  error,
}) => (
  <div className='flex flex-col flex-1'>
    <label
      htmlFor={id}
      className={`pb-1 ${error ? 'text-red-700' : ''}`}
    >
      {label} {error && <ErrorMessage message={error.message} />}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        className={`${style.input}`}
        placeholder={placeholder}
        {...register}
      />
    ) : (
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${style.input}`}
        {...register}
      />
    )}
  </div>
);
