import { VacationsTableAdminHead } from '.';

const VacationsTableAdminLoading = () => {
  const mock = [1, 2, 3]; //Dummy data

  const showRows = (mock) => {
    return (
      <tr className="table-row" key={mock}>
        <td className="p-3 w-64">
          <dd className="table-loading" />
        </td>
        <td className="p-3 w-40">
          <dd className="table-loading" />
        </td>
        <td className="p-3 w-40">
          <dd className="table-loading" />
        </td>
        <td className="p-3">
          <dd className="table-loading" />
        </td>
        <td className="p-3 w-20">
          <dd className="table-loading" />
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

export default VacationsTableAdminLoading;
