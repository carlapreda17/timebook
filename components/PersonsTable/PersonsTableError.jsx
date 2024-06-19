import { useEffect } from 'react';
import { toaster } from '../../lib';
import PersonsTableHead from './PersonsTableHead';

const PersonsTableError = () => {
  useEffect(() => {
    toaster.error('Eroare! Datele nu pot fi încărcate');
  }, []);

  const mock = [1, 2, 3]; // dummy data

  const showPerson = (mock) => {
    return (
      <tr className="border" key={`person-list-error-${mock}`}>
        <td className="p-3">
          <dd className="h-4 my-1 bg-red-300 rounded-lg w-full"></dd>
        </td>
        <td className="p-3 w-80">
          <dd className="h-4 my-1 bg-red-300 rounded-lg w-full"></dd>
        </td>
        <td className="p-3 w-80">
          <dd className="h-4 my-1 bg-red-300 rounded-lg w-full"></dd>
        </td>
        <td className="p-3 w-32">
          <dd className="h-4 my-1 bg-red-300 rounded-lg w-full"></dd>
        </td>
        <td className="p-3 w-20">
          <dd className="h-4 my-1 bg-red-300 rounded-lg w-4 mr-2 inline-block"></dd>
          <dd className="h-4 my-1 bg-red-300 rounded-lg w-4 inline-block"></dd>
        </td>
      </tr>
    );
  };

  return (
    <table className="min-w-full">
      <PersonsTableHead />
      <tbody>{mock.map(showPerson)}</tbody>
    </table>
  );
};

export default PersonsTableError;
