import React from 'react';
import truncate from '../../functions/truncate';
import { useQuery } from '../../hooks';

const SelectProjectNoFormik = ({ ...props }) => {
  const { data, status } = useQuery('projects', {
    active: true,
  });
  return (
    <select className="mt-1 select" defaultValue="" {...props}>
      <option value="" disabled>
        Selecteaza un proiect
      </option>
      {status === 'success' &&
        data.map(({ _id, name }) => {
          return (
            <option value={_id} key={_id}>
              {truncate(name, 50)}
            </option>
          );
        })}
    </select>
  );
};

export default SelectProjectNoFormik;
