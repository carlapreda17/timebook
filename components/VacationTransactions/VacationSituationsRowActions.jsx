import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { VacationSituationsRowContextMenu } from '.';
import { AddUserVacationForm } from '../UserVacationsReport';

const VacationSituationsRowActions = ({ id, refetch }) => {
  const [showModal, setShowModal] = useState(false);
  const hideModal = () => {
    setShowModal(false);
    refetch();
  };
  const [showContextMenu, setShowContextMenu] = useState(false);
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
          <VacationSituationsRowContextMenu
            hide={() => setShowContextMenu(false)}
            id={id}
            hideModal={hideModal}
            setShowModal={setShowModal}
          />
        </div>
      )}
      <Modal centered show={showModal} onHide={hideModal}>
        <AddUserVacationForm id={id} hideModal={hideModal} refetch={refetch} />
      </Modal>
    </div>
  );
};

export default VacationSituationsRowActions;
