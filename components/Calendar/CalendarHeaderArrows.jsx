import {
  addMonths,
  addWeeks,
  endOfMonth,
  startOfISOWeek,
  startOfMonth,
  subMonths,
  subWeeks,
} from 'date-fns';

const CalendarHeaderArrows = ({ dates, setDates, setOptions, options, view }) => {
  const handleGoBack = () => {
    if (view === 'monthly') {
      setDates({
        startDate: startOfMonth(subMonths(dates.startDate, 1)),
        endDate: endOfMonth(subMonths(dates.endDate, 1)),
      });
      setOptions({
        ...options,
        from: startOfMonth(subMonths(dates.startDate, 1)),
        to: endOfMonth(subMonths(dates.endDate, 1)),
      });
    } else {
      setDates({
        startDate: startOfISOWeek(subWeeks(dates.startDate, 1)),
        endDate: subWeeks(dates.endDate, 1),
      });
      setOptions({
        ...options,
        from: startOfISOWeek(subWeeks(dates.startDate, 1)),
        to: subWeeks(dates.endDate, 1),
      });
    }
  };

  const handleGoForward = () => {
    if (view === 'monthly') {
      setDates({
        startDate: startOfMonth(addMonths(dates.startDate, 1)),
        endDate: endOfMonth(addMonths(dates.endDate, 1)),
      });
      setOptions({
        ...options,
        from: startOfMonth(addMonths(dates.startDate, 1)),
        to: endOfMonth(addMonths(dates.endDate, 1)),
      });
    } else {
      setDates({
        startDate: startOfISOWeek(addWeeks(dates.startDate, 1)),
        endDate: addWeeks(dates.endDate, 1),
      });
      setOptions({
        ...options,
        from: startOfISOWeek(addWeeks(dates.startDate, 1)),
        to: addWeeks(dates.endDate, 1),
      });
    }
  };
  return (
    <div>
      <i
        className="fa-solid fa-chevron-left text-lg text-gray-400 cursor-pointer mr-4"
        onClick={handleGoBack}
      />{' '}
      <i
        className="fa-solid fa-chevron-right text-lg text-gray-400 cursor-pointer"
        onClick={handleGoForward}
      />
    </div>
  );
};

export default CalendarHeaderArrows;
