import React from 'react';
import { useQuery } from '../../hooks';
import PersonsTableLoading from './PersonsTableLoading';
import PersonsTableError from './PersonsTableError';
import PersonsTableSuccess from './PersonsTableSuccess';

const PersonsTable = ({ options, activityFilter }) => {
  const { data, status, refetch } = useQuery('identities', {
    ...(activityFilter === 'active' && { ...options, active: true }),
    ...(activityFilter === 'inactive' && { ...options, active: false }),
    ...(activityFilter === 'all' && { ...options }),
  });

  return (
    <table className="w-full border-collapse mt-4">
      <thead className="bg-gray-100">
        <tr className="text-xs text-primary border-b">
          <td className="font-bold p-4 text-sm px-8">Nume</td>
          <td className="font-bold p-4 text-sm">E-mail</td>
          <td className="font-bold p-4 text-sm">Varsta</td>
          <td className="font-bold p-4 text-sm">Pozitie</td>
          <td className="font-bold p-4 text-sm"></td>
        </tr>
      </thead>
      <tbody className="divide-y whitespace-nowrap text-sm text-gray-500">
        {status === 'loading' && <PersonsTableLoading />}
        {status === 'error' && <PersonsTableError />}
        {status === 'success' && <PersonsTableSuccess data={data} refetch={refetch} />}
      </tbody>
    </table>
  );
};

export default PersonsTable;
