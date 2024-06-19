import Link from '../Link';

const ProjectTitle = ({ id, name }) => (
  <Link href={`/admin/timesheets/projects/${id}`}>
    <h2 className="text-xl font-semibold cursor-pointer hover:text-primary dark:text-white">
      {name}
    </h2>
  </Link>
);

export default ProjectTitle;
