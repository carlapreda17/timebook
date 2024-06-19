import { endOfMonth, startOfMonth } from 'date-fns';
import { useState } from 'react';
import { CalendarBody, CalendarBodyError, CalendarBodyLoading, CalendarHeader } from '.';
import { useQuery } from '../../hooks';

const Calendar = ({ role }) => {
  const [dates, setDates] = useState({
    startDate: startOfMonth(new Date()),
    endDate: endOfMonth(new Date()),
  });
  const [options, setOptions] = useState({
    from: dates.startDate,
    to: dates.endDate,
  });
  const { data, status, refetch } = useQuery('/activities/calendar', options);
  const [showWeekend, setShowWeekend] = useState(false);
  const [view, setView] = useState('monthly');

  return (
    <div className="-mx-8">
      <CalendarHeader
        dates={dates}
        setDates={setDates}
        setOptions={setOptions}
        refetch={refetch}
        options={options}
        showWeekend={showWeekend}
        setShowWeekend={setShowWeekend}
        view={view}
        setView={setView}
        role={role}
      />
      <div className="react-calendar">
        {status === 'loading' && (
          <CalendarBodyLoading dates={dates} showWeekend={showWeekend} view={view} />
        )}
        {status === 'error' && (
          <CalendarBodyError dates={dates} showWeekend={showWeekend} view={view} />
        )}
        {status === 'success' && (
          <CalendarBody
            dates={dates}
            data={data}
            refetch={refetch}
            showWeekend={showWeekend}
            setShowWeekend={setShowWeekend}
            view={view}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
