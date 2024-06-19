import { useState } from 'react';
import ProjectCardModals from './CardModals';
import ProjectContextMenu from './ContextMenu';

const ProjectCardActions = ({ _id, refetch }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [modal, setModal] = useState('');

  const hideModal = () => {
    setModal('');
    refetch();
  };

  return (
    <div className="flex items-center gap-4 relative justify-center -mr-4 dark:text-slate-300">
      <div
        onClick={() => setShowContextMenu(true)}
        className="hidden md:flex items-center cursor-pointer px-4"
        role="button"
      >
        <i className="fa-solid fa-ellipsis-vertical text-xl" />
      </div>
      {showContextMenu && (
        <div className="absolute top-0 right-2 bg-white shadow-xl z-50 border overflow-hidden dark:border-slate-700">
          <ProjectContextMenu id={_id} hide={() => setShowContextMenu(false)} setModal={setModal} />
        </div>
      )}
      <ProjectCardModals modal={modal} hideModal={hideModal} id={_id} />
    </div>
  );
};

export default ProjectCardActions;
