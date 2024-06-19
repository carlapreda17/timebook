import { useState } from 'react';
import { CalendarDayActivity, CalendarActivitiesContextMenuModals } from '.';

const CalendarDayActivites = ({
  activities,
  role,
  modal,
  setModal,
  refetch,
  view,
  showWeekend,
}) => {
  const [showMenu, setShowMenu] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');
  const hideModal = () => {
    setModal('');
  };
  const handleClick = (id) => {
    if (showMenu === '') {
      setSelectedActivity(id);
      return setShowMenu(id);
    }
    return setShowMenu('');
  };
  const showActivities = (activity) => {
    return (
      <li
        className="flex whitespace-nowrap gap-0.5 mx-1 text-white rounded mb-1 mr-1 text-xs"
        onClick={() => handleClick(activity._id)}
        key={activity._id}
      >
        <CalendarDayActivity
          activity={activity}
          key={activity._id}
          role={role}
          modal={modal}
          setModal={setModal}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          view={view}
          showWeekend={showWeekend}
        />
        <CalendarActivitiesContextMenuModals
          activity={activity}
          role={role}
          modal={modal}
          setModal={setModal}
          hideModal={hideModal}
          refetch={refetch}
          selectedActivity={selectedActivity}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
        />
      </li>
    );
  };
  return <ul className="text-xs mt-1 cursor-pointer">{activities.map(showActivities)}</ul>;
};

export default CalendarDayActivites;
