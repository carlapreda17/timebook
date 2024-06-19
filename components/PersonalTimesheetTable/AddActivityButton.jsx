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
              className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4"
              onClick={showModal}
            >
              <i className="fas fa-plus" />
              <span className="ml-2">Adauga activitate</span>
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
