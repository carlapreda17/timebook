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
        <td className="p-3 w-40">{dateLocaleRo(data.createdAt)}</td>
        <td className="p-3 w-64">
          <Link href={`/admin/timesheets/people/${data.user._id}`}>
            {data.user.first_name + ' ' + data.user.last_name}
          </Link>
        </td>
        <td className="p-3 w-64">
          <FeedbackType type={data.type} />
          {data.title}
        </td>
        <td className="p-3">
          <Description description={data.description} limit={85} />
        </td>
        <td className="p-3 w-20">
          <FeedbackStatus status={data.solved} id={data._id} refetch={refetch} />
        </td>
      </tr>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <table className="w-min-full">
        <FeedbackTableHead />
        <tbody>{data.map(showFeedback)}</tbody>
      </table>
      {!data?.length && <MessageNoRows />}
    </div>
  );
};

export default FeedbackTableSuccess;
