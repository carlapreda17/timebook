import { DateRange, ProjectFilter, UserFilter } from '../Fields';

const LogbookFilters = ({ setOptions, setSelectedPerson, setSelectedProject }) => {
  const setProjectFilter = (project) => {
    if (project) {
      setOptions((prev) => ({ ...prev, projectId: project._id }));
      setSelectedProject(project);
    } else {
      setOptions(({ project, ...prev }) => prev);
      setSelectedProject({});
    }
  };

  const setUserFilter = (user) => {
    if (user) {
      setOptions((prev) => ({
        ...prev,
        userId: user._id,
      }));
      setSelectedPerson(user);
    } else {
      setOptions(({ user, ...prev }) => prev);
      setSelectedPerson({});
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
      <UserFilter onChange={setUserFilter} isOnLogbook={true}></UserFilter>
      <DateRange className="filters-container" isOnLogbook={true} onChange={setRangeFilter} />
    </div>
  );
};

export default LogbookFilters;
