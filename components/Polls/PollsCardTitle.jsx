import Link from 'next/link';
import truncate from '../../functions/truncate';
import { useProfile } from '../../hooks';

const PollsCardTitle = ({ title, id }) => {
  const { me } = useProfile();

  const LIMIT = 70;
  return (
    <div className="flex flex-col">
      <Link href={`/${me?.role}/polls/${id}`}>
        <h3 className="text-lg font-semibold cursor-pointer whitespace-normal hover:text-primary dark:text-white">
          {truncate(title, LIMIT)}
        </h3>
      </Link>
    </div>
  );
};

export default PollsCardTitle;
