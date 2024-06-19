import { AddActivityButton } from '../LogbookTable';
import { LogbookButton } from '.';

const CalendarHeaderButtonsAdmin = ({ onHideModal }) => {
  return (
    <div className="flex gap-2">
      <LogbookButton />
      <AddActivityButton onHideModal={onHideModal} />
    </div>
  );
};

export default CalendarHeaderButtonsAdmin;
