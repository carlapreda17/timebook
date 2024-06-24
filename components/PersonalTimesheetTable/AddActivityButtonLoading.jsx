import React from 'react';

const AddActivityButtonLoading = () => {
  return (
    <button
      className="add-button"
      disabled
    >
      <i className="fas fa-plus" />
      <span className="add-button-text">Adaugă activitate</span>
    </button>
  );
};

export default AddActivityButtonLoading;
