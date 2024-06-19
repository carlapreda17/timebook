import { format } from 'date-fns';
import { useState } from 'react';
import { CalendarCard, CalendarDayActivites, CalendarDayModals } from '.';
import { classnames } from '../../lib';

const CalendarDay = ({
  currentDate,
  activities,
  weekend,
  date,
  refetch,
  role,
  view,
  showWeekend,
  setShowAlert,
}) => {
  const [modal, setModal] = useState('');
  const hideModal = () => {
    setModal('');
  };
  const [viewButton, setViewButton] = useState(false);

  const hoverHandler = () => {
    setViewButton(true);
  };

  const leaveHoverHandler = () => {
    setViewButton(false);
  };

  const handleOpen = () => {
    setModal('add');
    setShowAlert(false);
  };

  return (
    <CalendarCard
      currentDate={currentDate}
      weekend={weekend}
      setModal={setModal}
      view={view}
      setShowAlert={setShowAlert}
      onMouseEnter={hoverHandler}
      onMouseLeave={leaveHoverHandler}
      activities={activities}
    >
      <div>
        <CalendarDayActivites
          activities={activities}
          role={role}
          modal={modal}
          setModal={setModal}
          refetch={refetch}
          view={view}
          showWeekend={showWeekend}
        />
        {(viewButton || new Date().getDate() === +format(currentDate, 'd')) && (
          <div
            className={classnames(
              'hidden sm:flex gap-2 items-center p-3 py-2.5 mx-1 mb-4 rounded hover:bg-gray-200 cursor-pointer transition duration-100 dark:text-slate-300 dark:hover:bg-slate-700'
            )}
            onClick={handleOpen}
          >
            <i className="fa-solid fa-plus" /> Adaugă activitate
          </div>
        )}
        <CalendarDayModals
          modal={modal}
          hideModal={hideModal}
          date={date}
          refetch={refetch}
          role={role}
        />
      </div>
    </CalendarCard>
  );
};

export default CalendarDay;
