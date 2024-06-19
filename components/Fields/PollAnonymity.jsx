import { Field } from 'formik';
import { Fieldset } from '../Formik';
import Checkbox from './Checkbox';

const PollAnonymity = ({ disabled = false, checked }) => {
  return (
    <Fieldset name="isAnonymous" label="">
      <Field
        id="isAnonymous"
        name="isAnonymous"
        as={Checkbox}
        disabled={disabled}
        checked={checked}
      >
        <div className="pl-1 dark:text-slate-300">Anonimitate</div>
      </Field>
    </Fieldset>
  );
};

export default PollAnonymity;
