import { generateMock, getWeekDaysNames } from '../../functions';
import { classnames } from '../../lib';

const CalendarBodyLoading = ({ dates, showWeekend, view }) => {
  const mock = view === 'monthly' ? generateMock(42) : generateMock(showWeekend ? 7 : 5);

  const showCards = (card) => {
    return (
      <div
        className={classnames(
          'border-t border-1 rounded-md text-center pt-2 overflow-auto bg-gray-200 animate-pulse dark:bg-slate-700 dark:border-slate-600',
          view === 'monthly' ? 'h-32' : 'h-[60vh]'
        )}
        key={card}
      />
    );
  };

  return (
    <div>
      {getWeekDaysNames(dates.startDate, showWeekend)}
      <div className={showWeekend ? 'grid grid-cols-7 gap-1' : 'grid grid-cols-5 gap-1'}>
        {mock.map(showCards)}
      </div>
    </div>
  );
};

export default CalendarBodyLoading;
