import { Layout } from '../../../components';
import { withAuth } from '../../../auth';
import {
  VacationTransactionsTableLoading,
  VacationTransactionsTableError,
  VacationTransactionsTableSuccess,
} from '../../../components/VacationTransactions';
import { useQuery } from '../../../hooks';

const Page = () => {
  const { data, status, refetch } = useQuery('identities', {
    role: 'user',
    active: true,
  });

  return (
    <Layout title="Timebook" role="admin">
      <div className="bg-primary text-white rounded-t-xl">
        <div className="flex flex-row items-center justify-between p-4">
          <h1 className="font-bold text-2xl mb-4">Situatii</h1>
        </div>
        {/* <div className="p-4">
          <VacationTransactionsFilters setOptions={setOptions} />
        </div> */}
      </div>
      <div className="flex my-6 gap-6">
        {status === 'loading' && <VacationTransactionsTableLoading />}
        {status === 'error' && <VacationTransactionsTableError />}
        {status === 'success' && (
          <div className="flex flex-col gap-4 w-full">
            <VacationTransactionsTableSuccess data={data} refetch={refetch} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Page);
