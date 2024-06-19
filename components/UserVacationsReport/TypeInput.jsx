import { Field } from 'formik';
import { Select } from '../Fields';
import { Fieldset } from '../Formik';

const TypeInput = () => {
  return (
    <Fieldset name="type" label="Tip">
      <Field id="type" name="type" as={Select}>
        <option value="" disabled>
          Selecteaza un tip
        </option>
        <option value="annual">Anual</option>
        <option value="extra-time">Extra-time</option>
        <option value="bonus">Bonus</option>
      </Field>
    </Fieldset>
  );
};

export default TypeInput;
