const AdminListErrorRow = () => {
  return (
    <tr className=" even:bg-gray-100 hover:bg-sky-100">
      <td className="p-4 px-8 font-bold">
        {' '}
        <dd className="h-4 mt-1 bg-red-200 rounded-lg w-1/2"></dd>
      </td>
      <td className="p-4">
        <dd className="h-4 mt-1 bg-red-200 rounded-lg w-1/2"></dd>
      </td>
    </tr>
  );
};

export default AdminListErrorRow;
