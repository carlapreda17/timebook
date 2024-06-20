import { useState } from 'react';
import Tooltip from '../Tooltip';
import { VacationsTableAdminContextMenu, VacationsTableAdminModals } from '.';

const VacationStatusAdmin = ({ status, id, refetch }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [modal, setModal] = useState('');

  const hideModal = () => {
    setModal('');
  };
  return (
    <>
      {status === 'approved' && (
        <Tooltip icon={'fa-solid fa-check tablet:text-lg text-secondary text-2xl w-full text-center'}>
          Aprobat
        </Tooltip>
      )}
      {status === 'rejected' && (
        <Tooltip icon={'fa-solid fa-xmark tablet:text-lg text-accent text-2xl w-full text-center'}>
          Respins
        </Tooltip>
      )}
      {status === 'pending' && (
        <div className="flex relative px-1">
          <div className="cursor-pointer" onClick={() => setShowContextMenu(true)}>
            <Tooltip icon={'fa-solid fa-hourglass tablet:text-lg text-primary text-xl w-full dark:text-sky-500'}>
              In asteptare
            </Tooltip>
          </div>
          {showContextMenu && (
            <div className="absolute top-0 right-2 bg-white rounded-lg shadow-xl z-50 border">
              <VacationsTableAdminContextMenu
                hide={() => setShowContextMenu(false)}
                setModal={setModal}
              />
            </div>
          )}
          <VacationsTableAdminModals
            modal={modal}
            hideModal={hideModal}
            id={id}
            refetch={refetch}
          />
        </div>
      )}
    </>
  );
};

export default VacationStatusAdmin;
