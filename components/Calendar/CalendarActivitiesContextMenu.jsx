import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks';

const CalendarActivitiesContextMenu = ({ setShowMenu, setModal }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setShowMenu('');
  });
  const showEditModal = () => {
    setModal('edit');
  };
  const showDeleteModal = () => {
    setModal('delete');
  };
  return (
    <ul className="flex flex-col py-1" ref={ref}>
      <li className="hover:bg-gray-100">
        <button
          className="px-2 py-1.5 w-20 text-red-500 flex items-center no-underline"
          type="button"
          onClick={showDeleteModal}
        >
          Șterge
        </button>
      </li>
      <li className="hover:bg-gray-100">
        <button
          className="px-2 py-1.5 w-20 text-gray-600 flex items-center no-underline"
          type="button"
          onClick={showEditModal}
        >
          Editează
        </button>
      </li>
    </ul>
  );
};

export default CalendarActivitiesContextMenu;
