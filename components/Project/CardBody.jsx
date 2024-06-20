const ProjectCardBody = ({ description }) => (
  <div className="flex-grow-1 mb-6">
    <h3 className="line-clamp-3 dark:text-slate-300 mobile:text-xs">{description}</h3>
  </div>
);

export default ProjectCardBody;
