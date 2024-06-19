import { EditCalendarDayActivityModal, DeleteCalendarDayActivityModal } from '.';

const CalendarActivitiesContextMenuModals = ({
  role,
  modal,
  hideModal,
  refetch,
  selectedActivity,
  setShowMenu,
  activity,
}) => {
  return (
    <>
      <EditCalendarDayActivityModal
        role={role}
        modal={modal}
        hideModal={hideModal}
        refetch={refetch}
        selectedActivity={selectedActivity}
        setShowMenu={setShowMenu}
        {...activity}
      />
      <DeleteCalendarDayActivityModal
        role={role}
        modal={modal}
        hideModal={hideModal}
        refetch={refetch}
        selectedActivity={selectedActivity}
        {...activity}
      />
    </>
  );
};

export default CalendarActivitiesContextMenuModals;
