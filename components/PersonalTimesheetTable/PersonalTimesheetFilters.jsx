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
    <div className="flex gap-6">
      <ProjectFilter onChange={setProjectFilter} />
      <DateRange className="flex gap-6" onChange={setRangeFilter} />
    </div>
  );
};

export default PersonalTimesheetFilters;
