import React from 'react';

const DeleteProject = ({ hide, openModal }) => {
  const handleClick = () => {
    hide();
    openModal();
  };
  return (
    <>
      <li className="hover:bg-gray-100">
        <button
          className="px-4 py-2 text-gray-600 flex items-center"
          onClick={() => handleClick()}
          type="button"
        >
          Șterge project
        </button>
      </li>
    </>
  );
};

export default DeleteProject;
