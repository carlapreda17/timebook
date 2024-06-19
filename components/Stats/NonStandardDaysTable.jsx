import { addDays } from 'date-fns';
import NonStandardDaysTableHead from './NonStandardDaysTableHead';
import Tooltip from '../Tooltip';

const NonStandardDaysTable = ({ tableType, nonStandardDays, DATES_TYPES }) => {
  const showNonStandardDay = (
    index,
    date,
    hoursWorked,
    isWeekendDay,
    isBankHolidayDay,
    isVacationDay,
    tableType
  ) => {
    const formatedDate = new Date(date);
    addDays(formatedDate, 1);
    const type = isWeekendDay
      ? DATES_TYPES.WEEKEND_DAY
      : isBankHolidayDay
      ? DATES_TYPES.BANK_HOLIDAY_DAY
      : isVacationDay
      ? DATES_TYPES.VACATION_DAY
      : DATES_TYPES.WORKABLE_DAY;

    const workableHours = isWeekendDay ? 0 : isBankHolidayDay ? 0 : isVacationDay ? 0 : 8;

    return (
      <tr className="table-row" key={index}>
        <td className="p-3 w-80 flex">
          {formatedDate.toLocaleString('ro-RO').substring(0, 10)}
          <Tooltip>
            {type}: {workableHours} ore
          </Tooltip>
        </td>
        <td
          className={`p-3 w-12 text-${
            tableType === 'extra-time' ? 'green' : 'red'
          }-600 font-semibold`}
        >
          {Math.abs(hoursWorked - workableHours)}
        </td>
      </tr>
    );
  };

  const totalDifference = nonStandardDays.reduce((acc, day) => {
    const workableHours = day.isWeekendDay ? 0 : day.isBankHolidayDay ? 0 : 8;
    return acc + Math.abs(day.hoursWorked - workableHours);
  }, 0);

  return (
    <div className="w-1/2">
      <div className="py-3 text-lg font-bold dark:text-white">
        {tableType === 'extra-time' ? 'Zile extra time' : 'Zile incomplete'}
      </div>
      <table className="w-full ">
        <NonStandardDaysTableHead totalDifference={totalDifference} />
        <tbody>
          {nonStandardDays
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((day, index) =>
              showNonStandardDay(
                index,
                day.date,
                day.hoursWorked,
                day.isWeekendDay,
                day.isBankHolidayDay,
                day.isVacationDay,
                tableType
              )
            )}
        </tbody>
      </table>
    </div>
  );
};

export default NonStandardDaysTable;
