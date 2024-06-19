import { CalendarActivitiesContextMenu, MonthlyViewActivity, WeeklyViewActivity } from '.';

const CalendarDayActivity = ({
  activity,
  setShowMenu,
  showMenu,
  modal,
  setModal,
  role,
  view,
  showWeekend,
}) => {
  return (
    <>
      {view === 'monthly' ? (
        <MonthlyViewActivity
          activity={activity}
          showMenu={showMenu}
          role={role}
          showWeekend={showWeekend}
        />
      ) : (
        <WeeklyViewActivity
          activity={activity}
          showMenu={showMenu}
          role={role}
          showWeekend={showWeekend}
        />
      )}
      {showMenu === activity._id && (
        <div className="relative top-4 right-3/4">
          <div className="absolute bg-white rounded-lg shadow-xl z-50 border">
            <CalendarActivitiesContextMenu
              setShowMenu={setShowMenu}
              role={role}
              id={activity._id}
              modal={modal}
              setModal={setModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CalendarDayActivity;
