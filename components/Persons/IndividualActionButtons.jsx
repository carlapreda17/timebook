import React, { useState } from 'react';
import DeleteManyActivities from '../Modals/DeleteManyActivities';
import MoveToPerson from '../Modals/MoveToPerson';
import MoveToProject from '../Modals/MoveToProject';

const IndividualActionButtons = ({ activities, refetch }) => {
  const [showModal, setShowModal] = useState({
    showDelete: false,
    showMoveToPerson: false,
    showMoveToProject: false,
  });
  const handleClick = (e) => {
    setShowModal({ ...showModal, [e.target.name]: true });
  };
  const hide = (target) => {
    setShowModal({ ...showModal, [target]: false });
  };
  return (
    <div className="flex justify-around gap-0 mt-1 h-10 w-full">
      {' '}
      <button
        className="border-blue-600 border-solid border-1 text-blue-600 hover:text-white hover:bg-blue-600 transition ease-in-out duration-150 p-1.5 rounded px-3 mr-8 w-full"
        onClick={handleClick}
        name="showMoveToProject"
      >
        <i className="fa-solid fa-arrow-right mr-2" /> Muta la proiect
      </button>
      <button
        className="border-blue-600 border-solid border-1 text-blue-600 hover:text-white hover:bg-blue-600 transition ease-in-out duration-150 p-1.5 rounded px-3 mr-8 w-full"
        onClick={handleClick}
        name="showMoveToPerson"
      >
        <i className="fa-solid fa-arrow-right mr-2" />
        Muta la persoana
      </button>
      <button
        className="border-red-600 border-solid border-1 text-red-600 hover:text-white hover:bg-red-600 transition ease-in-out duration-150 p-1.5 rounded px-3 mr-8 w-full"
        onClick={handleClick}
        name="showDelete"
      >
        <i className="fa-solid fa-trash mr-2" />
        Șterge
      </button>
      <DeleteManyActivities
        show={showModal.showDelete}
        hide={() => hide('showDelete')}
        activities={activities}
        refetch={refetch}
      />
      <MoveToPerson
        show={showModal.showMoveToPerson}
        hide={() => hide('showMoveToPerson')}
        activities={activities}
        refetch={refetch}
      />
      <MoveToProject
        show={showModal.showMoveToProject}
        hide={() => hide('showMoveToProject')}
        activities={activities}
        refetch={refetch}
      />
    </div>
  );
};

export default IndividualActionButtons;
