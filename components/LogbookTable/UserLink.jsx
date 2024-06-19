import truncate from '../../functions/truncate';
import Link from '../Link';
import Tooltip from '../Tooltip';

const UserLink = ({ active, first_name, last_name, _id }) => {
  const fullName = first_name + ' ' + last_name?.toUpperCase();

  return (
    <Link href={`/admin/timesheets/people/${_id}`}>
      <a className="w-full font-semibold hover:text-sky-500">
        <span className={active ? '' : 'opacity-50 hover:opacity-100'}>
          {truncate(fullName, 35)}
        </span>
        {!active && (
          <span className="inline-block">
            <Tooltip icon="ml-2 fa-solid fa-user-slash text-accent">Persoana inactiva</Tooltip>
          </span>
        )}
      </a>
    </Link>
  );
};
export default UserLink;
