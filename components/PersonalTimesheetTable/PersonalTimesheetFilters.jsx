import React from 'react';
import { DateRange, ProjectFilter } from '../Fields';

const PersonalTimesheetFilters = ({ setOptions, setSelectedProject }) => {
  const setProjectFilter = (project) => {
    if (project) {
      setOptions((prev) => ({ ...prev, projectId: project._id }));
      setSelectedProject(project);
    } else {
      setOptions(({ project, ...prev }) => prev);
      setSelectedProject({});
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
      <ProjectFilter onChange={setProjectFilter} />
      <DateRange className="filters-container" onChange={setRangeFilter} isPersonalTimesheet={true}/>
    </div>
  );
};

export default PersonalTimesheetFilters;
