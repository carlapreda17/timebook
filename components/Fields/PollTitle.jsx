import { Field } from 'formik';
import { Fieldset } from '../Formik';
import Input from './Input';

const PollTitle = () => (
  <Fieldset name="title" label="Titlul sondajului">
    <Field id="title" name="title" as={Input} autoFocus autoComplete="off" />
  </Fieldset>
);

export default PollTitle;
