const TypeFilter = ({ onChange }) => {
  return (
    <div className="w-fit">
      <div>
        <label className="font-semibold mb-1">Tip</label>
        <select onChange={(e) => onChange(e.target.value)} className="select">
          <option value="">Toate</option>
          <option value="annual">Anual</option>
          <option value="extra-time">Extra time</option>
          <option value="vacation-approved">Concediu aprobat</option>
          <option value="bonus">Bonus</option>
        </select>
      </div>
    </div>
  );
};

export default TypeFilter;
