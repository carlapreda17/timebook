import React from 'react';
import { useState } from 'react';
import DeleteManyActivities from '../Modals/DeleteManyActivities';

const SelectedRowsButtons = ({ activities, refetch }) => {
  const [modal, setModal] = useState('');

  const show = (e) => {
    setModal(e.target.name);
  };
  const hide = () => {
    setModal('');
  };

  return (
    <>
      <div className="flex justify-between gap-0 mb-2.5 w-full">
        <button
          className=" border-red-600 border-solid border-1 bg-red-600 hover:bg-red-700 hover:border-red-700 transition ease-in-out duration-150 p-1.5 rounded px-3 mr-8 w-full"
          onClick={show}
          name="delete"
        >
          {' '}
          <i className="fa-solid fa-trash mr-2 w" />
          Șterge
        </button>
      </div>
      <DeleteManyActivities show={modal === 'delete'} {...{ hide, activities, refetch }} />
    </>
  );
};

export default SelectedRowsButtons;
