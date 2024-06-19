import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Password } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import {
  validationSchemaWithOldPassword,
  validationSchemaWithoutOldPassword,
  initialValues,
} from '../../models/changePassword';
import { changePassword } from '../../api/persons';
import { toaster } from '../../lib';
import { logout } from '../../api';

const ChangePasswordForm = ({ id, useOldPassword = true, logoutAfter = true }) => {
  const handleSubmit = async (values) => {
    try {
      await changePassword(id, {
        ...(useOldPassword === true && { oldPassword: values.oldPassword }),
        newPassword: values.newPassword,
      });
      toaster.success('Parola schimbata cu success');
      if (logoutAfter) {
        logout();
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      toaster.error(err?.message);
    }
  };
  return (
    <Formik
      validationSchema={
        useOldPassword ? validationSchemaWithOldPassword : validationSchemaWithoutOldPassword
      }
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-4">
        {useOldPassword && (
          <Fieldset name="oldPassword" label="Parola veche">
            <Field
              id="oldPassword"
              name="oldPassword"
              as={Password}
              autoFocus
              className="input"
              autoComplete="off"
            />
          </Fieldset>
        )}
        <Fieldset name="newPassword" label="Parola noua">
          <Field
            id="newPassword"
            name="newPassword"
            as={Password}
            className="input"
            autoComplete="off"
            autoFocus={!useOldPassword ? true : false}
          />
        </Fieldset>
        <Fieldset name="confirmPassword" label="Confirmă parola noua">
          <Field
            id="confirmPassword"
            name="confirmPassword"
            as={Password}
            className="input"
            autoComplete="off"
          />
        </Fieldset>
        <Submit className="bg-primary text-white px-8 py-2 rounded-md w-full ">
          Schimbă parola
        </Submit>
      </Form>
    </Formik>
  );
};

export default ChangePasswordForm;
