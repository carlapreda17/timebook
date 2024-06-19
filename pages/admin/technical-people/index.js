import { useState } from 'react';
import { checkAuth, withAuth } from '../../../auth';
import { Layout } from '../../../components';
import {
  AddPersonButton,
  PersonsTableError,
  PersonsTableFilters,
  PersonsTableLoading,
  PersonsTableSuccess,
} from '../../../components/PersonsTable';

import { useQuery } from '../../../hooks';

const Page = () => {
  const [options, setOptions] = useState({
    role: 'user',
  });
  const { data, refetch, status } = useQuery('identities', options);

  return (
    <main>
      <Layout title="Colaboratori" role="admin">
        <div className="bg-primary text-white rounded-t-xl">
          <div className="flex flex-row items-center justify-between p-4">
            <h1 className="font-bold text-2xl mb-4">Persoane Tehnice</h1>
            <AddPersonButton />
          </div>
          <div className="p-4">
            <PersonsTableFilters setOptions={setOptions} />
          </div>
        </div>
        <div className="flex my-6 gap-6">
          {status === 'loading' && <PersonsTableLoading />}
          {status === 'error' && <PersonsTableError />}
          {status === 'success' && (
            <div className="flex flex-col gap-4 w-full">
              <PersonsTableSuccess data={data} refetch={refetch} />
            </div>
          )}
        </div>
      </Layout>
    </main>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
