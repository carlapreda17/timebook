import {UserTimesheetButton} from '.';
import { LogbookButton } from '.';
import AddActivityButton from "../AddActivityButton";

const CalendarHeaderButtons = ({ role, refetch }) => {
  return (
    <div className="flex gap-2 mobile:mt-3">
      {role === 'admin' ? (
        <>
          <LogbookButton/>
          <AddActivityButton onHideModal={refetch}/>
        </>
      ) : (
        <>
          <UserTimesheetButton/>
          <AddActivityButton onHideModal={refetch}/>
        </>
      )}
    </div>
  );
};

export default CalendarHeaderButtons;
