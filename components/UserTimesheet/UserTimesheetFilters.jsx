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
    <div className="filters-container">
      <ProjectFilter onChange={setProjectFilter}></ProjectFilter>
      <DateRange className="filters-container" onChange={setRangeFilter} isPersonalTimesheet={true}/>
    </div>
  );
};

export default UserTimesheetFilters;
