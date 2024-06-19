import React from 'react';
import truncate from '../../functions/truncate';
import { useQuery } from '../../hooks';

const SelectUser = ({ ...props }) => {
  const { data, status } = useQuery('identities', { role: 'user', active: true });
  return (
    <label>
      Numele persoanei
      <select className="select" {...props} defaultValue="">
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
      </select>
    </label>
  );
};

export default SelectUser;
