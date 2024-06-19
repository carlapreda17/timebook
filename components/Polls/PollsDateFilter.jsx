import React from 'react';
import PollsAnyFilter from './PollsAnyFilter';

const PollsDateFilter = ({ setOptions }) => {
  const setDateFilter = (date) => {
    if (date) {
      setOptions((prev) => ({
        ...prev,
        date,
      }));
    } else {
      setOptions(({ date, ...prev }) => prev);
    }
  };

  const optionsDateFilter = [
    { value: 'createdAt asc', label: 'Cel mai nou' },
    { value: 'createdAt desc', label: 'Cel mai vechi' },
  ];

  return (
    <PollsAnyFilter
      label={'Sortare dupa data'}
      options={optionsDateFilter}
      onChange={setDateFilter}
    />
  );
};

export default PollsDateFilter;
