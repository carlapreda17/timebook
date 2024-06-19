import { addDays, endOfWeek, getMonth, startOfISOWeek } from 'date-fns';
import { useEffect, useState } from 'react';
import { CalendarDay, BlankCalendarDay } from '.';
import { checkForWeekendActivites, dateLocaleRo, getWeekDaysNames } from '../../functions';
import { classnames } from '../../lib';
import { UserCalendarAlert } from '../UserCalendar';

const CalendarBody = ({
  dates,
  data,
  refetch,
  role = 'admin',
  showWeekend,
  setShowWeekend,
  view,
}) => {
  useEffect(() => {
    if (checkForWeekendActivites(data) && role === 'admin') {
      return setShowWeekend(true);
    }
  }, []);
  const [showAlert, setShowAlert] = useState(true);
  const generateDatesForCurrentWeek = (date, showWeekend) => {
    let currentDate = date;
    const week = [];
    const limit = showWeekend ? 7 : 5;
    for (let day = 0; day < limit; day++) {
      if (
        (getMonth(currentDate) === getMonth(dates.startDate) && view === 'monthly') ||
        view === 'weekly'
      ) {
        week.push(
          <CalendarDay
            currentDate={currentDate}
            activities={getActivities(data, currentDate)}
            weekend={day >= 5 ? true : false}
            date={currentDate}
            refetch={refetch}
            role={role}
            view={view}
            showWeekend={showWeekend}
            setShowAlert={setShowAlert}
          />
        );
      } else {
        week.push(<BlankCalendarDay />);
      }
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };
  const getDates = () => {
    const startDate = startOfISOWeek(dates.startDate);
    const endDate = view === 'monthly' ? endOfWeek(dates.endDate) : dates.startDate;

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(generateDatesForCurrentWeek(currentDate, showWeekend));
      currentDate = addDays(currentDate, 7);
    }

    return (
      <div
        className={classnames(
          showWeekend
            ? 'flex flex-col sm:grid sm:grid-cols-7'
            : 'flex flex-col md:grid md:grid-cols-5',
          view === 'monthly' ? 'gap-1' : 'gap-3'
        )}
      >
        {allWeeks}
      </div>
    );
  };

  const getActivities = (data, date) => {
    const activities = data?.filter(function (element) {
      return dateLocaleRo(element.date) === dateLocaleRo(date);
    });
    return activities;
  };
  return (
    <div>
      {role === 'user' && <UserCalendarAlert show={showAlert} setShow={setShowAlert} data={data} />}
      {getWeekDaysNames(dates.startDate, showWeekend)}
      {getDates()}
    </div>
  );
};

export default CalendarBody;
