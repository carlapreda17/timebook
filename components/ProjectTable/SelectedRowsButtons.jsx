import React from 'react';
import { useState } from 'react';

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
      <div className="flex m-tablet:grid justify-between gap-6 sm:mb-2.5 sm:w-full"></div>
    </>
  );
};

export default SelectedRowsButtons;
