import { MessageNoRows } from '../LogbookTable';
import NonStandardDaysTable from './NonStandardDaysTable';

const NonStandardDaysTables = ({ nonStandardDays, DATES_TYPES }) => {
  const nonStandardDaysArray = [];

  for (const [key, value] of Object.entries(nonStandardDays)) {
    value.forEach((nonStandardDay) => {
      nonStandardDaysArray.push({ ...nonStandardDay, type: key });
    });
  }

  const overTimeDaysArray = nonStandardDaysArray.filter((day) => day.type === 'extraTimeDays');
  const incompleteDaysArray = nonStandardDaysArray.filter((day) => day.type === 'incompleteDays');
  return (
    <div className="flex gap-2 items-start w-full">
      {overTimeDaysArray.length > 0 && (
        <NonStandardDaysTable
          tableType="extra-time"
          nonStandardDays={overTimeDaysArray}
          DATES_TYPES={DATES_TYPES}
        />
      )}
      {incompleteDaysArray.length > 0 && (
        <NonStandardDaysTable
          tableType="incomplete"
          nonStandardDays={incompleteDaysArray}
          DATES_TYPES={DATES_TYPES}
        />
      )}
      {!nonStandardDaysArray?.length && (
        <MessageNoRows
          message={'Colaboratroul nu are zile incomplete sau extra time in intervalul ales. '}
        />
      )}
    </div>
  );
};

export default NonStandardDaysTables;
