import React from 'react';
import { Modal } from 'react-bootstrap';
import { deleteActivity } from '../../api/activities';
import { toaster } from '../../lib';
import EditActivityForm from '../Forms/EditActivityForm';
import { ConfirmModal } from '../LogbookTable';

const PersonalTimesheetRowModals = ({ hideModal, id, modal }) => {
  const handleDelete = async () => {
    try {
      await deleteActivity(id);
      toaster.success('Activitatea a fost stearsa cu succes!');
      hideModal();
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
      toaster.error('Activitatea nu a putut fi stearsa!');
    }
  };

  return (
    <>
      <ConfirmModal isOpen={modal == 'delete'} hide={hideModal} iAmSure={handleDelete}>
        Esti sigur ca doesti sa stergi aceasta activitate?
      </ConfirmModal>
      <Modal centered show={modal == 'edit'} onHide={hideModal}>
        <EditActivityForm id={id} hideModal={hideModal} />
      </Modal>
    </>
  );
};

export default PersonalTimesheetRowModals;
