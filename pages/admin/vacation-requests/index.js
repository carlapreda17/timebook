import { withAuth } from '../../../auth';
import Layout from '../../../components/Layout';
import {
  VacationsTableAdminFilters,
  VacationsTableAdminSuccess,
  VacationsTableAdminLoading,
  VacationsTableAdminError,
} from '../../../components/VacationsTableAdmin';
import { AddVacationButton } from '../../../components/Vacations';
import { useQuery } from '../../../hooks';
import { useState } from 'react';
import { format } from 'date-fns';

const Page = () => {
  const [options, setOptions] = useState({
    from: format(new Date(), 'yyyy-MM-dd'),
  });
  const { data, status, refetch } = useQuery('vacation-requests', options);

  return (
    <Layout title="Timebook" role="admin">
      <div className="bg-primary text-white rounded-t-xl w-full">
        <div className="flex flex-row items-center justify-between pr-4 py-4">
          <h1 className="font-bold text-2xl mb-4 p-4">Concedii</h1>
          <AddVacationButton />
        </div>
        <div className="p-4">
          <VacationsTableAdminFilters setOptions={setOptions} />
        </div>
      </div>
      <div className="flex my-6 gap-6">
        {status === 'loading' && <VacationsTableAdminLoading />}
        {status === 'error' && <VacationsTableAdminError />}
        {status === 'success' && <VacationsTableAdminSuccess data={data} refetch={refetch} />}
      </div>
    </Layout>
  );
};

export default withAuth(Page);
