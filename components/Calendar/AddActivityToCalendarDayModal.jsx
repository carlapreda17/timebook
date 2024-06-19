import { format } from 'date-fns';
import { Modal } from 'react-bootstrap';
import { AddActivityToCalendarDayForm } from '.';
import { AddActivityToCalendarDayUser } from '../UserCalendar';

const AddActivityToCalendarDayModal = ({ show, hide, date, refetch, role }) => {
  const currentDate = format(date, 'yyyy-MM-dd');
  return (
    <Modal centered show={show} onHide={hide}>
      {role === 'admin' ? (
        <AddActivityToCalendarDayForm hide={hide} date={currentDate} refetch={refetch} />
      ) : (
        <AddActivityToCalendarDayUser hide={hide} date={currentDate} refetch={refetch} />
      )}
    </Modal>
  );
};

export default AddActivityToCalendarDayModal;
