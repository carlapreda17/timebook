import React from 'react';
import { VacationsTableUserHead, VacationStatus, DeleteRequestButton } from '.';
import { dateLocaleRo } from '../../functions';
import Description from '../Description';
import MessageNoRows from '../LogbookTable/MessageNoRows';
import Plural from '../Plural';
import { VacationType } from '../UserVacationsReport';

const VacationsTableUserSuccess = ({ data, refetch }) => {
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
            <VacationStatus status={data.status} />
          </td>
          <td className="p-3 w-20 tablet:text-xs">
            {data.status === 'pending' && <DeleteRequestButton id={data._id} refetch={refetch} />}
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
          <VacationStatus status={'approved'} />
        </td>
      </tr>
    );
  };

  return (
    <div className="table-container">
      <table className="min-w-full tablet:mx-4">
        <VacationsTableUserHead />
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

export default VacationsTableUserSuccess;
