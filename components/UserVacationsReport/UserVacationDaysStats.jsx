import { getYear } from 'date-fns';
import {
  VacationDaysExtraTimeForCurrentYear,
  VacationDaysForCurrentYearUsed,
  VacationDaysForCurrentYear,
  VacationDaysForCurrentYearRemaining,
} from '.';

const UserVacationDaysStats = ({ id }) => {
  const currentYear = getYear(new Date());
  const getTotal = (data) => {
    const total = data.reduce(function (sum, item) {
      return sum + item.amount;
    }, 0);
    return total;
  };
  return (
    <div className="p-4 flex flex-col">
      <VacationDaysForCurrentYear id={id} currentYear={currentYear} getTotal={getTotal} />
      <VacationDaysForCurrentYearUsed id={id} currentYear={currentYear} getTotal={getTotal} />
      <VacationDaysForCurrentYearRemaining id={id} currentYear={currentYear} getTotal={getTotal} />
      <VacationDaysExtraTimeForCurrentYear id={id} currentYear={currentYear} getTotal={getTotal} />
    </div>
  );
};

export default UserVacationDaysStats;
