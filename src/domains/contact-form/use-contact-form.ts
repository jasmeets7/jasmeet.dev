import { TEmailSchema } from '@portfolio/validations/mail';
import { UseFormReturn } from 'react-hook-form';
import { FormState } from './form-state';

export interface UseContactForm {
  formMethods: UseFormReturn<TEmailSchema>;
  formState: FormState;
  handleSubmit: () => Promise<void>;
  resetStatus: () => void;
}
