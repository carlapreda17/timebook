import { endOfISOWeek, startOfISOWeek } from 'date-fns';
import { useState } from 'react';
import { useQuery } from '../../hooks';
import { CalendarBody, CalendarBodyError, CalendarBodyLoading, CalendarHeader } from '../Calendar';

const UserCalendar = () => {
  const [dates, setDates] = useState({
    startDate: startOfISOWeek(new Date()),
    endDate: endOfISOWeek(new Date()),
  });
  const [options, setOptions] = useState({
    from: dates.startDate,
    to: dates.endDate,
  });
  const { data, status, refetch } = useQuery('/activities/calendar', options);
  const [showWeekend, setShowWeekend] = useState(false);
  const [view, setView] = useState('weekly');

  return (
    <div className="">
      <CalendarHeader
        dates={dates}
        setDates={setDates}
        setOptions={setOptions}
        refetch={refetch}
        options={options}
        role="user"
        showWeekend={showWeekend}
        setShowWeekend={setShowWeekend}
        view={view}
        setView={setView}
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
            data={data}
            dates={dates}
            refetch={refetch}
            role="user"
            showWeekend={showWeekend}
            view={view}
          />
        )}
      </div>
    </div>
  );
};

export default UserCalendar;
