import { VacationTransactionsTableHead } from '../../components/VacationTransactions';
import { MessageNoRows } from '../LogbookTable';
import { VacationSituationsRowActions } from '.';
import Link from 'next/link';

const VacationTransactionsTableSuccess = ({ data, refetch }) => {
  const showData = ({ _id, first_name, last_name }) => {
    return (
      <tr key={`user-vacations-${_id}`} className="table-row">
        <td className="p-3">
          <Link href={`/admin/vacations/${_id}`}>
            <span className="w-full font-semibold cursor-pointer hover:text-sky-500">
              {`${first_name} ${last_name.toUpperCase()}`}
            </span>
          </Link>
        </td>
        <td className="p-3 w-20">
          <VacationSituationsRowActions id={_id} refetch={refetch} />
        </td>
      </tr>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <table className="min-w-full">
        <VacationTransactionsTableHead />
        <tbody>{data.map(showData)}</tbody>
      </table>
      {!data?.length && <MessageNoRows />}
    </div>
  );
};

export default VacationTransactionsTableSuccess;
