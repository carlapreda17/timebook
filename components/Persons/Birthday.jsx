import { Field, useFormikContext } from 'formik';
import React from 'react';
import { Fieldset } from '../Formik';
import { Datepicker } from '../Fields';

const Birthday = () => {
  const { setFieldValue } = useFormikContext();
  const handleBirthdayChange = (date) => {
    setFieldValue('birthday', date);
  };
  return (
    <Fieldset name="birthday" label="Data nasterii">
      <Field id="birthday" name="birthday" as={Datepicker} onChange={handleBirthdayChange} />
    </Fieldset>
  );
};

export default Birthday;
