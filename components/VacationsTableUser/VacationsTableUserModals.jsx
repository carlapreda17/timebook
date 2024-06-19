import { deleteVacation } from '../../api/vacations';
import { toaster } from '../../lib';
import AreYouSureRomanian from '../AreYouSureRomanian';

const VacationsTableUserModals = ({ modal, hide, id, refetch }) => {
  const handleDelete = async () => {
    try {
      await deleteVacation(id);
      toaster.success('Cererea a fost stearsa cu succes!');
      if (typeof refetch === 'function') {
        refetch();
      }
    } catch (e) {
      toaster.error('Cererea nu a putut fi stearsa!');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <>
      <AreYouSureRomanian isOpen={modal === 'delete'} hide={hide} iAmSure={handleDelete}>
        Ești sigur că dorești să ștergi această cerere?
      </AreYouSureRomanian>
    </>
  );
};

export default VacationsTableUserModals;
