import { classnames } from '../lib';
import { ProjectCardBody, ProjectCardFooter, ProjectCardHeader } from './Project/';

const ProjectCard = ({ project, refetch }) => {
  const { active } = project;
  return (
    <>
      <div
        className={classnames(
          'border rounded shadow duration-500 relative flex flex-col p-4 dark:bg-slate-800 dark:border-slate-700',
          active ? 'bg-white' : 'bg-gray-300 text-gray-700'
        )}
      >
        <ProjectCardHeader {...project} />
        <ProjectCardBody {...project} />
        <ProjectCardFooter {...project} refetch={refetch} />
      </div>
    </>
  );
};

export default ProjectCard;
