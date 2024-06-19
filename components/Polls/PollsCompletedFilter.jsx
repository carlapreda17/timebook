import PollsAnyFilter from './PollsAnyFilter';

const PollsCompletedFilter = ({ setOptions }) => {
  const setHasParticipatedFilter = (hasParticipated) => {
    if (hasParticipated) {
      setOptions((prev) => ({
        ...prev,
        hasParticipated,
      }));
    } else {
      setOptions(({ hasParticipated, ...prev }) => prev);
    }
  };

  const optionsHasParticipatedFilter = [
    { value: '', label: 'Toate' },
    { value: 'true', label: 'Da' },
    { value: 'false', label: 'Nu' },
  ];

  return (
    <PollsAnyFilter
      label={'Sondaje completate'}
      options={optionsHasParticipatedFilter}
      onChange={setHasParticipatedFilter}
    />
  );
};

export default PollsCompletedFilter;
