import { getYear, subYears } from 'date-fns';

const YearFilter = ({ onChange }) => {
  return (
    <div className="w-fit">
      <div>
        <label className="font-semibold mb-1">
          An
          <select onChange={(e) => onChange(e.target.value)} className="select">
            <option value={getYear(new Date())}>{getYear(new Date())}</option>
            <option value={getYear(subYears(new Date(), 1))}>
              {getYear(subYears(new Date(), 1))}
            </option>
            <option value={getYear(subYears(new Date(), 2))}>
              {getYear(subYears(new Date(), 2))}
            </option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default YearFilter;
