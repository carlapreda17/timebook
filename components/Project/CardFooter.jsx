import ProjectCardActions from './CardActions';
import ProjectIconImportant from './IconImportant';
import ProjectIconUrgent from './IconUrgent';
import ProjectLastUpdate from './LastUpdate';

const ProjectCardFooter = ({ _id, important, refetch, updatedAt, urgent }) => {
  return (
    <div className="flex justify-between items-center pt-2">
      <div className="flex">
        {important && <ProjectIconImportant />}
        {urgent && <ProjectIconUrgent />}
      </div>
      <div className="flex gap-4">
        <ProjectLastUpdate updatedAt={updatedAt} />
        <ProjectCardActions _id={_id} refetch={refetch} />
      </div>
    </div>
  );
};

export default ProjectCardFooter;
