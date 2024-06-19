import React from 'react';
import { Modal } from 'react-bootstrap';
import { deleteActivity } from '../../api/activities';
import { toaster } from '../../lib';
import { ConfirmModal } from '../LogbookTable';
import UserActivityEditForm from '../ProjectTable/UserActivityEditForm';

const UserTimesheetRowModals = ({ hideModal, id, modal }) => {
  const handleDelete = async () => {
    try {
      await deleteActivity(id);
      toaster.success('Activitatea a fost stearsa cu succes!');
      hideModal();
    } catch (err) {
      toaster.error('Activitatea nu a putut fi stearsa!');
    }
  };

  return (
    <>
      <ConfirmModal isOpen={modal == 'delete'} hide={hideModal} iAmSure={handleDelete}>
        Esti sigur ca doesti sa stergi aceasta activitate?
      </ConfirmModal>
      <Modal centered show={modal == 'edit'} onHide={hideModal}>
        <UserActivityEditForm hideModal={hideModal} id={id} />
      </Modal>
    </>
  );
};

export default UserTimesheetRowModals;
