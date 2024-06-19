const StatusFilter = ({ onChange }) => {
  return (
    <div className="fit">
      <div>
        <label className="font-semibold mb-1">Status</label>
        <select className="select" onChange={(e) => onChange(e.target.value)}>
          <option value="">Toate</option>
          <option value={true}>Rezolvate</option>
          <option value={false}>Nerezolvate</option>
        </select>
      </div>
    </div>
  );
};

export default StatusFilter;
