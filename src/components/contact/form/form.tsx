import { PropsWithChildren } from 'react';
import style from './form.module.css';

import FormGroup from '../form-group';
import FormField from '../form-field';
import FormState from '../form-state';

import FadeIn from '@portfolio/shared/fade-in';
import SubmitButton from '../submit-button';

export const FormComponent: React.FC<
  PropsWithChildren<{ onSubmit: () => Promise<void>; delay?: string }>
> = ({ onSubmit, delay, children }) => {
  return (
    <FadeIn delay={delay}>
      <form
        onSubmit={onSubmit}
        className={`${style.container}`}
      >
        {children}
      </form>
    </FadeIn>
  );
};

FormGroup.displayName = 'Form.Group';
FormField.displayName = 'Form.Field';
FormState.displayName = 'Form.State';
SubmitButton.displayName = 'Form.Submit';

export const Form = Object.assign(FormComponent, {
  Group: FormGroup,
  Field: FormField,
  State: FormState,
  Submit: SubmitButton,
});
