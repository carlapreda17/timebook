import { Field, useFormikContext } from 'formik';
import { Fieldset } from '../Formik';
import { Datepicker, DatepickerDisabled } from '../Fields';

const StartDateSelect = ({ disabled = false, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const handleProjectDateChange = (date) => {
    setFieldValue('startDate', date);
  };
  return (
    <Fieldset name="startDate" label="Data de inceput">
      <Field
        name="startDate"
        id="startDate"
        as={disabled ? DatepickerDisabled : Datepicker}
        onChange={handleProjectDateChange}
        className="mb-5 mt-1 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
        {...props}
      />
    </Fieldset>
  );
};

export default StartDateSelect;
