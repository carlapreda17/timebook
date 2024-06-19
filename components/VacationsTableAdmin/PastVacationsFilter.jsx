import { Checkbox } from '../Fields';

const PastVacationsFilter = ({ onChange }) => {
  return (
    <div className="mt-9">
      <Checkbox onChange={onChange} className="form-checkbox rounded-full">
        <span>Arata concediile din trecut</span>
      </Checkbox>
    </div>
  );
};

export default PastVacationsFilter;
