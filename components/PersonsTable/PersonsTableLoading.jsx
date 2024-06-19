import PersonsTableHead from './PersonsTableHead';

const PersonsTableLoading = () => {
  const mock = [1, 2, 3]; // dummy data

  const showPerson = (mock) => {
    return (
      <tr className="border" key={`person-list-loading-${mock}`}>
        <td className="p-3">
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-full animate-pulse"></dd>
        </td>
        <td className="p-3 w-80">
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-full animate-pulse"></dd>
        </td>
        <td className="p-3 w-80">
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-full animate-pulse"></dd>
        </td>
        <td className="p-3 w-32">
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-full animate-pulse"></dd>
        </td>
        <td className="p-3 w-20">
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-4 mr-2 animate-pulse inline-block"></dd>
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-4 animate-pulse inline-block"></dd>
        </td>
      </tr>
    );
  };

  return (
    <table className="min-w-full">
      <PersonsTableHead />
      <tbody>{mock.map(showPerson)}</tbody>
    </table>
  );
};

export default PersonsTableLoading;
