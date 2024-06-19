import { Field } from 'formik';
import { Select } from '../Fields';
import { Fieldset } from '../Formik';

const TypeSelect = () => {
  return (
    <Fieldset name="type" label="Tip">
      <Field name="type" id="type" as={Select}>
        <option value="" disabled>
          Selecteaza un tip
        </option>
        <option value="bug">Bug</option>
        <option value="improvement">Imbunatatire</option>
        <option value="other">Altele</option>
      </Field>
    </Fieldset>
  );
};

export default TypeSelect;
