import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { AddUserVacationForm } from '.';

const AddUserVacationButton = ({ id, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="add-button"
        onClick={showModal}
      >
        <i className="fas fa-plus" />
        <span className="add-button-text">Adaugă zile</span>
      </button>
      <Modal centered show={isOpen} onHide={hideModal}>
        <AddUserVacationForm id={id} hideModal={hideModal} refetch={refetch} />
      </Modal>
    </>
  );
};

export default AddUserVacationButton;
