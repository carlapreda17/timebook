import ProjectListActiveFilter from './ProjectListActiveFilter';
import ProjectNameFilter from './ProjectNameFilter';

const ProjectListFilters = ({ setOptions }) => {
  const setActiveFilter = (active) => {
    if (active) {
      setOptions((prev) => ({
        ...prev,
        active,
      }));
    } else {
      setOptions(({ active, ...prev }) => prev);
    }
  };

  const setNameFilter = (name) => {
    if (name) {
      setOptions((prev) => ({
        ...prev,
        name,
      }));
    } else {
      setOptions(({ name, ...prev }) => prev);
    }
  };

  return (
    <div className="flex gap-6">
      <ProjectListActiveFilter onChange={setActiveFilter} />
      <ProjectNameFilter onChange={setNameFilter} />
    </div>
  );
};

export default ProjectListFilters;
