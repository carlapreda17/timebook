import { Field } from 'formik';
import { Checkbox } from '../../Fields';
import { Fieldset } from '../../Formik';

const ProjectUrgentField = ({ defaultChecked }) => (
  <Fieldset name="urgent" label="">
    <Field
      id="urgent"
      name="urgent"
      as={Checkbox}
      className="form-checkbox rounded-full"
      defaultChecked={defaultChecked}
    >
      <div>Urgent</div>
    </Field>
  </Fieldset>
);

export default ProjectUrgentField;
