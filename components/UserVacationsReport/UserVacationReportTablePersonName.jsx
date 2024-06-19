import { useQuery } from '../../hooks';
import PersonNameError from '../PersonalTimesheetTable/PersonNameError';
import PersonNameLoading from '../PersonalTimesheetTable/PersonNameLoading';

const UserVacationReportTablePersonName = ({ id }) => {
  const { data, status } = useQuery(`Identity/${id}`);
  return (
    <>
      {status === 'loading' && <PersonNameLoading />}
      {status === 'error' && <PersonNameError />}
      {status === 'success' && (
        <h1 className="font-bold text-2xl mb-4">{data.first_name + ' ' + data.last_name}</h1>
      )}
    </>
  );
};

export default UserVacationReportTablePersonName;
