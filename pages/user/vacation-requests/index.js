import { withAuth } from '../../../auth';
import { Layout } from '../../../components';
import UserVacationTotals from '../../../components/UserVacationTotals/UserVacationTotals';
import { RequestVacationButton } from '../../../components/Vacations';
import {
  VacationsTableUserSuccess,
  VacationsTableUserLoading,
  VacationsTableUserError,
} from '../../../components/VacationsTableUser';
import { useQuery } from '../../../hooks';

const Page = () => {
  const { data, status, refetch } = useQuery('/vacations');

  return (
    <Layout title="Concedii" role="user">
      <div className="bg-primary text-white rounded-t-xl w-full">
        <div className="flex flex-row items-center justify-between p-4">
          <div>
            <h1 className="font-bold text-2xl mb-4 pt-4">Concedii</h1>
            <UserVacationTotals data={data} />
          </div>
          <RequestVacationButton />
        </div>
      </div>
      <div></div>
      <div className="my-6">
        {status === 'loading' && <VacationsTableUserLoading />}
        {status === 'error' && <VacationsTableUserError />}
        {status === 'success' && (
          <VacationsTableUserSuccess data={data?.documents} refetch={refetch} />
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Page);
