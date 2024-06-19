import { CalendarDayActivityTooltip } from '.';
import truncate from '../../functions/truncate';
import { classnames } from '../../lib';
import FormatDuration from '../FormatDuration';

const MonthlyViewActivity = ({ activity, role, showWeekend }) => {
  return (
    <CalendarDayActivityTooltip activity={activity} role={role}>
      <span
        className={classnames(
          'flex px-1 w-full rounded flex-grow'
          // showMenu === activity._id ? 'bg-secondary' : 'bg-primary'
        )}
        style={{ backgroundColor: activity.project.design_color }}
      >
        <span className="w-8/12 text-left">
          {truncate(activity.project.name, showWeekend ? 20 : 25) + ' '}
        </span>
        <span className="w-3/12 text-right">
          <FormatDuration duration={activity.duration} smallText={true} />
        </span>
      </span>
    </CalendarDayActivityTooltip>
  );
};

export default MonthlyViewActivity;
