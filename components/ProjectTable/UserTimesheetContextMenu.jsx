import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks';

const UserTimesheetContextMenu = ({ hide, setModal }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    hide();
  });
  const openDeleteModal = () => {
    setModal('delete');
  };
  const openEditModal = () => {
    setModal('edit');
  };

  return (
    <ul className="flex flex-col py-2" ref={ref}>
      <li className="hover:bg-gray-100">
        <button
          className="px-4 py-2 text-gray-600 flex items-center"
          onClick={openEditModal}
          type="button"
        >
          Editeaza
        </button>
      </li>
      <li className="hover:bg-gray-100">
        <button
          className="px-4 py-2 text-gray-600 flex items-center"
          onClick={openDeleteModal}
          type="button"
        >
          Șterge
        </button>
      </li>
    </ul>
  );
};

export default UserTimesheetContextMenu;
