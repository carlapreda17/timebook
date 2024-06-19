import truncate from '../../functions/truncate';
import { useProfile } from '../../hooks';
import Link from '../Link';

const ProjectLink = ({ name, _id }) => {
  const { me } = useProfile();
  const { role } = me;

  return (
    <Link href={`/${role}/timesheets/projects/${_id}`}>
      <a className="w-full line-clamp-1">{truncate(name, 35)}</a>
    </Link>
  );
};
export default ProjectLink;
