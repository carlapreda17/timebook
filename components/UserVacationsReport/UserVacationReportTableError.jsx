import { UserVacationReportTableHead } from '.';

const UserVacationReportTableError = () => {
  const mock = [1, 2, 3]; //mock data
  const showRows = (mock) => {
    return (
      <tr className="table-row" key={mock}>
        <td className="p-3">
          <dd className="h-4 my-1 bg-red-300 rounded-lg" />
        </td>
        <td className="p-3 w-40">
          <dd className="h-4 my-1 bg-red-300 rounded-lg" />
        </td>
        <td className="p-3 w-40">
          <dd className="h-4 my-1 bg-red-300 rounded-lg" />
        </td>
      </tr>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <table className="w-min-full">
        <UserVacationReportTableHead />
        <tbody>{mock.map(showRows)}</tbody>
      </table>
    </div>
  );
};

export default UserVacationReportTableError;
