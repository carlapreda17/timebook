import { ConfirmModal } from '../LogbookTable';
import { deleteProject } from '../../api/projects';
import { toaster } from '../../lib';

const ProjectCardModals = ({ hideModal, id, modal }) => {
  const handleDelete = async () => {
    try {
      await deleteProject(id);
      toaster.success('Proiectul a fost sters cu succes!');
      hideModal();
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
      toaster.error('Proiectul nu a putut fi sters.');
    }
  };

  return (
    <>
      <ConfirmModal isOpen={modal == 'delete'} hide={hideModal} iAmSure={handleDelete}>
        Esti sigur ca doesti sa stergi acest proiect?
      </ConfirmModal>
    </>
  );
};

export default ProjectCardModals;
