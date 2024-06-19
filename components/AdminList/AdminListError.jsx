import AdminListErrorRow from './AdminListErrorRow';

const AdminListError = () => {
  return (
    <table className="border-collapse mt-4 border border-gray-200 rounded-lg m-8 shadow-md bg-white w-full">
      <thead className="bg-gray-100">
        <tr className="text-xs text-primary border-b">
          <td className="font-bold p-4 text-sm px-8 w-80">Nume</td>
          <td className="font-bold p-4 text-sm w-80">E-mail</td>
        </tr>
      </thead>
      <tbody className="divide-y whitespace-nowrap text-sm text-gray-500">
        <AdminListErrorRow />
        <AdminListErrorRow />
        <AdminListErrorRow />
        <AdminListErrorRow />
        <AdminListErrorRow />
      </tbody>
    </table>
  );
};

export default AdminListError;
