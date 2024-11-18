'use client';

import { useContactForm } from '@portfolio/hooks/contact-form';
import Form from '../form';

export const ContactForm: React.FC<{ delay?: string }> = ({ delay }) => {
  const { formMethods, formState, handleSubmit } = useContactForm();
  const {
    register,
    formState: { errors, isSubmitting },
  } = formMethods;

  return (
    <Form
      onSubmit={handleSubmit}
      delay={delay}
    >
      <Form.Group>
        <Form.Field
          id='firstName'
          label='First Name'
          register={register('firstName')}
          type='text'
          placeholder='John'
          error={errors.firstName}
        />
        <Form.Field
          id='lastName'
          label='Last Name'
          register={register('lastName')}
          type='text'
          placeholder='Doe'
          error={errors.lastName}
        />
      </Form.Group>
      <Form.Group>
        <Form.Field
          id='email'
          label='E-mail'
          register={register('email')}
          type='email'
          placeholder='john@doe.com'
          error={errors.email}
        />
        <Form.Field
          id='phoneNumber'
          label='Phone Number'
          register={register('phoneNumber')}
          type='tel'
          placeholder='(123) 456-7890'
          error={errors.phoneNumber}
        />
      </Form.Group>
      <Form.Field
        id='message'
        label='Message'
        register={register('message')}
        type='textarea'
        placeholder='Leave a message....'
        error={errors.message}
      />
      <div className='flex flex-col items-center gap-2 md:flex-row md:self-start'>
        <Form.Submit isSubmitting={isSubmitting} />
        <Form.State
          message={formState.message}
          type={formState.state}
        />
      </div>
    </Form>
  );
};
