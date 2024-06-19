import React from 'react';

const Fieldset = ({ label, name, help, children }) => {
  return (
    <fieldset>
      {label && (
        <label htmlFor={name} className="label">
          {label}
        </label>
      )}
      {children}
      {help && <div className="form-help text-sm text-secondary">{help}</div>}
    </fieldset>
  );
};

export default Fieldset;
