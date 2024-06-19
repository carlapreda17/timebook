import { format } from 'date-fns';
import { classnames } from '../../lib';
import FormatDuration from '../FormatDuration';

const CalendarCard = ({
  weekend,
  currentDate,
  setModal,
  children,
  view,
  setShowAlert,
  activities,
  ...props
}) => {
  const handleOpen = () => {
    setModal('add');
    setShowAlert(false);
  };
  const totalDuration = activities.reduce((acc, activity) => acc + activity.duration, 0);
  return (
    <div
      className={classnames(
        'border-t border-1 rounded-md text-center dark:bg-slate-800 bg-white dark:border-slate-700 overflow-auto',
        weekend === true && 'bg-white dark:bg-slate-800 dark:border-sky-600',
        view === 'monthly' ? 'md:h-32' : 'md:h-[60vh]'
      )}
      {...props}
    >
      <div className="grid  gap-2 p-2 border-b dark:border-slate-700">
        <div className="text-lg dark:text-gray-100 flex justify-between w-full px-2">
          {format(currentDate, 'd')} <FormatDuration duration={totalDuration} />
        </div>
        <button
          className="text-white bg-primary py-2 rounded-full cursor-pointer md:hidden block"
          onClick={handleOpen}
        >
          <i className="fa-solid fa-plus" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default CalendarCard;
