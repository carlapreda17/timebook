import { addMonths, endOfMonth, format, getMonth, startOfMonth, subMonths } from 'date-fns';
import { ro } from 'date-fns/locale';

const DaysBarChartArrows = ({ dates, setDates, monthNumber, setMonthNumber }) => {
  const handleGoBack = () => {
    if (getMonth(dates.startDate) === 0) {
      return;
    }

    setMonthNumber(monthNumber - 1);
    return setDates({
      startDate: startOfMonth(subMonths(dates.startDate, 1)),
      endDate: endOfMonth(subMonths(dates.endDate, 1)),
    });
  };

  const handleGoForward = () => {
    if (getMonth(dates.startDate) === getMonth(new Date())) {
      return;
    }

    setMonthNumber(monthNumber + 1);
    return setDates({
      startDate: startOfMonth(addMonths(dates.startDate, 1)),
      endDate: endOfMonth(addMonths(dates.endDate, 1)),
    });
  };

  return (
    <div className="flex">
      <div className="mx-auto flex items-center gap-4 w-[27rem]">
        <i
          className="fa-solid fa-arrow-left text-2xl text-primary cursor-pointer"
          onClick={handleGoBack}
        />
        <h3 className="text-2xl font-semibold text-gray-500 w-full">{`Ore lucrate in luna ${format(
          dates.startDate,
          'MMMM',
          {
            locale: ro,
          }
        )}`}</h3>
        <i
          className="fa-solid fa-arrow-right text-2xl text-primary cursor-pointer"
          onClick={handleGoForward}
        />
      </div>
    </div>
  );
};

export default DaysBarChartArrows;
