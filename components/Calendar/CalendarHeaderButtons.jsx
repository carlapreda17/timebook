import { CalendarHeaderButtonsUser, CalendarHeaderButtonsAdmin } from '.';

const CalendarHeaderButtons = ({ role, refetch }) => {
  return (
    <>
      {role === 'admin' ? (
        <CalendarHeaderButtonsAdmin onHideModal={refetch} />
      ) : (
        <CalendarHeaderButtonsUser onHideModal={refetch} />
      )}
    </>
  );
};

export default CalendarHeaderButtons;
