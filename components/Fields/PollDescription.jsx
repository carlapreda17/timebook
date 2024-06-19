import { Field } from 'formik';
import { Fieldset } from '../Formik';
import Textarea from './Textarea';

const PollDescription = () => (
  <Fieldset name="description" label="Descrierea sondajului">
    <Field id="description" name="description" as={Textarea} autoComplete="off" />
  </Fieldset>
);

export default PollDescription;
