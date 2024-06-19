import { UserFilter } from '../Fields';
import { VacationStatusFilter, PastVacationsFilter } from '.';
import { format } from 'date-fns';

const VacationsTableAdminFilters = ({ setOptions }) => {
  const setUserFilter = (user) => {
    if (user) {
      setOptions((prev) => ({
        ...prev,
        userId: user._id,
      }));
    } else {
      setOptions(({ user, ...prev }) => prev);
    }
  };

  const setStatusFilter = (value) => {
    if (value) {
      setOptions((prev) => ({
        ...prev,
        status: value,
      }));
    } else {
      setOptions(({ status, ...prev }) => prev);
    }
  };

  const pastVacationsFilter = (e) => {
    if (e.target.checked) {
      setOptions((current) => {
        const { from, ...rest } = current;
        return rest;
      });
    } else {
      return setOptions((prev) => ({
        ...prev,
        from: format(new Date(), 'yyyy-MM-dd'),
      }));
    }
  };

  return (
    <div className="flex gap-6">
      <UserFilter onChange={setUserFilter} />
      <VacationStatusFilter onChange={setStatusFilter} />
      <PastVacationsFilter onChange={pastVacationsFilter} />
    </div>
  );
};

export default VacationsTableAdminFilters;
