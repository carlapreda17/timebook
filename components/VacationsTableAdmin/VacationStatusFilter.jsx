const VacationStatusFilter = ({ onChange }) => {
  return (
    <div className="w-fit tablet:w-56">
      <div>
        <label className="font-semibold mb-1">Status</label>
        <select className="select" onChange={(e) => onChange(e.target.value)}>
          <option value="">Toate</option>
          <option value="approved">Aprobate</option>
          <option value="rejected">Respinse</option>
          <option value="pending">In asteptare</option>
        </select>
      </div>
    </div>
  );
};

export default VacationStatusFilter;
