import { ActiveFilter, NameFilter } from '.';

const PersonsTableFilters = ({ setOptions }) => {
  return (
    <div className="flex gap-6">
      <ActiveFilter setOptions={setOptions} defaultValue="active" />
      <NameFilter setOptions={setOptions} />
    </div>
  );
};

export default PersonsTableFilters;
