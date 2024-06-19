import Link from 'next/link';
import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks';

const PollsContextMenu = ({
  setShowMenu,
  id,
  status,
  active,
  setDeleteModalIsVisible,
  setApproveModalIsVisible,
  setRejectModalIsVisible,
  setActivateModalIsVisible,
  setDeactivateModalIsVisible,
  role,
}) => {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    setShowMenu('');
  });

  const openDeleteModal = () => {
    setDeleteModalIsVisible(true);
  };

  const openApproveModal = () => {
    setApproveModalIsVisible(true);
  };

  const openRejectModal = () => {
    setRejectModalIsVisible(true);
  };

  const openActivateModal = () => {
    setActivateModalIsVisible(true);
  };

  const openDeactivateModal = () => {
    setDeactivateModalIsVisible(true);
  };

  return (
    <div className="absolute top-0 right-3 bg-white dark:bg-slate-800 rounded-lg shadow-xl z-50 border">
      <ul className="flex flex-col py-2 dark:text-slate-300" ref={ref}>
        {role === 'user' && (
          <li className="hover:bg-gray-100">
            <Link href={`polls/${id}/edit`}>
              <button
                className="px-2 py-1  text-gray-600 dark:text-slate-300 dark:hover:text-slate-800 flex items-center no-underline"
                type="button"
              >
                Editeaza
              </button>
            </Link>
          </li>
        )}
        {role === 'admin' && (
          <div>
            <li className="hover:bg-gray-100">
              <Link href={`polls/${id}/edit`}>
                <button
                  className="px-2 py-1 text-gray-600 dark:text-slate-300 dark:hover:text-slate-800 flex items-center no-underline"
                  type="button"
                >
                  Editeaza
                </button>
              </Link>
            </li>

            <li className="hover:bg-gray-100" onClick={openDeleteModal}>
              <button
                className="px-2 py-1 text-gray-600 dark:text-slate-300 dark:hover:text-slate-800 flex items-center no-underline"
                type="button"
              >
                Șterge
              </button>
            </li>
            {status === 'pending' && (
              <>
                <li className="hover:bg-gray-100" onClick={openApproveModal}>
                  <button
                    className="px-2 py-1 text-gray-600 dark:text-slate-300 dark:hover:text-slate-800 flex items-center no-underline"
                    type="button"
                  >
                    Aproba
                  </button>
                </li>
                <li className="hover:bg-gray-100" onClick={openRejectModal}>
                  <button
                    className="px-2 py-1 text-gray-600 dark:text-slate-300 dark:hover:text-slate-800 flex items-center no-underline"
                    type="button"
                  >
                    Respinge
                  </button>
                </li>
              </>
            )}
            {status === 'approved' && !active && (
              <li className="hover:bg-gray-100" onClick={openActivateModal}>
                <button
                  className="px-2 py-1 text-gray-600 dark:text-slate-300 dark:hover:text-slate-800 flex items-center no-underline"
                  type="button"
                >
                  Activeaza
                </button>
              </li>
            )}
            {status === 'approved' && active && (
              <li className="hover:bg-gray-100" onClick={openDeactivateModal}>
                <button
                  className="px-2 py-1 text-gray-600 dark:text-slate-300 dark:hover:text-slate-800 flex items-center no-underline"
                  type="button"
                >
                  Dezactiveaza
                </button>
              </li>
            )}
          </div>
        )}
      </ul>
    </div>
  );
};

export default PollsContextMenu;
