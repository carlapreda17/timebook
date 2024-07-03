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
          <td className="p-3 w-40 tablet:text-xs">
            <VacationType type={type} />
          </td>
          <td className="p-3 w-40 tablet:text-xs">{dateLocaleRo(data.startDate) || '-'}</td>
          <td className="p-3 w-40 tablet:text-xs">{dateLocaleRo(data.endDate) || '-'}</td>
          <td className="p-3 w-20 tablet:text-xs">
            {!!data.amount && <Plural one="zi" many="zile" count={data.amount} />}
          </td>
          <td className="p-3 tablet:text-xs">
            {data.description !== undefined && (
              <Description description={data.description} limit={85} />
            )}
          </td>
          <td className="p-3 w-20 tablet:text-xs">
            <VacationStatusAdmin id={data._id} status={data.status} refetch={refetch} />
          </td>
        </tr>
      );
    }

    const { amount, description, year } = data;
    return (
      <tr key={data._id} className="table-row">
        <td className="p-3 w-40 tablet:text-xs">
          <VacationType type={type} />
        </td>
        <td className="p-3 w-40 tablet:text-xs">{year}</td>
        <td className="p-3 w-40 tablet:text-xs">{year}</td>
        <td className="p-3 w-20 tablet:text-xs">{amount && <Plural one="zi" many="zile" count={amount} />}</td>
        <td className="p-3 tablet:text-xs">
          {description !== undefined && <Description description={description} limit={85} />}
        </td>
        <td className="p-3 w-20 tablet:text-xs">
          <VacationStatusAdmin status={'approved'} id={data._id} refetch={refetch} />
        </td>
      </tr>
    );
  };

  return (
    <div className="table-wrapper">
      <table className="table-container">
        <VacationsTableAdminUserHead />
        <tbody>{data.map(showVacations)}
        {!data?.length && (
          <tr>
            <td colSpan="7">
              <MessageNoRows />
            </td>
          </tr>
        )}
        </tbody>
      </table>

    </div>
  );
};

export default UserVacationReportTableSuccess;
