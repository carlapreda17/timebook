import { dateLocaleRo } from '../../functions';
import truncate from '../../functions/truncate';
import { classnames } from '../../lib';
import FormatDuration from '../FormatDuration';

const WeeklyViewActivity = ({ activity, role, showWeekend }) => {
  return (
    <span
      className={classnames(
        'flex flex-col w-full min-w-full rounded p-2 border-l-4'
        // showMenu === activity._id ? 'bg-secondary' : 'bg-primary'
      )}
      style={{
        backgroundColor: activity.project.design_color,
        borderColor: activity.project.design_color,
      }}
    >
      <div className="flex mb-1 justify-between font-bold">
        <div className="text-left text-base">
          {truncate(activity.project.name, showWeekend ? 12 : 20) + ' '}
        </div>
        <div className="text-right">
          <FormatDuration duration={activity.duration} />
        </div>
      </div>
      <span className="line-clamp-2 text-ellipsis whitespace-normal text-left mb-1 italic">
        {activity.description}
      </span>
      <div className={classnames('flex', showWeekend === true && 'flex-col')}>
        <span className="w-8/12 text-left">{dateLocaleRo(activity.date)}</span>
        {role === 'admin' && (
          <span className={showWeekend && 'text-left'}>
            {activity.user.first_name + ' ' + activity.user.last_name}
          </span>
        )}
      </div>
    </span>
  );
};

export default WeeklyViewActivity;
