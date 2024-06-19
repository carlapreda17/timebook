import { Modal } from 'react-bootstrap';
import AreYouSureRomanian from '../AreYouSureRomanian';
import ActivatePersonModal from '../Modals/ActivatePersonModal';
import AddUserVacationForm from '../UserVacationsReport/AddUserVacationForm';

const PersonalPageModals = ({ modal, hide, id, handleDelete, handleActivate }) => {
  return (
    <>
      <AreYouSureRomanian isOpen={modal === 'delete'} hide={hide} iAmSure={() => handleDelete(id)}>
        Esti sigur ca doresti sa stergi aceasta persoana?
      </AreYouSureRomanian>
      <ActivatePersonModal
        isOpen={modal === 'activate'}
        hide={hide}
        iAmSure={() => handleActivate(id)}
      />
      <Modal centered show={modal === 'vacation'} onHide={hide}>
        <AddUserVacationForm id={id} hideModal={hide} />
      </Modal>
    </>
  );
};

export default PersonalPageModals;
