import { ShowWeekendDays } from '.';
import { ProjectFilter } from '../Fields';

const CalendarHeaderFilters = ({ setOptions, setShowWeekend, showWeekend }) => {
  const setProjectFilter = (project) => {
    if (project) {
      setOptions((prev) => ({ ...prev, projectId: project._id }));
    } else {
      setOptions(({ project, ...prev }) => prev);
    }
  };
  const handleShowWeekend = () => {
    setShowWeekend(!showWeekend);
  };
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:items-end">
      <ProjectFilter onChange={setProjectFilter} />
      <ShowWeekendDays onChange={handleShowWeekend} showWeekend={showWeekend} />
    </div>
  );
};

export default CalendarHeaderFilters;
