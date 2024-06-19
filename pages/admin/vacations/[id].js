import { getYear } from 'date-fns';
import { useState } from 'react';
import { withAuth } from '../../../auth';
import { Layout, withRouter } from '../../../components';
import {
  UserVacationReportTableSuccess,
  UserVacationReportTableLoading,
  UserVacationReportTableError,
  AddUserVacationButton,
  UserVacationReportTableFilters,
  UserVacationReportTablePersonName,
} from '../../../components/UserVacationsReport';
import UserVacationTotals from '../../../components/UserVacationTotals/UserVacationTotals';
import { useQuery } from '../../../hooks';

const Page = ({ id }) => {
  const [options, setOptions] = useState({
    user: id,
    year: getYear(new Date()),
    dontShow: 'vacation-rejected',
  });
  const { data, status, refetch } = useQuery(`/vacations`, options);
  return (
    <Layout title="Timebook" role="admin">
      <div className="bg-primary text-white rounded-t-xl p-4">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between w-full">
            <UserVacationReportTablePersonName id={id} />
            <AddUserVacationButton id={id} refetch={refetch} />
          </div>
          <UserVacationTotals {...{ data, id }} />
          <UserVacationReportTableFilters setOptions={setOptions} />
        </div>
      </div>
      <div className="flex my-6 gap-6">
        {status === 'loading' && <UserVacationReportTableLoading />}
        {status === 'error' && <UserVacationReportTableError />}
        {status === 'success' && (
          <UserVacationReportTableSuccess data={data?.documents} refetch={refetch} />
        )}
      </div>
    </Layout>
  );
};

export default withRouter(withAuth(Page));
