import React from 'react';
import PollsAnyFilter from './PollsAnyFilter';

const PollsPriorityFilter = ({ setOptions }) => {
  const setPriorityFilter = (priority) => {
    if (priority) {
      setOptions((prev) => ({
        ...prev,
        priority,
      }));
    } else {
      setOptions(({ priority, ...prev }) => prev);
    }
  };

  const optionsPriorityFilter = [
    { value: '', label: 'Toate' },
    { value: 'high', label: 'Ridicata' },
    { value: 'medium', label: 'Medie' },
    { value: 'low', label: 'Scazuta' },
  ];

  return (
    <PollsAnyFilter
      label={'Prioritate sondaj'}
      options={optionsPriorityFilter}
      onChange={setPriorityFilter}
    />
  );
};

export default PollsPriorityFilter;
