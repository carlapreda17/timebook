import React from 'react';

const AdminListSuccessRow = ({ last_name, first_name, email }) => {
  return (
    <tr className="table-row">
      <td className="p-4 px-2 sm:px-8 font-bold">
        {' '}
        {(last_name + ' ' + first_name).toUpperCase()}
      </td>
      <td className="p-4 px-2 sm:px-4">{email}</td>
    </tr>
  );
};

export default AdminListSuccessRow;
