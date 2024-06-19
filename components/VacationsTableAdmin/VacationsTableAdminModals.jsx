// import { Modal } from 'react-bootstrap';
import { approveVacation, deleteVacation, rejectVacation } from '../../api/vacations';
import { toaster } from '../../lib';
import { ConfirmModal } from '../LogbookTable';
// import { ApproveVacationForm } from '../Vacations';

const VacationsTableAdminModals = ({ hideModal, modal, id, refetch }) => {
  const handleApprove = async () => {
    try {
      await approveVacation(id);
      toaster.success('Cererea a fost aprobata cu succes!');
      hideModal();
      refetch();
    } catch (e) {
      toaster.error('Cererea nu a putut fi aprobata!');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  const handleReject = async () => {
    try {
      await rejectVacation(id);
      toaster.success('Cererea a fost respinsa cu succes!');
      hideModal();
      refetch();
    } catch (e) {
      toaster.error('Cererea nu a putut fi respinsa!');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteVacation(id);
      toaster.success('Cererea a fost stearsa cu succes!');
      hideModal();
      refetch();
    } catch (e) {
      toaster.error('Cererea nu a putut fi stearsa!');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <>
      <ConfirmModal isOpen={modal === 'approve'} hide={hideModal} iAmSure={handleApprove}>
        Esti sigur ca doresti sa aprobi aceasta cerere?
      </ConfirmModal>
      {/* <Modal show={modal == 'approve'} onHide={hideModal} centered>
        <ApproveVacationForm id={id} hideModal={hideModal} refetch={refetch} />
      </Modal> */}
      <ConfirmModal isOpen={modal == 'reject'} hide={hideModal} iAmSure={handleReject}>
        Ești sigur că dorești să respingi această cerere?
      </ConfirmModal>
      <ConfirmModal isOpen={modal === 'delete'} hide={hideModal} iAmSure={handleDelete}>
        Ești sigur că dorești să ștergi această cerere?
      </ConfirmModal>
    </>
  );
};

export default VacationsTableAdminModals;
