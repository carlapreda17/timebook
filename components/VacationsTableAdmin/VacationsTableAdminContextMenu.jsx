import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks';

const VacationsTableAdminContextMenu = ({ hide, setModal }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    hide();
    // refetch();
  });

  const openApproveModal = () => {
    setModal('approve');
  };

  const openRejectModal = () => {
    setModal('reject');
  };

  const openDeleteModal = () => {
    setModal('delete');
  };

  return (
    <ul className="flex flex-col py-2" ref={ref}>
      <li className="hover:bg-gray-100">
        <button
          className="px-4 py-2 text-gray-600 flex items-center"
          onClick={openApproveModal}
          type="button"
        >
          Aproba
        </button>
      </li>
      <li className="hover:bg-gray-100">
        <button
          className="px-4 py-2 text-gray-600 flex items-center"
          onClick={openRejectModal}
          type="button"
        >
          Respinge
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

export default VacationsTableAdminContextMenu;
