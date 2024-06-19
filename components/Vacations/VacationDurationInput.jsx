import { Field } from 'formik';
import { Fieldset } from '../Formik';
import { Number } from '../Fields';

const VacationDurationInput = () => {
  return (
    <Fieldset name="amount" label="Numar de zile aprobate">
      <Field id="amount" name="amount" as={Number} step="0.5" />
    </Fieldset>
  );
};

export default VacationDurationInput;
