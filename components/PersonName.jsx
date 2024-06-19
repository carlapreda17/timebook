import React from 'react';
import { useQuery } from '../hooks';
import { useEffect } from 'react';

const PersonName = ({ id, setSelectedPerson }) => {
  const { data, status } = useQuery(`/identity/${id}`);

  useEffect(() => {
    if (status === 'success') setSelectedPerson(data);
  }, [status]);

  return <>{status === 'success' && <span>{data.first_name + ' ' + data.last_name}</span>}</>;
};

export default PersonName;
