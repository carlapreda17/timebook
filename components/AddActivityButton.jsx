import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import AddActivityForm from './Forms/AddActivityForm';
import AddActivityToProjectForm from "./Forms/AddActivityToProjectForm";

const AddActivityButton = ({ onHideModal, projectId, isOnLogbook=false }) => {
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
        className="add-button"
        onClick={showModal}
      >
        <i className="fas fa-plus" />
        <span className="add-button-text">Adaugă activitate</span>
      </button>
      <Modal centered show={isOpen} onHide={hideModal}>
        {isOnLogbook ? (
          <AddActivityForm hideModal={hideModal} />
        ) : (
          <AddActivityToProjectForm hideModal={hideModal} projectId={projectId} />
        )}
      </Modal>
    </>
  );
};

export default AddActivityButton;
