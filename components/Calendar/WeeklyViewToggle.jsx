import { endOfISOWeek, endOfMonth, startOfISOWeek, startOfMonth } from 'date-fns';
import { classnames } from '../../lib';

const WeeklyViewToggle = ({ view, setView, dates, setDates, options, setOptions }) => {
  const handleCheck = (e) => {
    if (e.target.checked) {
      setView('weekly');
      setDates({
        startDate: startOfISOWeek(new Date()),
        endDate: endOfISOWeek(new Date()),
      });
      setOptions({
        ...options,
        from: startOfISOWeek(new Date()),
        to: endOfISOWeek(new Date()),
      });
    } else {
      setView('monthly');
      setDates({
        startDate: startOfMonth(dates.startDate),
        endDate: endOfMonth(dates.endDate),
      });
      setOptions({
        ...options,
        from: startOfMonth(dates.startDate),
        to: endOfMonth(dates.endDate),
      });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span>lunar</span>
      <div className="form-check form-switch">
        <input
          className={classnames(
            'form-check-input w-14 h-7 flex items-center bg-gray-300 rounded-full cursor-pointer',
            view === 'weekly' ? 'bg-blue-700' : ''
          )}
          type="checkbox"
          role="switch"
          defaultChecked={view === 'weekly' ? 'checked' : ''}
          onChange={handleCheck}
        />
      </div>
      <span>săptămânal</span>
    </div>
  );
};

export default WeeklyViewToggle;
