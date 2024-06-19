import { formatDistanceToNow } from 'date-fns';
import { ro } from 'date-fns/locale';

const { isValidDate } = require('../../functions');

const ProjectLastUpdate = ({ updatedAt }) => {
  if (!isValidDate(updatedAt)) {
    return null;
  }
  const distance = formatDistanceToNow(new Date(updatedAt), { locale: ro });

  return (
    <div className="flex items-center text-xs dark:text-slate-300">Actualizat acum {distance}</div>
  );
};

export default ProjectLastUpdate;
