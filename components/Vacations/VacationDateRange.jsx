import { useFormikContext } from 'formik';
import { DateRange } from '../Fields';
import { Fieldset } from '../Formik';

const VacationDateRange = () => {
  const { setFieldValue } = useFormikContext();
  const handleDatesChange = ({ from, to }) => {
    setFieldValue('startDate', from);
    setFieldValue('endDate', to);
  };

  return (
    <Fieldset name="startDate">
      <DateRange onChange={handleDatesChange} className="grid sm:grid-cols-2 gap-4" />
    </Fieldset>
  );
};

export default VacationDateRange;
