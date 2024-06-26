import { DebouncedInput } from '../Fields';

const NameFilter = ({ setOptions }) => {
  const updateOptions = (name) => {
    if (name) {
      setOptions((prev) => ({ ...prev, name }));
    } else {
      setOptions(({ name, ...prev }) => prev);
    }
  };

  const handleChange = (name) => {
    updateOptions(name);
  };

  return (
    <div className="w-1/3 lg:w-1/4 tablet:w-56">
      <label className="font-semibold mb-1 block">Nume persoană</label>
      <DebouncedInput
        placeholder="Caută dupa nume"
        className="select"
        onChange={handleChange}
        timeout={500}
      />
    </div>
  );
};

export default NameFilter;
