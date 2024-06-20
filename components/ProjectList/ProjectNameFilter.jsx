import { DebouncedInput } from '../Fields';

const ProjectNameFilter = ({ onChange }) => {
  return (
    <div className="w-1/3 lg:w-1/4 tablet:w-1/2">
      <label className="font-semibold mb-1 block">Nume proiect</label>
      <DebouncedInput
        placeholder="Cauta dupa nume"
        className="select"
        onChange={onChange}
        timeout={500}
      />
    </div>
  );
};

export default ProjectNameFilter;
