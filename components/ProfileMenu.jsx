import { useRef } from 'react';
import { useOnClickOutside, useDisclosure } from '../hooks';
import { logout } from '../api';
import { router } from '../lib';

const ProfileMenu = ({ role }) => {
  const { hide } = useDisclosure();
  const ref = useRef();
  useOnClickOutside(ref, hide);
  const handleProfileClick = (e) => {
    e.preventDefault();
    router.push(`/${role}/profile`);
  };

  return (
    <div className="flex flex-col py-1">
      <button
        className="px-4 py-2 text-gray-600 hover:bg-gray-100 flex items-center no-underline dark:hover:bg-slate-700"
        onClick={handleProfileClick}
      >
        <i className="fa-solid fa-user mr-2 dark:text-slate-300"></i>
        <p className="dark:text-slate-300">Profilul meu</p>
      </button>
      <button
        className="px-4 py-2 hover:bg-gray-100 text-gray-600 flex items-center no-underline dark:hover:bg-slate-700"
        onClick={logout}
      >
        <i className="fa-solid fa-power-off text-red-500 mr-2"></i>
        <p className="dark:text-slate-300"> Sign out</p>
      </button>
    </div>
  );
};

export default ProfileMenu;
