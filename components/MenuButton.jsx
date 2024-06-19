import React from 'react';

const MenuButton = () => {
  return (
    <div
      className="sm:hidden text-primary rounded py-1 px-2 inline-block ml-2 bg-white dark:bg-slate-800"
      aria-label="Open menu"
    >
      <label
        htmlFor="menu"
        className="flex items-center mb-0 text-primary cursor-pointer dark:text-white"
      >
        <i className="fas fa-bars text-xl"></i>
      </label>
    </div>
  );
};

export default MenuButton;
