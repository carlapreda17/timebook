import React from 'react';
import { useState } from 'react';
import DeleteManyActivities from './Modals/DeleteManyActivities';
import MoveToPerson from './Modals/MoveToPerson';
import MoveToProject from './Modals/MoveToProject';

const SelectedRowsButtons = ({ activities, onComplete }) => {
  const [modal, setModal] = useState('');

  const show = (e) => {
    setModal(e.target.name);
  };
  const hide = () => {
    setModal('');
  };

  return (
    <>
      <div className="flex m-tablet:grid justify-between gap-6 sm:mb-2.5 sm:w-full">
        <button
          className="bg-sky-500 border-sky-500 border-solid border-1 p-1.5 rounded px-3 w-full"
          onClick={show}
          name="moveToProject"
        >
          <i className="fa-solid fa-arrow-right mr-2" /> Muta la proiect
        </button>
        <button className="bg-sky-500 border-sky-500 border-solid border-1 p-1.5 rounded px-3 w-full" onClick={show} name="moveToPerson">
          <i className="fa-solid fa-arrow-right mr-2" />
          Muta la persoana
        </button>
        <button
          className="border-red-600 border-solid border-1 bg-red-600 hover:bg-red-700 hover:border-red-700 transition ease-in-out duration-150 p-1.5 rounded px-3 mr-8 w-full"
          onClick={show}
          name="delete"
        >
          {' '}
          <i className="fa-solid fa-trash mr-2" />
          Șterge
        </button>
      </div>

      <DeleteManyActivities show={modal === 'delete'} {...{ hide, activities, onComplete }} />

      <MoveToPerson show={modal === 'moveToPerson'} {...{ hide, activities, onComplete }} />
      <MoveToProject show={modal === 'moveToProject'} {...{ hide, activities, onComplete }} />
    </>
  );
};

export default SelectedRowsButtons;
