import { Field } from 'formik';
import { Fieldset } from '../../Formik';
import { Input } from '../../Fields';

const ProjectIconField = () => (
  <Fieldset name="icon" label="Imaginea proiectului">
    <Field id="icon" name="icon" as={Input} autoComplete="off" />
  </Fieldset>
);

export default ProjectIconField;
