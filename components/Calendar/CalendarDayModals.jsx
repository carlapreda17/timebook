import { AddActivityToCalendarDayModal } from '.';

const CalendarDayModals = ({ modal, hideModal, date, refetch, role }) => {
  return (
    <>
      <AddActivityToCalendarDayModal
        show={modal === 'add'}
        hide={hideModal}
        date={date}
        refetch={refetch}
        role={role}
      />
    </>
  );
};

export default CalendarDayModals;
