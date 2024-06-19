import { Field } from 'formik';
import { Fieldset } from '../../Formik';
import { Input } from '../../Fields';

const ProjectNameField = () => (
  <Fieldset name="name" label="Numele proiectului">
    <Field id="name" name="name" as={Input} autoFocus autoComplete="off" />
  </Fieldset>
);

export default ProjectNameField;
