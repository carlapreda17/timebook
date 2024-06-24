import Link from 'next/link';
import React from 'react';
import { FeedbackStatus, FeedbackTableHead, FeedbackType } from '.';
import { dateLocaleRo } from '../../functions';
import Description from '../Description';
import { MessageNoRows } from '../LogbookTable';

const FeedbackTableSuccess = ({ data, refetch }) => {
  const showFeedback = (data) => {
    return (
      <tr className="table-row" key={data._id}>
        <td className="p-3 w-40 tablet:text-xs">{dateLocaleRo(data.createdAt)}</td>
        <td className="p-3 w-64 tablet:text-xs">
          <Link href={`/admin/timesheets/people/${data.user._id}`}>
            {data.user.first_name + ' ' + data.user.last_name}
          </Link>
        </td>
        <td className="p-3 w-64 tablet:text-xs mobile:text-center">
          <FeedbackType type={data.type} />
          {data.title}
        </td>
        <td className="p-3 tablet:text-xs">
          <Description description={data.description} limit={85} />
        </td>
        <td className="p-3 w-20 tablet:text-xs">
          <FeedbackStatus status={data.solved} id={data._id} refetch={refetch} />
        </td>
      </tr>
    );
  };

  return (
    <div className="flex w-screen md:w-full overflow-x-auto relative flex-col -mx-4 md:mx-0">
      <table className="w-min-full tablet:mx-4">
        <FeedbackTableHead />
        <tbody>{data.map(showFeedback)}
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

export default FeedbackTableSuccess;
