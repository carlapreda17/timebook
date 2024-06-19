import React from 'react';
import { logout } from '../api';
import { classnames } from '../lib';

const LogoutButton = ({ buttonClasses, icon, ...props }) => {
  return (
    <div {...props}>
      <button
        className={classnames('bg-accent text-white rounded-md', buttonClasses)}
        onClick={logout}
      >
        <i className={icon} />
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
