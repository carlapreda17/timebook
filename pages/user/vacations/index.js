import { withAuth } from '../../../auth';
import { Layout } from '../../../components';
import { RequestVacationButton } from '../../../components/Vacations';
import {
  VacationsTableUserSuccess,
  VacationsTableUserLoading,
  VacationsTableUserError,
} from '../../../components/VacationsTableUser';
import { useQuery } from '../../../hooks';

const Page = ({ id }) => {
  const { data, status } = useQuery('/vacations', { userId: id });
  return (
    <Layout title="Timebook" role="user">
      <div className="bg-primary text-white rounded-t-xl w-full">
        <div className="flex flex-row items-center justify-between p-4">
          <h1 className="font-bold text-2xl mb-4 p-4">Concedii</h1>
          <RequestVacationButton />
        </div>
      </div>
      <div className="my-6">
        {status === 'loading' && <VacationsTableUserLoading />}
        {status === 'error' && <VacationsTableUserError />}
        {status === 'success' && <VacationsTableUserSuccess data={data} />}
      </div>
    </Layout>
  );
};

export default withAuth(Page);
