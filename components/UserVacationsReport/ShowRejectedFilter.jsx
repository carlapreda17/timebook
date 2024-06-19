import { Checkbox } from '../Fields';

const ShowRejectedFilter = ({ onChange }) => {
  return (
    <div className="mt-9">
      <Checkbox onChange={onChange} className="form-checkbox rounded-full">
        <span>Arata cereri refuzate</span>
      </Checkbox>
    </div>
  );
};

export default ShowRejectedFilter;
