import { MessageNoRows } from '../LogbookTable';
import ProjectCard from '../ProjectCard';

const ProjectListSuccess = ({ data, refetch }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {data.map((project) => (
          <ProjectCard key={project._id} project={project} refetch={refetch} />
        ))}
      </div>
      {!data?.length && <MessageNoRows />}
    </div>
  );
};

export default ProjectListSuccess;
