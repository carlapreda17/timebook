import React from 'react';
import { useQuery } from '../../hooks';

const ProjectFilter = ({ onChange, value }) => {
  const { data, status } = useQuery('projects', {
    active:true
  });

  const handleChange = (e) => {
    const project = data.find((project) => project._id === e.target.value);
    if (project) {
      onChange(project);
    } else {
      onChange({ id: '', name: '' });
    }
  };

  return (
    <div className="flex flex-col gap-1 tablet:w-56 laptop:w-80">
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-magnifying-glass"></i>
        <label className="font-medium">Nume proiect</label>
      </div>
      <select onChange={handleChange} value={value} className="select">
        <option value="">Toate proiectele</option>
        {status === 'success' &&
          data.map((project) => (
            <option value={project._id} key={project._id}>
              {project.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default ProjectFilter;
