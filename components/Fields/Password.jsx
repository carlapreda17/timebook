import React, { useState } from 'react';

const Password = (props) => {
  const [showPassword, toggle] = useState(false);
  const type = showPassword ? 'text' : 'password';
  const action = showPassword
    ? 'far fa-eye text-gray-600 dark:text-slate-400'
    : 'far fa-eye-slash text-gray-600 dark:text-slate-400';

  return (
    <div className="relative">
      <input type={type} className="input" {...props} />
      <button
        type="button"
        className="absolute right-0 p-2 outline-none mobile:top-[50%] mobile:-translate-y-1/2"
        onClick={() => toggle(!showPassword)}
        tabIndex="-1"
      >
        <i className={action}></i>
      </button>
    </div>
  );
};

export default Password;
