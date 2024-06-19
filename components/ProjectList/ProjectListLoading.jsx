import React from 'react';
import ProjectCardLoading from '../ProjectCardLoading';

const ProjectListLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
      {[...Array(9)].map((item, index) => (
        <ProjectCardLoading key={'loading' + '-' + index}></ProjectCardLoading>
      ))}
    </div>
  );
};

export default ProjectListLoading;
