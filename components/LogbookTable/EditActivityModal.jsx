import { Modal } from 'react-bootstrap';
import EditActivityForm from '../Forms/EditActivityForm';

const EditActivityModal = ({ isOpen, hide, id }) => {
  return (
    <Modal centered show={isOpen} onHide={hide}>
      <EditActivityForm hideModal={hide} id={id} />
    </Modal>
  );
};

export default EditActivityModal;
