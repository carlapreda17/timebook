import {UserTimesheetButton} from '.';
import { LogbookButton } from '.';
import AddActivityButton from "../AddActivityButton";
import { useProfile } from '../../hooks';

const CalendarHeaderButtons = ({ role, refetch }) => {


  return (
    <div className="flex gap-2 mobile:mt-3">
      {role === 'admin' ? (
        <LogbookButton/>
      ) : (
        <UserTimesheetButton/>
      )}
      <AddActivityButton onHideModal={refetch}/>
    </div>
  );
};

export default CalendarHeaderButtons;
