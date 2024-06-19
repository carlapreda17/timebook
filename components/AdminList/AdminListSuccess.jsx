import React from 'react';
import AdminListSuccessRow from './AdminListSuccessRow';
import { classnames } from '../../lib';

const AdminListSuccess = ({ data }) => {
  return (
    <div className={classnames('pt-5 w-screen sm:w-full overflow-x-auto relative -mx-4 sm:mx-0')}>
      <table className={classnames('border-collapse rounded-lg shadow-md overflow-x-auto')}>
        <thead className="table-head">
          <tr>
            <td className="p-4 text-sm px-2 sm:px-8 w-full ">Nume</td>
            <td className="p-4 text-sm px-2 sm:px-4 w-full">E-mail</td>
          </tr>
        </thead>
        <tbody className={classnames('whitespace-nowrap text-sm text-gray-500')}>
          {data.map((admin) => {
            return <AdminListSuccessRow {...admin} key={admin._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminListSuccess;
