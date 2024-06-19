import { Field } from 'formik';
import { Fieldset } from '../../Formik';
import ColorPicker from '../../Fields/ColorPicker';

const ProjectColorField = () => (
  <Fieldset name="design_color" label="Culoarea proiectului">
    <Field id="design_color" name="design_color" as={ColorPicker} autoComplete="off" />
  </Fieldset>
);

export default ProjectColorField;
