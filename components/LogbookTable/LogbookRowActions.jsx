import { useState } from 'react';
import { ActivityRowContextMenu, ActivityRowModals } from '.';

const LogbookRowActions = ({ activity, refetch }) => {
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
        <div className="absolute top-0 right-2 bg-white dark:bg-slate-800 rounded-lg shadow-xl z-50 border">
          <ActivityRowContextMenu
            activity={activity}
            hide={() => setShowContextMenu(false)}
            setModal={setModal}
          />
        </div>
      )}
      <ActivityRowModals modal={modal} hideModal={hideModal} id={_id} />
    </div>
  );
};

export default LogbookRowActions;
