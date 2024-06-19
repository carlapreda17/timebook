const HoursFilter = ({ setFilter }) => {
  return (
    <label className="font-semibold">
      Filtru
      <select onChange={(e) => setFilter(e.target.value)} className="select">
        <option value="duration_total">Numar total de ore</option>
      </select>
    </label>
  );
};

export default HoursFilter;
