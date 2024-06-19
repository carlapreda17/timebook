import { groupBy } from 'lodash';
import truncate from '../../functions/truncate';
import Description from '../Description';
import { Checkbox } from '../Fields';
import FormatDuration from '../FormatDuration';
import { ActivityDate, MessageNoRows } from '../LogbookTable';
import UserTimesheetRowActions from '../ProjectTable/UserTimesheetRowActions';
import UserTimesheetHead from './UserTimesheetHead';

const UserTimesheetSucces = ({ data, refetch, selectedRows, setSelectedRows }) => {
  const removeSelection = (id) => setSelectedRows((prev) => prev.filter((el) => el !== id));
  const addSelection = (id) => setSelectedRows((prev) => [...prev, id]);
  const selectableRows = data;
  const groupedData = groupBy(data, 'date');

  const toggleRow = (id) => {
    if (selectedRows.includes(id)) {
      removeSelection(id);
    } else {
      addSelection(id);
    }
  };

  const allRowsSelected = selectableRows.length && selectableRows.length === selectedRows.length;
  const toggleAll = () => {
    if (!selectableRows?.length) {
      return;
    }

    if (allRowsSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(selectableRows.map((el) => el._id));
    }
  };

  const renderDays = (date, colorIndex) => {
    const element = [];
    for (let i = 0; i < groupedData[date].length; i++) {
      element.push(
        showActivity(groupedData[date][i], colorIndex, i === groupedData[date].length - 1)
      );
    }
    return element;
  };

  const showActivity = (activity, colorIndex, addSpace) => {
    const { _id } = activity;
    const isSelected = selectedRows.includes(_id);

    return (
      <tr
        key={activity._id}
        className="bordex-x border-t dark:bg-slate-800 dark:text-white dark:border-t-slate-600 dark:border-x-slate-600 dark:border-b-slate-700"
        style={{
          backgroundColor: 'white',
          borderBottom: addSpace && '1.75rem solid rgb(243, 244, 246)',
        }}
      >
        <td className="p-3">
          <Checkbox
            onChange={() => toggleRow(activity._id)}
            checked={isSelected}
            className={'form-checkbox p-2 cursor-pointer checked:bg-primary ring-primary'}
          />
        </td>
        <td className="p-3 w-40">
          <ActivityDate date={activity.date} />
        </td>
        <td className="px-3 py-2 w-28">
          <FormatDuration duration={activity.duration} />
        </td>
        <td className="p-3 w-64">
          <a className="w-full line-clamp-1">{truncate(activity.project.name, 35)}</a>
        </td>
        <td className="p-3">
          <Description description={activity.description} limit={95} />
        </td>

        <td className="p-3 w-20 h-14">
          <UserTimesheetRowActions activity={activity} refetch={refetch} />
        </td>
      </tr>
    );
  };

  return (
    <div className="flex w-screen md:w-full relative flex-col -mx-4 md:mx-0 overlow-y-visible">
      <table className="w-full">
        <UserTimesheetHead toggleAll={toggleAll} checked={allRowsSelected} />
        <tbody>{Object.keys(groupedData).map(renderDays)}</tbody>
      </table>
      {!data?.length && <MessageNoRows />}
    </div>
  );
};

export default UserTimesheetSucces;
