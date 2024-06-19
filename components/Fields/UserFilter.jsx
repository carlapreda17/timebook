import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from '../../hooks';

const UserFilter = ({ onChange, value, role = 'user', active = true }) => {
  const [options, setOptions] = useState({ role: role });

  useEffect(() => {
    const checkActivity = (active) => {
      if (active !== '') {
        return setOptions((options) => ({
          ...options,
          active: active,
        }));
      }
    };
    checkActivity(active);
  }, []);

  const { data, status } = useQuery('identities', options);

  return (
    <div className="w-fit">
      <div>
        <label className="font-semibold mb-1">Nume persoana</label>
        <select
          onChange={(e) => {
            let user = data.find((user) => user._id === e.target.value);
            if (user) onChange(user);
            else onChange({ id: '', name: '' });
          }}
          value={value}
          className="select"
        >
          <option value="">Toate persoanele</option>
          {status === 'success' &&
            data.map((user) => (
              <option value={user._id} key={user._id}>
                {user.first_name + ' ' + user.last_name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default UserFilter;
