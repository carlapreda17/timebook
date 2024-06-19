import React from 'react';

const AddActivityButtonLoading = () => {
  return (
    <button
      className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4"
      disabled
    >
      <i className="fas fa-plus" />
      <span className="ml-2">Adauga activitate</span>
    </button>
  );
};

export default AddActivityButtonLoading;
