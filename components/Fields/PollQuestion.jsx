import { Field } from 'formik';
import { Fieldset } from '../Formik';
import Textarea from './Textarea';

const PollQuestion = () => (
  <Fieldset name="question" label="Întrebarea">
    <Field id="question" name="question" as={Textarea} autoComplete="off" />
  </Fieldset>
);

export default PollQuestion;
