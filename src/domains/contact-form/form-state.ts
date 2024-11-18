export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface FormState {
  state: FormStatus;
  message?: string;
}
