import React from 'react';
import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import DeleteActivity from '../DeleteActivity';

const ActivityActionMenu = ({ id, hide, openModal, openEditModal }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    hide();
    console.log('activated');
  });
  return (
    <ul className="flex flex-col py-2" ref={ref}>
      <li className="hover:bg-gray-100">
        <button
          className="px-4 py-2 text-gray-600 flex items-center no-underline"
          onClick={openEditModal}
        >
          Editeaza
        </button>
      </li>
      <DeleteActivity id={id} hide={hide} openModal={openModal} />
    </ul>
  );
};

export default ActivityActionMenu;
