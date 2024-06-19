import { Field } from 'formik';
import truncate from '../../functions/truncate';
import { useQuery } from '../../hooks';
import { Fieldset } from '../Formik';
import Select from './Select';

const SelectProject = () => {
  const { data, status } = useQuery('projects', {
    active: true,
  });

  return (
    <Fieldset name="project" label="Numele proiectului">
      <Field id="project" name="project" as={Select}>
        <option value="" disabled>
          Selectează un proiect
        </option>
        {status === 'success' &&
          data.map(({ _id, name }) => {
            return (
              <option value={_id} key={_id}>
                {truncate(name, 50)}
              </option>
            );
          })}
      </Field>
    </Fieldset>
  );
};

export default SelectProject;
