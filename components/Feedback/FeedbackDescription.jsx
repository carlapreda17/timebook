import { Field, useFormikContext } from 'formik';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Fieldset, Textarea } from '../Fields';

const FeedbackDescription = () => {
  const { values } = useFormikContext();
  const [label, setLabel] = useState('Descriere');
  useEffect(() => {
    if (values.type === 'bug') {
      return setLabel('Pasi de reproducere');
    }
    return setLabel('Descriere');
  }, [values]);

  return (
    <Fieldset name="description" label={label}>
      <Field name="description" id="description" as={Textarea} />
    </Fieldset>
  );
};

export default FeedbackDescription;
