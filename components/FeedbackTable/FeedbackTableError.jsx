import { FeedbackTableHead } from '.';

const FeedbackTableError = () => {
  const mock = [1, 2, 3]; // dummy data

  const showFeedback = (mock) => {
    return (
      <tr className="table-row" key={`feedback-list-${mock}`}>
        <td className="p-3 w-64">
          <dd className="h-4 my-1 bg-red-200 rounded-lg " />
        </td>
        <td className="p-3 w-64">
          <dd className="h-4 my-1 bg-red-200 rounded-lg " />
        </td>
        <td className="p-3">
          <dd className="h-4 my-1 bg-red-200 rounded-lg " />
        </td>
        <td className="p-3 w-20">
          <dd className="h-4 my-1 bg-red-200 rounded-lg w-4" />
        </td>
        <td className="p-3 w-20">
          <div className="flex justify-center">
            <dd className="h-4 my-1 bg-red-200 rounded-lg w-4" />
          </div>
        </td>
      </tr>
    );
  };
  return (
    <table className="min-w-full">
      <FeedbackTableHead />
      <tbody>{mock.map(showFeedback)}</tbody>
    </table>
  );
};

export default FeedbackTableError;
