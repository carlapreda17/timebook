import React, { useState } from 'react';
import { classnames } from '../../lib';
import { useFormikContext } from 'formik';

const ColorPicker = ({ className, name, ...props }) => {
  const { values } = useFormikContext();

  // If the color is not set, set it to the default value, else set it to the value from the formik context
  const [selectedColor, setSelectedColor] = useState(values[name] || 'Culoare');

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);
  };

  return (
    <div className="border bg-gray-50 flex items-center p-0 pl-2 rounded dark:border-slate-700 dark:bg-slate-800">
      <input
        type="color"
        onInput={handleColorChange}
        className={classnames('rounded', className && className)}
        {...props}
      />
      <div className="form-input border-none dark:bg-slate-800 dark:text-slate-300">
        {selectedColor}
      </div>
    </div>
  );
};

export default ColorPicker;
