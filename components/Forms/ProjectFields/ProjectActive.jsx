import { Field } from 'formik';
import { Checkbox } from '../../Fields';
import { Fieldset } from '../../Formik';

const ProjectActiveField = ({ defaultChecked }) => (
  <Fieldset name="active" label="">
    <Field
      id="active"
      name="active"
      as={Checkbox}
      className="form-checkbox rounded-full"
      defaultChecked={defaultChecked}
    >
      <div>Activ</div>
    </Field>
  </Fieldset>
);

export default ProjectActiveField;
