import { deleteActivity } from '../../api/activities';
import { toaster } from '../../lib';
import { ConfirmModal, EditActivityModal } from '.';

const ActivityRowModals = ({ hideModal, id, modal }) => {
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
      <EditActivityModal isOpen={modal == 'edit'} hide={hideModal} id={id} />
      <ConfirmModal isOpen={modal == 'delete'} hide={hideModal} iAmSure={handleDelete}>
        Esti sigur ca doesti sa stergi aceasta activitate?
      </ConfirmModal>
    </>
  );
};

export default ActivityRowModals;
