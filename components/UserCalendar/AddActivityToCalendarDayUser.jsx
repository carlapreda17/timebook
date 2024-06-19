import { AddActivityToCalendarDayFormUser } from '.';
import { useProfile } from '../../hooks';

const AddActivityToCalendarDayUser = ({ hide, date, refetch }) => {
  const { me } = useProfile();
  return <AddActivityToCalendarDayFormUser hide={hide} date={date} refetch={refetch} id={me.me} />;
};

export default AddActivityToCalendarDayUser;
