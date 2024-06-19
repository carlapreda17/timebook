import { YearFilter } from '.';
import { UserFilter } from '../Fields';

const VacationTransactionsFilters = ({ setOptions }) => {
  const setYearFilter = (year) => {
    if (year) {
      setOptions((prev) => ({ ...prev, year: year }));
    } else {
      setOptions(({ year, ...prev }) => prev);
    }
  };
  const setUserFilter = (user) => {
    if (user) {
      setOptions((prev) => ({
        ...prev,
        user: user._id,
      }));
    } else {
      setOptions(({ user, ...prev }) => prev);
    }
  };
  return (
    <div className="flex gap-6">
      <YearFilter onChange={setYearFilter} />
      <UserFilter onChange={setUserFilter} />
    </div>
  );
};

export default VacationTransactionsFilters;
