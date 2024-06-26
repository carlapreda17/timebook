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
    <div className="flex laptop:grid gap-6 ">
      <ProjectFilter onChange={setProjectFilter}></ProjectFilter>
      <UserFilter onChange={setUserFilter} isOnLogbook={true}></UserFilter>
      <DateRange className="flex gap-5 laptop:grid" isOnLogbook={true} onChange={setRangeFilter} />
    </div>
  );
};

export default LogbookFilters;
