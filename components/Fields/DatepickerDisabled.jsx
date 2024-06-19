import { Input } from '.';
import { dateLocaleRo } from '../../functions';

const DatepickerDisabled = ({ value: initialValue, ...props }) => {
  const value = initialValue;
  return (
    <div className="relative">
      <Input {...props} value={dateLocaleRo(value)} disabled />
      <div className="absolute h-full top-0 right-0 p-2.5 outline-none grid place-items-center cursor-pointer">
        <i className="far fa-calendar-alt" />
      </div>
    </div>
  );
};

export default DatepickerDisabled;
