import { Field } from 'formik';
import { Fieldset } from '../../Formik';
import { Textarea } from '../../Fields';

const ProjectDescriptionField = () => (
  <Fieldset name="description" label="Descrierea proiectului">
    <Field id="description" name="description" as={Textarea} autoComplete="off" />
  </Fieldset>
);

export default ProjectDescriptionField;
