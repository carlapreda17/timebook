import React from 'react';
import { useFormikContext } from 'formik';
import { classnames } from '../../lib';
import { get } from 'lodash';
import { Checkbox } from '../Fields';
import { Field } from 'formik';

const CheckboxFieldset = ({ label, help, name, id, className, ...props }) => {
  const { submitCount, touched, errors } = useFormikContext();
  const hasError = get(touched, name) && get(errors, name) && submitCount > 0;
  return (
    <fieldset className={classnames(hasError && 'has-error', className && className)}>
      {label && (
        <label htmlFor={name} className="flex cursor-pointer">
          <Field id={id} name={name} as={Checkbox} {...props} />
          {label}
        </label>
      )}
      <div className="form-help text-sm text-secondary first-letter">
        {hasError ? get(errors, name) : help}
      </div>
    </fieldset>
  );
};

export default CheckboxFieldset;
