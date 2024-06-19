import React from 'react';
import { useQuery } from '../../hooks';
const UserName = () => {
  const { data, status } = useQuery('/profile');
  return (
    <div>
      {status === 'success' && (
        <h1 className="font-bold text-2xl mb-4 mr-4">{data.first_name + ' ' + data.last_name}</h1>
      )}
    </div>
  );
};

export default UserName;
