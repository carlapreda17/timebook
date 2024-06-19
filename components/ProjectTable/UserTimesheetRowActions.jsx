import { useState } from 'react';
import UserTimesheetRowModals from '../UserTimesheet/UserTimesheetRowModals';
import UserTimesheetContextMenu from './UserTimesheetContextMenu';

const UserTimesheetRowActions = ({ activity, refetch }) => {
  const { _id } = activity;
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [modal, setModal] = useState('');

  const hideModal = () => {
    setModal('');
    refetch();
  };

  return (
    <div className="flex items-center gap-4 relative justify-center">
      <div
        onClick={() => setShowContextMenu(true)}
        className="flex items-center cursor-pointer px-4"
        role="button"
      >
        <i className="fa-solid fa-ellipsis-vertical" />
      </div>
      {showContextMenu && (
        <div className="absolute top-0 right-2 bg-white rounded-lg shadow-xl z-50 border">
          <UserTimesheetContextMenu hide={() => setShowContextMenu(false)} setModal={setModal} />
        </div>
      )}
      <UserTimesheetRowModals modal={modal} hideModal={hideModal} id={_id} />
    </div>
  );
};

export default UserTimesheetRowActions;
