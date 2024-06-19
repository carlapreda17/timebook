import { useRef } from 'react';
import { useDisclosure, useOnClickOutside } from '../hooks';
import NotificationsMenu from './NotificationsMenu';

const Notifications = () => {
  const { isOpen, hide, toggle } = useDisclosure();
  const ref = useRef();
  useOnClickOutside(ref, hide);

  return (
    <div ref={ref} className="sm:relative flex items-center gap-4">
      <div
        onClick={toggle}
        className="hover:bg-gray-100 hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 rounded-lg p-1 w-9 h-9 flex justify-center items-center"
        role="button"
      >
        <i className="fa-regular text-xl fa-bell"></i>
      </div>

      {isOpen && (
        <div className="absolute sm:top-12 top-16 sm:-right-44 sm:left-auto left-0 sm:w-96 w-[100vw] border bg-white overflow-hidden sm:rounded-lg rounded-b-lg shadow-lg z-50 dark:border-slate-700 dark:bg-slate-800">
          <NotificationsMenu />
        </div>
      )}
      <span className="hidden sm:block bg-gray-200 dark:bg-gray-600 h-8 w-0.5"></span>
    </div>
  );
};

export default Notifications;
