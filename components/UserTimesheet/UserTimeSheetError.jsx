import { useEffect } from 'react';
import { toaster } from '../../lib';
import UserTimesheetHead from './UserTimesheetHead';

const UserTimesheetError = () => {
  useEffect(() => {
    toaster.error('Eroare! Datele nu pot fi în  cărcate');
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
    <div className="flex w-screen md:w-full overflow-x-auto relative -mr-4 md:mx-0">
      <table className="w-full">
        <UserTimesheetHead />
        {mock.map(showActivity)}
      </table>
    </div>
  );
};

export default UserTimesheetError;
