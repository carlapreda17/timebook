import React from 'react';
import AdminListLoadingRow from './AdminListLoadingRow';

const AdminListLoading = () => {
  return (
    <table className="border-collapse mt-4 border border-gray-200 rounded-lg shadow-md bg-white w-full">
      <thead className="bg-gray-100">
        <tr className="text-xs text-primary border-b">
          <td className="font-bold p-4 text-sm px-8 w-80">Nume</td>
          <td className="font-bold p-4 text-sm w-80">E-mail</td>
        </tr>
      </thead>
      <tbody className="divide-y whitespace-nowrap text-sm text-gray-500">
        <AdminListLoadingRow />
        <AdminListLoadingRow />
        <AdminListLoadingRow />
        <AdminListLoadingRow />
        <AdminListLoadingRow />
      </tbody>
    </table>
  );
};

export default AdminListLoading;
