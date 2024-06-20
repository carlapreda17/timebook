import React from 'react';

const ProjectListActiveFilter = ({ onChange }) => {
  return (
    <div className="w-1/3 lg:w-1/4 tablet:w-1/2">
      <label className="font-semibold mb-1">Tip proiecte</label>
      <select className="select" onChange={(e) => onChange(e.target.value)}>
        <option className="w-full" value={true}>
          Proiecte active
        </option>
        <option className="w-full" value={false}>
          Proiecte inactive
        </option>
        <option className="w-full" value="">
          Toate
        </option>
      </select>
    </div>
  );
};

export default ProjectListActiveFilter;
