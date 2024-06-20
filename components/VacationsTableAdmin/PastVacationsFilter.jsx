import { Checkbox } from '../Fields';

const PastVacationsFilter = ({ onChange }) => {
  return (
    <div className="flex sm:mt-5">
      <Checkbox onChange={onChange} className="form-checkbox rounded-full">
        <span className="tablet:text-sm">Arata concediile din trecut</span>
      </Checkbox>
    </div>
  );
};

export default PastVacationsFilter;
