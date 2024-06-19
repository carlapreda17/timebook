import { activatePerson, deletePerson } from '../../api/persons';
import { toaster } from '../../lib';
import { ConfirmModal } from '../LogbookTable';

const PersonRowModals = ({ hideModal, id, modal }) => {
  const handleDelete = async () => {
    try {
      await deletePerson(id);
      toaster.success('Persoana a fost stearsa cu succes!');
      hideModal();
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
      toaster.error('Persoana nu a putut fi stearsa!');
    }
  };

  const handleActivate = async () => {
    try {
      await activatePerson(id);
      toaster.success('Persoana a fost activata cu succes!');
      hideModal();
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
      toaster.error('Persoana nu a putut fi activata!');
    }
  };

  return (
    <>
      <ConfirmModal
        isOpen={modal == 'activate'}
        hide={hideModal}
        iAmSure={handleActivate}
        green={true}
      >
        Esti sigur ca dorești sa activezi acest cont?
      </ConfirmModal>
      <ConfirmModal isOpen={modal == 'delete'} hide={hideModal} iAmSure={handleDelete}>
        Esti sigur ca dorești sa stergi aceasta persoana?
      </ConfirmModal>
    </>
  );
};

export default PersonRowModals;
