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
    <input type="text" inputMode="text" className="form-input" {...props} onChange={handleChange} />
  );
};

export default DebouncedInput;
