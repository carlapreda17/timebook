import React from 'react';
import { classnames } from '../../lib';

const Input = ({ className, ...props }) => {
  return (
    <input
      type="text"
      inputMode="text"
      className={classnames('input', className && className)}
      {...props}
    />
  );
};

export default Input;
