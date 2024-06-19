import { useState } from 'react';
import { router } from '../../lib';
import Tooltip from '../Tooltip';
import PersonRowModals from './PersonRowModals';

const PersonRowActions = ({ person, refetch }) => {
  const [modal, setModal] = useState('');

  const { active, _id } = person;

  const handleView = () => {
    router.push(`/admin/technical-people/${_id}`);
  };

  const hideModal = () => {
    setModal('');
    refetch();
  };

  const openDeleteModal = () => {
    setModal('delete');
  };

  const openActivateModal = () => {
    setModal('activate');
  };

  return (
    <div className="flex justify-around">
      <button onClick={handleView}>
        <Tooltip icon="fa-solid fa-eye text-blue-500 text-lg">Vizualizeaza</Tooltip>
      </button>
      {active && (
        <button onClick={openDeleteModal}>
          <Tooltip icon="fa-solid fa-trash text-red-700 text-lg">Șterge</Tooltip>
        </button>
      )}
      {!active && (
        <button onClick={openActivateModal}>
          <Tooltip icon="fa-solid fa-circle-up text-green-700 text-lg">Activeaza</Tooltip>
        </button>
      )}
      <PersonRowModals modal={modal} hideModal={hideModal} id={_id} />
    </div>
  );
};

export default PersonRowActions;
