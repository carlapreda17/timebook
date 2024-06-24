import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useQuery } from '../../hooks';
import AddTimeSheetEntry from '../Forms/AddTimeSheetEntry';
import AddActivityButtonLoading from './AddActivityButtonLoading';
import DisabledAddActivityButton from './DisabledAddActivityButton';

const AddActivityButton = ({ onHideModal, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, status } = useQuery(`/identity/${id}`);

  const showModal = () => setIsOpen(true);
  const hideModal = () => {
    setIsOpen(false);
    if (typeof onHideModal === 'function') {
      onHideModal();
    }
  };
  return (
    <>
      {status !== 'success' && <AddActivityButtonLoading />}
      {status === 'success' && (
        <>
          {data.active === true ? (
            <button
              className="add-button"
              onClick={showModal}
            >
              <i className="fas fa-plus" />
              <span className="add-button-text">Adaugă activitate</span>
            </button>
          ) : (
            <DisabledAddActivityButton />
          )}
        </>
      )}
      <Modal centered show={isOpen} onHide={hideModal}>
        <AddTimeSheetEntry hideModal={hideModal} id={id} refetch={onHideModal} />
      </Modal>
    </>
  );
};

export default AddActivityButton;
