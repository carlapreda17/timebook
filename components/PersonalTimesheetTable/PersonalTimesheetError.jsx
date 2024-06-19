import React, { useEffect } from 'react';
import { toaster } from '../../lib';
import PersonalTimesheetTableHead from './PersonalTimesheetTableHead';

const PersonalTimesheetError = () => {
  useEffect(() => {
    toaster.error('Eroare! Datele nu pot fi încărcate');
  }, []);

  const mock = [1, 2, 3]; // dummy data

  const showActivity = (mock) => {
    return (
      <tr className="border" key={`activity-list-error-${mock}`}>
        <td className="p-3 w-8">
          <dd className="h-4 my-1 bg-red-300 rounded-lg w-4"></dd>
        </td>
        <td className="p-3 w-40">
          <dd className="h-4 my-1 bg-red-300 rounded-lg w-full"></dd>
        </td>
        <td className="p-3 w-28">
          <dd className="h-4 my-1 bg-red-300 rounded-lg w-full"></dd>
        </td>
        <td className="p-3 w-64">
          <dd className="h-4 my-1 bg-red-300 rounded-lg w-full"></dd>
        </td>
        <td className="p-3">
          <h3 className="line-clamp-2 py-0.5">
            <dd className="h-4 my-1 bg-red-300 rounded-lg w-full"></dd>
          </h3>
        </td>
        <td className="p-3 w-20">
          <div className="flex justify-center">
            <dd className="h-4 my-1 bg-red-300 rounded-lg w-full"></dd>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <table className="min-w-full">
      <PersonalTimesheetTableHead />
      {mock.map(showActivity)}
    </table>
  );
};

export default PersonalTimesheetError;
