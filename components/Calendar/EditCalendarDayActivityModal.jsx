import { Modal } from 'react-bootstrap';
import { EditDayActivityFormAdmin, EditDayActivityFormUser } from '../Forms';

const EditCalendarDayActivityModal = ({
  _id,
  role,
  modal,
  hideModal,
  refetch,
  selectedActivity,
  setShowMenu,
}) => {
  return (
    <Modal centered show={modal === 'edit' && _id === selectedActivity} onHide={hideModal}>
      {role === 'admin' ? (
        <EditDayActivityFormAdmin
          id={_id}
          hideModal={hideModal}
          refetch={refetch}
          setShowMenu={setShowMenu}
        />
      ) : (
        <EditDayActivityFormUser
          id={_id}
          hideModal={hideModal}
          refetch={refetch}
          setShowMenu={setShowMenu}
        />
      )}
    </Modal>
  );
};

export default EditCalendarDayActivityModal;
