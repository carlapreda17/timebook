import { TypeFilter, ShowRejectedFilter } from '.';

const UserVacationReportTableFilters = ({ setOptions }) => {
  const setTypeFilter = (type) => {
    if (type) {
      setOptions((prev) => ({ ...prev, type: type }));
    } else {
      setOptions(({ type, ...prev }) => prev);
    }
  };

  const showRejectedFilter = (e) => {
    if (e.target.checked) {
      setOptions((current) => {
        const { dontShow, ...rest } = current;
        return rest;
      });
    } else {
      return setOptions((prev) => ({
        ...prev,
        dontShow: 'vacation-rejected',
      }));
    }
  };

  return (
    <div className="flex gap-4 mt-4">
      <TypeFilter onChange={setTypeFilter} />
      <ShowRejectedFilter onChange={showRejectedFilter} />
    </div>
  );
};

export default UserVacationReportTableFilters;
