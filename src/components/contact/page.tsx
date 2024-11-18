import ResponseTime from './response-time';
import ContactMethods from './contact-methods';
import FormHeader from './form-header';
import ContactForm from './contact-form';

import style from './page.module.css';

const ContactPage: React.FC = () => {
  return (
    <div className={style.container}>
      <ResponseTime delay='100ms' />
      <ContactMethods delay='200ms' />
      <FormHeader delay='300ms' />
      <ContactForm delay='400ms' />
    </div>
  );
};

export default ContactPage;
