import { Field, Form, Formik } from 'formik';
import { useRef } from 'react';
import { login } from '../api';
import { initialValues, validationSchema } from '../models/login';
import { Email, Password, Recaptcha } from './Fields';
import { Fieldset, Submit } from './Formik';

const LoginFormRomanian = () => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await login(ref, values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="login-form space-y-4">
        <Fieldset name="email" label="Adresa de e-mail">
          <Field id="email" placeholder="nume@email.com" name="email" as={Email} autoFocus />
        </Fieldset>

        <Fieldset name="password" label="Parola">
          <Field id="password" placeholder="•••••••••••••" name="password" as={Password} />
        </Fieldset>

        <Submit className="button full primary w-full rounded-lg text-base sm:text-sm font-medium p-2.5">
          Autentificare
        </Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default LoginFormRomanian;
