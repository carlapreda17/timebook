import { addDays, format, startOfISOWeek } from 'date-fns';
import { ro } from 'react-date-range/dist/locale';

const getWeekDaysNames = (date, showWeekend) => {
  const weekStartDate = startOfISOWeek(date);
  const weekDays = [];
  const limit = showWeekend ? 7 : 5;
  for (let day = 0; day < limit; day++) {
    weekDays.push(
      <div className="text-center font-semibold uppercase mb-2 dark:text-gray-100">
        {format(addDays(weekStartDate, day), 'E', { locale: ro })}
      </div>
    );
  }
  return <div className={showWeekend ? 'grid grid-cols-7' : 'grid grid-cols-5'}>{weekDays}</div>;
};

export default getWeekDaysNames;
