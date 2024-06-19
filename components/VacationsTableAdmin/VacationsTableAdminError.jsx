import { VacationsTableAdminHead } from '.';

const VacationsTableAdminError = () => {
  const mock = [1, 2, 3]; //Dummy data

  const showRows = (mock) => {
    return (
      <tr className="table-row" key={mock}>
        <td className="p-3 w-64">
          <dd className="h-4 my-1 bg-red-300 rounded-lg  " />
        </td>
        <td className="p-3 w-40">
          <dd className="h-4 my-1 bg-red-300 rounded-lg  " />
        </td>
        <td className="p-3 w-40">
          <dd className="h-4 my-1 bg-red-300 rounded-lg  " />
        </td>
        <td className="p-3">
          <dd className="h-4 my-1 bg-red-300 rounded-lg" />
        </td>
        <td className="p-3 w-20">
          <dd className="h-4 my-1 bg-red-300 rounded-lg w-4 " />
        </td>
      </tr>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <table className="w-min-full">
        <VacationsTableAdminHead />
        <tbody>{mock.map(showRows)}</tbody>
      </table>
    </div>
  );
};

export default VacationsTableAdminError;
