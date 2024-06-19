import { Field } from 'formik';
import { Fieldset } from '../Formik';
import Select from './Select';

const SelectPriority = () => {
  const options = ['Scazuta', 'Medie', 'Ridicata'];

  const translatePriorityOptionToEnglish = (priorityOption) => {
    switch (priorityOption) {
      case 'Scazuta':
        return 'low';
      case 'Medie':
        return 'medium';
      case 'Ridicata':
        return 'high';
    }
  };

  return (
    <Fieldset name="priority" label="Prioritatea sondajului">
      <Field id="priority" name="priority" as={Select}>
        <option value="" disabled>
          Selectează prioritatea
        </option>
        {options.map((option) => {
          return (
            <option value={translatePriorityOptionToEnglish(option)} key={option}>
              {option}
            </option>
          );
        })}
      </Field>
    </Fieldset>
  );
};

export default SelectPriority;
