import { Checkbox } from '../Fields';
import {
  ActivityDate,
  LogbookRowActions,
  LogbookTableHead,
  MessageNoRows,
  ProjectLink,
  UserLink,
} from '.';
import FormatDuration from '../FormatDuration';
import Description from '../Description';
import { groupBy } from 'lodash';
import { getTotalTimeWorked } from '../../functions';

const LogbookTableSuccess = ({ data, refetch, selectedRows, setSelectedRows, timeData }) => {
  const removeSelection = (id) => setSelectedRows((prev) => prev.filter((el) => el !== id));
  const addSelection = (id) => setSelectedRows((prev) => [...prev, id]);
  const groupedData = groupBy(data, 'date');

  const toggleRow = (id) => {
    if (selectedRows.includes(id)) {
      removeSelection(id);
    } else {
      addSelection(id);
    }
  };

  const allRowsSelected = data.length && data.length === selectedRows.length;
  const toggleAll = () => {
    if (!data?.length) {
      return;
    }

    if (allRowsSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((el) => el._id));
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
        className="bordex-x border-t dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
        style={{
          backgroundColor: 'white',
          borderBottom: addSpace && '1.75rem solid rgb(243, 244, 246)',
        }}
        key={activity._id}
      >
        <td className="p-3">
          <Checkbox
            onChange={() => toggleRow(activity._id)}
            checked={isSelected}
            className={'form-checkbox sm:p-2 cursor-pointer checked:bg-primary ring-primary'}
          />
        </td>
        <td className="p-3 w-40 tablet:w-20 tablet:text-xs">
          <ActivityDate date={activity.date} />
        </td>
        <td className="px-3 py-2 w-28 tablet:text-xs">
          <FormatDuration duration={activity.duration}/>
        </td>
        <td className="p-3 w-64 tablet:text-xs">
          <ProjectLink {...activity.project} />
        </td>
        <td className="p-3 w-64 tablet:text-xs">
          <UserLink {...activity.user} />
        </td>
        <td className="p-3 tablet:text-xs">
          <Description description={activity.description} limit={40} />
        </td>
        <td className="p-3 w-20 tablet:text-xs">
          <LogbookRowActions activity={activity} refetch={refetch} />
        </td>
      </tr>
    );
  };

  return (
    <div className="table-wrapper">
      <table className="table-container">
        <LogbookTableHead toggleAll={toggleAll} checked={allRowsSelected} />
        <tbody>
          <tr className="bg-primary">
            <td></td>
            <td className="p-3 w-40 tablet:w-20 flex flex-col tablet:text-xs">
              <span className="text-white">{selectedRows.length > 0 ? "Total selectat:" : "Total:" } </span>
            </td>
            <td className="px-3 py-2 w-28">

              <span className="font-bold text-white">
                <FormatDuration  duration={selectedRows.length > 0 ? getTotalTimeWorked(data, selectedRows): timeData}/>
              </span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {Object.keys(groupedData).map(renderDays)}
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

export default LogbookTableSuccess;
