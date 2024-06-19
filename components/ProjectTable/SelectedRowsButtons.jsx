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
      <div className="flex justify-between gap-0 mb-2.5 w-full"></div>
    </>
  );
};

export default SelectedRowsButtons;
