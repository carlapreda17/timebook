import React, { useState } from 'react';
import Button from '../Button';

const PollsTabsStatusFilterAdmin = ({ setOptions }) => {
  const [selectedValue, setSelectedValue] = useState('all');

  const setStatusFilter = (status) => {
    if (status === 'all') {
      setOptions(({ status, ...prev }) => prev);
    } else {
      setOptions((prev) => ({
        ...prev,
        status,
      }));
    }
  };

  const handleButtonClick = (value) => {
    setSelectedValue(value);
    setStatusFilter(value);
  };

  const statusOptions = [
    { value: 'all', label: 'Toate' },
    { value: 'pending', label: 'Propuse' },
    { value: 'approved', label: 'Aprobate' },
    { value: 'rejected', label: 'Respinse' },
  ];

  return (
    <div className="flex gap-3 border-b-2 border-grey-500 text-lg overflow-auto overflow-y-hidden dark:border-slate-700">
      {statusOptions.map((option) => (
        <Button
          key={option.value}
          className={`py-3 px-5  ${
            selectedValue === option.value
              ? 'border-b-2 border-gray-600 text-gray-800 font-medium dark:text-white dark:border-slate-200'
              : 'text-gray-600 dark:text-slate-400'
          }`}
          onClick={() => handleButtonClick(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default PollsTabsStatusFilterAdmin;
