import { format, getMonth, getYear } from 'date-fns';
import { ro } from 'date-fns/locale';

const CalendarTitle = ({ dates }) => {
  const getTitle = (startDate, endDate) => {
    if (getMonth(startDate) === getMonth(endDate)) {
      return `${format(new Date(startDate), 'dd', { locale: ro })}-${format(
        new Date(endDate),
        'dd MMMM yyyy',
        { locale: ro }
      )}`;
    }
    if (getYear(startDate) !== getYear(endDate)) {
      return `${format(new Date(startDate), 'dd MMMM yyyy', { locale: ro })}-${format(
        new Date(endDate),
        'dd MMMM yyyy',
        { locale: ro }
      )}`;
    }
    return `${format(new Date(startDate), 'dd MMMM', { locale: ro })}-${format(
      new Date(endDate),
      'dd MMMM yyyy',
      { locale: ro }
    )}`;
  };
  return (
    <h2 className="text-xl font-semibold">
      <span className="capitalize">{getTitle(dates.startDate, dates.endDate)}</span>
    </h2>
  );
};

export default CalendarTitle;
