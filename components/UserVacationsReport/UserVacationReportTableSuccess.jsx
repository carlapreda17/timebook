import { VacationType, VacationsTableAdminUserHead } from '.';
import { Plural } from '..';
import { dateLocaleRo } from '../../functions';
import Description from '../Description';
import { MessageNoRows } from '../LogbookTable';
import { VacationStatusAdmin } from '../VacationsTableAdmin';

const UserVacationReportTableSuccess = ({ data, refetch }) => {
  const showVacations = (data) => {
    const { type } = data;
    if (type.startsWith('vacation')) {
      return (
        <tr key={data._id} className="table-row">
          <td className="p-3 w-40">
            <VacationType type={type} />
          </td>
          <td className="p-3 w-40">{dateLocaleRo(data.startDate) || '-'}</td>
          <td className="p-3 w-40">{dateLocaleRo(data.endDate) || '-'}</td>
          <td className="p-3 w-20">
            {!!data.amount && <Plural one="zi" many="zile" count={data.amount} />}
          </td>
          <td className="p-3">
            {data.description !== undefined && (
              <Description description={data.description} limit={85} />
            )}
          </td>
          <td className="p-3 w-20">
            <VacationStatusAdmin id={data._id} status={data.status} refetch={refetch} />
          </td>
        </tr>
      );
    }

    const { amount, description, year } = data;
    return (
      <tr key={data._id} className="table-row">
        <td className="p-3 w-40">
          <VacationType type={type} />
        </td>
        <td className="p-3 w-40">{year}</td>
        <td className="p-3 w-40">{year}</td>
        <td className="p-3 w-20">{amount && <Plural one="zi" many="zile" count={amount} />}</td>
        <td className="p-3">
          {description !== undefined && <Description description={description} limit={85} />}
        </td>
        <td className="p-3 w-20">
          <VacationStatusAdmin status={'approved'} id={data._id} refetch={refetch} />
        </td>
      </tr>
    );
  };

  return (
    <div className="flex w-screen md:w-full overflow-x-auto relative flex-col -mx-4 md:mx-0">
      <table className="min-w-full">
        <VacationsTableAdminUserHead />
        <tbody>{data.map(showVacations)}</tbody>
      </table>
      {!data?.length && <MessageNoRows />}
    </div>
  );
};

export default UserVacationReportTableSuccess;
