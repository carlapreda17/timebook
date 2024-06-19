import { DebouncedInput } from '../Fields';

const ProjectNameFilter = ({ onChange }) => {
  return (
    <div className="w-1/3 lg:w-1/4">
      <label className="font-semibold mb-1 block">Nume proiect</label>
      <DebouncedInput
        placeholder="Cauta dupa nume"
        className="select"
        onChange={onChange}
        timeout={500}
      />
      <span className="absolute right-0 p-2 outline-none pt-2.5">
        <i className="fa-solid fa-magnifying-glass text-primary dark:text-slate-400" />
      </span>
    </div>
  );
};

export default ProjectNameFilter;
