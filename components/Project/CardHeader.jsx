import ProjectMainIcon from './MainIcon';
import ProjectTitle from './ProjectTitle';

const ProjectCardHeader = ({ _id, name, icon, status }) => (
  <div className="flex justify-between w-full mb-6">
    <div className="flex flex-col">
      <ProjectTitle id={_id} name={name} />
      <h5 className="text-gray-500 dark:text-slate-300">{status}</h5>
    </div>
    <ProjectMainIcon id={_id} icon={icon} />
  </div>
);

export default ProjectCardHeader;
