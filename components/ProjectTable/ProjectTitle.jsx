import React from 'react';
import { useQuery } from '../../hooks';
import { useEffect } from 'react';

const ProjectTitle = ({ projectId, setSelectedProject }) => {
  const { data, status } = useQuery(`projects/${projectId}`);

  useEffect(() => {
    if (status === 'success') setSelectedProject(data);
  }, [status]);

  return status === 'success' && <h1 className="font-bold text-2xl mr-2">{data.name}</h1>;
};

export default ProjectTitle;
