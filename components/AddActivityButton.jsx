import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import AddActivityForm from './Forms/AddActivityForm';
import {useProfile} from "../hooks";

const AddActivityButton = ({ onHideModal, userId, projectId, isOnLogbook=false}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { me } = useProfile();


  if (me && me.role === 'user' && !userId) {
    userId = me.me;
  }
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
        ) : userId  ? (
          <AddActivityForm hideModal={hideModal} userId={userId}/>
        ) : (
          <AddActivityForm hideModal={hideModal} projectId={projectId}/>
        )}
      </Modal>
    </>
  );
};

export default AddActivityButton;
