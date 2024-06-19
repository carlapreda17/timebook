import React from 'react';
import ProjectCardError from '../ProjectCardError';

const ProjectListError = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
      {[...Array(9)].map((element, index) => (
        <ProjectCardError key={index}></ProjectCardError>
      ))}
    </div>
  );
};

export default ProjectListError;
