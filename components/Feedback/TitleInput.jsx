import { Field } from 'formik';
import { Input } from '../Fields';
import { Fieldset } from '../Formik';

const TitleInput = () => {
  return (
    <Fieldset name="title" label="Titlu">
      <Field name="title" id="title" as={Input} />
    </Fieldset>
  );
};

export default TitleInput;
