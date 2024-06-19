import React from 'react';

const AdminListLoadingRow = () => {
  return (
    <tr className=" even:bg-gray-100 hover:bg-sky-100">
      <td className="p-4 px-8 font-bold">
        {' '}
        <dd className="h-4 mt-1 bg-gray-300 rounded-lg w-1/2 animate-pulse"></dd>
      </td>
      <td className="p-4">
        <dd className="h-4 mt-1 bg-gray-300 rounded-lg w-1/2 animate-pulse"></dd>
      </td>
    </tr>
  );
};

export default AdminListLoadingRow;
