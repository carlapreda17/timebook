import { Field, useFormikContext } from 'formik';
import { Fieldset } from '../Formik';
import { Datepicker, DatepickerDisabled } from '../Fields';

const EndDateSelect = ({ disabled = false, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const handleProjectDateChange = (date) => {
    setFieldValue('endDate', date);
  };
  return (
    <Fieldset name="endDate" label="Data de sfarsit">
      <Field
        name="endDate"
        id="endDate"
        as={disabled ? DatepickerDisabled : Datepicker}
        onChange={handleProjectDateChange}
        className="mb-5 mt-1 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
        {...props}
      />
    </Fieldset>
  );
};

export default EndDateSelect;
