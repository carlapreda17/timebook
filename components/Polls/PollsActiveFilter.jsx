import PollsAnyFilter from './PollsAnyFilter';

const PollsActiveFilter = ({ setOptions }) => {
  const setactiveFilter = (active) => {
    if (active === 'true' || active === 'false') {
      setOptions((prev) => ({
        ...prev,
        active,
      }));
    } else {
      setOptions((prev) => ({
        ...prev,
        active: '',
      }));
    }
  };

  const optionsActiveFilter = [
    { value: '', label: 'Toate' },
    { value: 'true', label: 'Activ' },
    { value: 'false', label: 'Inactiv' },
  ];

  return (
    <PollsAnyFilter
      label={'Statut sondaj'}
      options={optionsActiveFilter}
      onChange={setactiveFilter}
    />
  );
};

export default PollsActiveFilter;
