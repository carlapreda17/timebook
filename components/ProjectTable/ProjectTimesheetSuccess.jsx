import { getTotalTimeWorked } from '../../functions';
import Description from '../Description';
import { Checkbox } from '../Fields';
import FormatDuration from '../FormatDuration';
import { ActivityDate, MessageNoRows, UserLink } from '../LogbookTable';

import ProjectTimesheetTableHead from './ProjectTimesheetTableHead';
import { groupBy } from 'lodash';

const ProjectTimesheetSuccess = ({ data, refetch, selectedRows, setSelectedRows }) => {
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
        className="table-row"
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
        <td className="p-3 w-40 tablet:text-xs">
          <ActivityDate date={activity.date} />
        </td>
        <td className="px-3 py-2 w-28">
          <FormatDuration duration={activity.duration} />
        </td>
        <td className="p-3 w-64 tablet:text-xs">
          <UserLink {...activity.user} />
        </td>
        <td className="p-3 tablet:text-xs">
          <Description description={activity.description} limit={110} />
        </td>
      </tr>
    );
  };

  return (
    <div className="table-wrapper">
      <table className="table-container">
        <ProjectTimesheetTableHead toggleAll={toggleAll} checked={allRowsSelected} />
        <tbody>
          <tr className="bg-primary w-full">
            <td></td>

            <td className="p-3 w-40 tablet:text-xs">
              <span className="text-white">Total selectat:</span>{' '}
            </td>
            <td className="px-3 py-2 w-28 tablet:text-xs">
              <span className="font-bold text-white">
                <FormatDuration duration={getTotalTimeWorked(data, selectedRows)}/>
              </span>
            </td>
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

export default ProjectTimesheetSuccess;
