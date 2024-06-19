import { formatDistanceToNow } from 'date-fns';
import { ro } from 'date-fns/locale';
import { isValidDate } from '../../functions';

const PollsCardCreatedAt = ({ createdAt }) => {
  if (!isValidDate(createdAt)) {
    return null;
  }

  const distance = formatDistanceToNow(new Date(createdAt), { locale: ro });

  return (
    <div className="flex items-center text-xs text-gray-500 dark:text-slate-400">
      Creat acum {distance}
    </div>
  );
};

export default PollsCardCreatedAt;
