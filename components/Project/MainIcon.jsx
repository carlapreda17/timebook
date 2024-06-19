import Link from '../Link';

const ProjectMainIcon = ({ id, icon }) => (
  <Link href={`/admin/timesheets/projects/${id}`}>
    <i className={icon + ' text-3xl text-primary cursor-pointer dark:text-slate-200'}></i>
  </Link>
);

export default ProjectMainIcon;
