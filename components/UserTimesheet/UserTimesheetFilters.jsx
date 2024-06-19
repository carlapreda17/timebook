import { DateRange, ProjectFilter } from '../Fields';

const UserTimesheetFilters = ({ setOptions }) => {
  const setProjectFilter = (project) => {
    if (project) {
      setOptions((prev) => ({ ...prev, projectId: project._id }));
    } else {
      setOptions(({ project, ...prev }) => prev);
    }
  };

  const setRangeFilter = ({ from, to }) => {
    if (from && to) {
      setOptions((prev) => ({
        ...prev,
        from,
        to,
      }));
    } else {
      setOptions(({ from, to, ...prev }) => prev);
    }
  };

  return (
    <div className="flex gap-6 flex-col md:flex-row">
      <ProjectFilter onChange={setProjectFilter}></ProjectFilter>
      <DateRange className="flex gap-5 flex-col md:flex-row" onChange={setRangeFilter} />
    </div>
  );
};

export default UserTimesheetFilters;
