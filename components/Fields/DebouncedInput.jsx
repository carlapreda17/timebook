import React, { useCallback } from 'react';
import { debounce } from 'lodash';

const DebouncedInput = ({ timeout, onChange, ...props }) => {
  const delay = timeout || 300;

  const request = debounce((value) => {
    if (typeof onChange === 'function') {
      onChange(value);
    }
  }, delay);

  const debounceRequest = useCallback((value) => request(value), []);

  const handleChange = (event) => {
    return debounceRequest(event.target.value);
  };

  return (
    <div className={"flex align-items relative"}>
      <input type="text" inputMode="text" className="form-input" {...props}
             onChange={handleChange}/>
      <i className="fa-solid fa-magnifying-glass text-primary dark:text-slate-400 absolute top-4 right-2"/>
    </div>
  );
};

export default DebouncedInput;
