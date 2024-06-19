import UserTimesheetHead from './UserTimesheetHead';

const UserTimeSheetLoading = () => {
  const mock = [1, 2, 3]; // dummy data

  const showActivity = (mock) => {
    return (
      <tr className="border" key={`activity-list-error-${mock}`}>
        <td className="p-3 w-8">
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-4 animate-pulse"></dd>
        </td>
        <td className="p-3 w-40">
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-full animate-pulse"></dd>
        </td>
        <td className="p-3 w-28">
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-full animate-pulse"></dd>
        </td>
        <td className="p-3 w-64">
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-full animate-pulse"></dd>
        </td>
        <td className="p-3">
          <h3 className="line-clamp-2 py-0.5">
            <dd className="h-4 my-1 bg-gray-300 rounded-lg w-full animate-pulse"></dd>
          </h3>
        </td>
        <td className="p-3 w-20">
          <div className="flex justify-center">
            <dd className="h-4 my-1 bg-gray-300 rounded-lg w-full animate-pulse"></dd>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="flex w-screen md:w-full overflow-x-auto relative -mx-4 md:mx-0">
      <table className="w-full">
        <UserTimesheetHead />
        <tbody>{mock.map(showActivity)}</tbody>
      </table>
    </div>
  );
};

export default UserTimeSheetLoading;
