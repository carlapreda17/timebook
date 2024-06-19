import { getISODay, parseISO } from 'date-fns';

const checkForWeekendActivites = (activities) => {
  if (activities?.filter((item) => getISODay(parseISO(item.date)) >= 6).length > 0) {
    return true;
  }
  return false;
};

export default checkForWeekendActivites;
