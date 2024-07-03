const PollsAnyFilter = ({ label, options, onChange }) => {
  return (
    <div className="laptop:w-80 tablet:w-56">
      <label className="font-semibold mb-1">{label}</label>
      <select className="select" onChange={(e) => onChange(e.target.value)} defaultValue={''}>
        {options.map((option, index) => (
          <option key={index} className="w-full" value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PollsAnyFilter;
