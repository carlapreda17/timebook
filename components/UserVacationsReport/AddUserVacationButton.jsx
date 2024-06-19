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
      <button
        className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4"
        onClick={showModal}
      >
        <i className="fas fa-plus" />
        <span className="ml-2">Adauga zile</span>
      </button>
      <Modal centered show={isOpen} onHide={hideModal}>
        <AddUserVacationForm id={id} hideModal={hideModal} refetch={refetch} />
      </Modal>
    </>
  );
};

export default AddUserVacationButton;
