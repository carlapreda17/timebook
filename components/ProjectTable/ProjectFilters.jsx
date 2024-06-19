import { DateRange, UserFilter } from '../Fields';

const ProjectFilters = ({ setOptions, setSelectedPerson }) => {
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
    <div className="flex gap-6">
      <UserFilter onChange={setUserFilter}></UserFilter>
      <DateRange className="flex gap-5" onChange={setRangeFilter} />
    </div>
  );
};

export default ProjectFilters;
