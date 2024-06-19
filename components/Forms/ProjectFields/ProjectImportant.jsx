import { Field } from 'formik';
import { Checkbox } from '../../Fields';
import { Fieldset } from '../../Formik';

const ProjectImportantField = ({ defaultChecked }) => (
  <Fieldset name="important" label="">
    <Field
      id="important"
      name="important"
      as={Checkbox}
      className="form-checkbox rounded-full"
      defaultChecked={defaultChecked}
    >
      <div>Important</div>
    </Field>
  </Fieldset>
);

export default ProjectImportantField;
