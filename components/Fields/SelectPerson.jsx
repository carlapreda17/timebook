import { Field } from 'formik';
import truncate from '../../functions/truncate';
import { useQuery } from '../../hooks';
import { Fieldset } from '../Formik';
import Select from './Select';

const SelectUser = ({ ...props }) => {
  const { data, status } = useQuery('identities', {
    active: true,
    role: 'user',
  });

  return (
    <Fieldset name="user" label="Numele persoanei">
      <Field id="user" name="user" as={Select} className="select" {...props}>
        <option value="" disabled>
          Selecteaza o persoana
        </option>
        {status === 'success' &&
          data.map(({ _id, first_name, last_name }) => {
            return (
              <option value={_id} key={_id}>
                {truncate(first_name + ' ' + last_name, 50)}
              </option>
            );
          })}
      </Field>
    </Fieldset>
  );
};

export default SelectUser;
