import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import AddActivityForm from '../Forms/AddActivityForm';

const AddActivityButton = ({ onHideModal }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4"
        onClick={showModal}
      >
        <i className="fas fa-plus" />
        <span className="ml-2">Adauga activitate</span>
      </button>
      <Modal centered show={isOpen} onHide={hideModal}>
        <AddActivityForm hideModal={hideModal} />
      </Modal>
    </>
  );
};

export default AddActivityButton;
