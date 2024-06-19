import { format, getDate, getSeconds } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ro from 'date-fns/locale/ro';
import { getHours, getMinutes } from 'date-fns';

const TimeAndDateWidget = () => {
  const [time, setTime] = useState({
    hour: getHours(new Date()),
    minutes: getMinutes(new Date()),
    seconds: getSeconds(new Date()),
  });
  const date = getDate(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime({
        hour: getHours(new Date()),
        minutes: getMinutes(new Date()),
        seconds: getSeconds(new Date()),
      });
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col mx-auto bg-blue-600 text-white mb-5 rounded-lg p-4 w-42 max-w-sm">
      <span className="text-center text-4xl">
        {time.hour < 10 ? '0' + time.hour : time.hour}
        {' : '}
        {time.minutes < 10 ? '0' + time.minutes : time.minutes}
        {' : '}
        {time.seconds < 10 ? '0' + time.seconds : time.seconds}
      </span>
      <span className="text-center text-4xl">
        {date < 10 ? '0' + date : date} {format(new Date(2020, 1, 10), 'EEEE', { locale: ro })}
      </span>
    </div>
  );
};

export default TimeAndDateWidget;
