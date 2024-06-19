import { useRef } from 'react';
import { ProfileLoading, ProfileMenu, ProfileSuccess } from '.';
import { useDisclosure, useOnClickOutside, useProfile } from '../hooks';

const Profile = () => {
  const { status, me } = useProfile();
  const { isOpen, hide, toggle } = useDisclosure();
  const ref = useRef();
  useOnClickOutside(ref, hide);

  return (
    <div ref={ref} className="flex items-center gap-4 relative pl-3">
      <div
        className="hidden sm:flex items-center gap-3 cursor-pointer"
        onClick={toggle}
        role="button"
      >
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full flex justify-center items-center bg-secondary">
            <i className="text-lg text-white fas fa-user"></i>
          </div>
          {status === 'loading' && <div className="bg-gray-400 h-3 w-20 rounded-full" />}
          {status === 'success' && (
            <h4 className="text-gray-900 dark:text-gray-200 font-semibold text-sm">
              {me.first_name} {me.last_name}
            </h4>
          )}
        </div>
        {isOpen ? (
          <i className="fas fa-chevron-up text-gray-500"></i>
        ) : (
          <i className="fas fa-chevron-down text-gray-500"></i>
        )}
      </div>
      {isOpen && (
        <div className="absolute top-12 -right-4 w-64 border bg-white overflow-hidden sm:rounded-lg rounded-b-lg shadow-lg z-50 dark:bg-slate-800 dark:border-slate-700">
          <div className="flex flex-col gap-2 border-b px-4 py-2 dark:border-slate-700">
            {status === 'loading' && <ProfileLoading />}
            {status === 'success' && <ProfileSuccess {...me} />}
          </div>
          <ProfileMenu role={me.role} />
        </div>
      )}
    </div>
  );
};

export default Profile;
