import { format } from 'date-fns';
import { Modal } from 'react-bootstrap';
import { AddActivityToCalendarDayForm } from '.';
import { useProfile } from '../../hooks';


const AddActivityToCalendarDayModal = ({ show, hide, date, refetch, role }) => {
  const currentDate = format(date, 'yyyy-MM-dd');
  const { me } = useProfile();
  const userId = role === 'user' ? me.me : null;
  return (
    <Modal centered show={show} onHide={hide}>
        <AddActivityToCalendarDayForm hide={hide} date={currentDate} refetch={refetch} role={role} userId={userId} />
    </Modal>
  );
};

export default AddActivityToCalendarDayModal;
