import { UserFilter } from '../Fields';

const FeedbackTableFilters = ({ setOptions }) => {
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
    if (value !== '') {
      setOptions((prev) => ({
        ...prev,
        solved: value,
      }));
    } else {
      setOptions(({ solved, ...prev }) => prev);
    }
  };

  return (
    <div className="flex gap-6">
      <UserFilter onChange={setUserFilter} />
    </div>
  );
};

export default FeedbackTableFilters;
