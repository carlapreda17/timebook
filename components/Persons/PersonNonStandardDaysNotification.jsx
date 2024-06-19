import React from 'react';

const PersonNonStandardDaysNotification = ({ showModal, setShowAlert }) => {
  return (
    <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 text-base p-4 flex border-solid justify-between items-center mb-3 -mt-2 rounded"
      role="alert"
    >
      <div>
        <span>Colaboratorul are zile incomplete. </span>
        <button
          className="underline text-red-700 font-medium"
          type="button"
          onClick={() => showModal()}
        >
          Vezi zile
        </button>
      </div>
      <button
        className="py-2 px-3 rounded hover:bg-red-200"
        type="button"
        onClick={() => setShowAlert(false)}
      >
        <i className="fa-solid fa-x" />
      </button>
    </div>
  );
};

export default PersonNonStandardDaysNotification;
