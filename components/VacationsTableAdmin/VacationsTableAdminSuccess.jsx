import { VacationsTableAdminHead, PersonLink, VacationStatusAdmin } from '.';
import { dateLocaleRo } from '../../functions';
import Description from '../Description';
import { MessageNoRows } from '../LogbookTable';

const VacationsTableAdminSuccess = ({ data, refetch }) => {
  const showVacations = (data) => {
    return (
      <tr className="table-row" key={data._id}>
        <td className="p-3 w-64 tablet:w-50">
          <PersonLink data={data} />
        </td>
        <td className="p-3 min-w-40 tablet:text-xs">{dateLocaleRo(data.startDate)}</td>
        <td className="p-3 min-w-40 tablet:text-xs">{dateLocaleRo(data.endDate)}</td>
        <td className="p-3 min-w-64 tablet:text-xs tablet:overflow-x-auto">
          {data.description !== undefined && (
            <Description description={data.description} limit={85} copyText={false} />
          )}
        </td>
        <td className="p-3 w-20">
          <VacationStatusAdmin status={data.status} id={data._id} refetch={refetch} />
        </td>
      </tr>
    );
  };

  return (
    <div className="flex flex-col w-full tablet:overflow-x-auto">
      <table className="w-min-full">
        <VacationsTableAdminHead />
        <tbody>{data.map(showVacations)}</tbody>
      </table>
      {!data?.length && <MessageNoRows />}
    </div>
  );
};

export default VacationsTableAdminSuccess;
