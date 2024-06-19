import VacationTransactionsTableHead from './VacationTransactionsTableHead';

const VacationTransactionsTableLoading = () => {
  const mock = [1, 2, 3]; //mock data

  const showRows = (mock) => {
    return (
      <tr key={`row-loading-${mock}`} className="border">
        <td className="p-3">
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-full animate-pulse" />
        </td>
        {/* <td className="p-3">
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-full animate-pulse" />
        </td>
        <td className="p-3">
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-full animate-pulse" />
        </td> */}
        <td className="p-3 w-20">
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-full animate-pulse" />
        </td>
      </tr>
    );
  };
  return (
    <table className="min-w-full">
      <VacationTransactionsTableHead />
      <tbody>{mock.map(showRows)}</tbody>
    </table>
  );
};

export default VacationTransactionsTableLoading;
