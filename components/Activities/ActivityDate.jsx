import { Field, useFormikContext } from 'formik';
import React from 'react';
import { Fieldset } from '../Formik';
import { Datepicker } from '../Fields';

const ActivityDate = () => {
  const { setFieldValue } = useFormikContext();
  const handleProjectDateChange = (date) => {
    setFieldValue('date', date);
  };
  return (
    <Fieldset name="date" label="Data activității">
      <Field
        name="date"
        id="date"
        as={Datepicker}
        onChange={handleProjectDateChange}
        className="input"
      />
    </Fieldset>
  );
};

export default ActivityDate;
