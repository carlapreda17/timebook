import dateLocaleRo from './dateLocaleRo';

const getDayNumber = (date) => dateLocaleRo(new Date(date)).substring(0, 2);

const nextDay = (date) => date.setDate(date.getDate() + 1);

const getDaysInRange = (startDate, endDate) => {
  if (!startDate || !endDate) {
    return [];
  }

  const date = new Date(startDate.getTime());

  const dates = [];

  while (date <= endDate) {
    dates.push(getDayNumber(date));
    nextDay(date);
  }

  return dates;
};

export default getDaysInRange;
