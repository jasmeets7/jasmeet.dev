import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormState, UseContactForm } from '@portfolio/domains/contact-form';
import { emailSchema, TEmailSchema } from '@portfolio/validations/mail';
import { DEFAULT } from '@portfolio/defaults/contact-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendMail } from '@portfolio/actions/mail';

export const useContactForm = (): UseContactForm => {
  const [formState, setFormState] = useState<FormState>({
    state: 'idle',
  });
  const formMethods = useForm<TEmailSchema>({
    defaultValues: DEFAULT,
    reValidateMode: 'onBlur',
    resolver: zodResolver(emailSchema),
  });

  const { reset } = formMethods;

  useEffect(() => {
    if (formState.state === 'success') {
      const timer = setTimeout(
        () =>
          setFormState(() => ({
            state: 'idle',
          })),
        2000
      );
      return () => clearTimeout(timer);
    }
  }, [formState]);

  const handleSubmit = formMethods.handleSubmit(async (mail: TEmailSchema) => {
    try {
      const id = await sendMail(mail);
      if (typeof id === 'string') {
        setFormState(() => ({
          state: 'success',
          message: 'Email sent successfuly',
        }));
        reset(DEFAULT);
      } else {
        setFormState(() => ({
          state: 'error',
          message: 'Something went wrong, please try again later',
        }));
      }
    } catch (error) {
      setFormState(() => ({
        state: 'error',
        message: (error as Error).message,
      }));
    }
  });

  const resetStatus = () =>
    setFormState(() => ({
      state: 'idle',
    }));

  return {
    formMethods,
    formState,
    handleSubmit,
    resetStatus,
  };
};
