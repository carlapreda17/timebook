import { Field } from 'formik';
import { Fieldset } from '../../Formik';
import { Input } from '../../Fields';

const ProjectStatusField = () => (
  <Fieldset name="status" label="Status">
    <Field id="status" name="status" as={Input} autoComplete="off" />
  </Fieldset>
);

export default ProjectStatusField;
