import React from 'react';

const ProjectTimesheetLoading = () => {
  return (
    <div className="card">
      <div className="flex justify-between md:px-5 pt-5">
        <div className="h-10 w-40 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="h-10 w-32 bg-gray-200 rounded-md animate-pulse"></div>
      </div>
      <div className="flex gap-8 px-2 md:px-5 pt-5">
        <div className="h-6 w-40 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="h-6 w-40 bg-gray-200 rounded-md animate-pulse"></div>
      </div>
      <div className="md:px-5 mt-5">
        <div className="h-96 w-full bg-gray-200 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProjectTimesheetLoading;
