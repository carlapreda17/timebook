import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useProfile } from '../../hooks';
import AddUserTimeSheetEntry from '../Forms/AddUserTimeSheetEntry';

const AddActivityButton = ({ onHideModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { me, status } = useProfile();
  const showModal = () => setIsOpen(true);
  const hideModal = () => {
    setIsOpen(false);
    if (typeof onHideModal === 'function') {
      onHideModal();
    }
  };

  return (
    <>
      <button
        className="add-button"
        onClick={showModal}
      >
        <i className="fas fa-plus" />
        <span className="add-button-text">Adaugă activitate</span>
      </button>
      <Modal centered show={isOpen} onHide={hideModal}>
        {status === 'success' && (
          <AddUserTimeSheetEntry hideModal={hideModal} id={me.me} refetch={onHideModal} />
        )}
      </Modal>
    </>
  );
};

export default AddActivityButton;
