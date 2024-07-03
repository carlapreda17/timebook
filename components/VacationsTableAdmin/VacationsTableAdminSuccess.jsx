import { VacationsTableAdminHead, PersonLink, VacationStatusAdmin } from '.';
import { dateLocaleRo } from '../../functions';
import Description from '../Description';
import { MessageNoRows } from '../LogbookTable';
import React from "react";

const VacationsTableAdminSuccess = ({ data, refetch }) => {
  const showVacations = (data) => {
    return (
      <tr className="table-row" key={data._id}>
        <td className="p-3 w-64 tablet:w-36 m-tablet:w-48 mobile:w-50 tablet:text-xs">
          <PersonLink data={data} />
        </td>
        <td className="p-3 tablet:w-40 tablet:text-xs">{dateLocaleRo(data.startDate)}</td>
        <td className="p-3 tablet:w-40 tablet:text-xs">{dateLocaleRo(data.endDate)}</td>
        <td className="p-3 min-w-64 tablet:text-xs">
          {data.description !== undefined && (
            <Description description={data.description} limit={85} copyText={false} />
          )}
        </td>
        <td className="p-3 w-20 tablet:text-xs">
          <VacationStatusAdmin status={data.status} id={data._id} refetch={refetch} />
        </td>
      </tr>
    );
  };

  return (
    <div className="table-wrapper">
      <table className="table-container">
        <VacationsTableAdminHead />
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

export default VacationsTableAdminSuccess;
