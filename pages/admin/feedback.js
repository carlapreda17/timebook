import { useState } from 'react';
import { withAuth } from '../../auth';
import { Layout } from '../../components';
import {
  FeedbackTableSuccess,
  FeedbackTableFilters,
  FeedbackTableLoading,
  FeedbackTableError,
} from '../../components/FeedbackTable';
import { useQuery } from '../../hooks';

const Page = () => {
  const [options, setOptions] = useState({
    order: 'date',
  });
  const { data, refetch, status } = useQuery('feedback', options);

  return (
    <main>
      <Layout title="Timebook" role="admin">
        <div className="bg-primary text-white rounded-t-xl">
          <h1 className="font-bold text-2xl mb-4 p-4">Feedback</h1>
          <div className="p-4">
            <FeedbackTableFilters setOptions={setOptions} />
          </div>
        </div>
        <div className="flex my-6 gap-6">
          {status === 'success' && <FeedbackTableSuccess data={data} refetch={refetch} />}
          {status === 'loading' && <FeedbackTableLoading />}
          {status === 'error' && <FeedbackTableError />}
        </div>
      </Layout>
    </main>
  );
};

export default withAuth(Page);
