import React, { useState } from 'react';
import PersonalTimesheetRowContextMenu from './PersonalTimesheetRowContextMenu';
import PersonalTimesheetRowModals from './PersonalTimesheetRowModals';

const PersonalTimesheetRowActions = ({ activity, refetch }) => {
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
        className="hidden md:flex items-center cursor-pointer px-4"
        role="button"
      >
        <i className="fa-solid fa-ellipsis-vertical" />
      </div>
      {showContextMenu && (
        <div className="absolute top-0 right-2 bg-white rounded-lg shadow-xl z-50 border">
          <PersonalTimesheetRowContextMenu
            activity={activity}
            hide={() => setShowContextMenu(false)}
            setModal={setModal}
          />
        </div>
      )}
      <PersonalTimesheetRowModals modal={modal} hideModal={hideModal} id={_id} />
    </div>
  );
};

export default PersonalTimesheetRowActions;
