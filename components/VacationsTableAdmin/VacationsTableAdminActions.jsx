import { useState } from 'react';
import { VacationsTableAdminContextMenu, VacationsTableAdminModals } from '.';

const VacationsTableAdminActions = ({ id, refetch }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [modal, setModal] = useState('');

  const hideModal = () => {
    setModal('');
  };

  return (
    <div className="flex items-center gap-4 relative justify-center">
      <div
        onClick={() => setShowContextMenu(true)}
        className="hidden md:flex items-center cursor-pointer px-4"
        role="button"
      >
        <i className="fa-solid fa-ellipsis-vertical" />
      </div>
      {showContextMenu && (
        <div className="absolute top-0 right-2 bg-white rounded-lg shadow-xl z-50 border">
          <VacationsTableAdminContextMenu
            hide={() => setShowContextMenu(false)}
            setModal={setModal}
          />
        </div>
      )}
      <VacationsTableAdminModals modal={modal} hideModal={hideModal} id={id} refetch={refetch} />
    </div>
  );
};

export default VacationsTableAdminActions;
