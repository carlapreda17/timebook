import { AddActivityButton } from '../UserTimesheet';
import { UserTimesheetButton } from '.';

const CalendarHeaderButtonsUser = ({ onHideModal }) => {
  return (
    <div className="flex gap-2">
      <UserTimesheetButton />
      <AddActivityButton onHideModal={onHideModal} />
    </div>
  );
};

export default CalendarHeaderButtonsUser;
