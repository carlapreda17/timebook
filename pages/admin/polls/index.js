import { useState } from 'react';
import { checkAuth, withAuth } from '../../../auth';
import { Layout } from '../../../components';
import {
  PollsCompletedFilter,
  PollsDateFilter,
  PollsListError,
  PollsListLoading,
  PollsListSuccess,
  PollsPriorityFilter,
} from '../../../components/Polls';
import AddPollButton from '../../../components/Polls/AddPollButton';
import PollsActiveFilter from '../../../components/Polls/PollsActiveFilter';
import PollsTabsStatusFilterAdmin from '../../../components/Polls/PollsTabsStatusFilterAdmin';
import { useProfile, useQuery } from '../../../hooks';
import PollsUserFilter from '../../../components/Polls/PollsUserFilter';

const Page = () => {
  const { me } = useProfile();
  const [options, setOptions] = useState({
    date: true,
    priority: '',
    hasParticipated: '',
    status: '',
    active: '',
    userId: '',
  });
  const { data, status, refetch } = useQuery('/polls', options);

  return (
    <main>
      <Layout title="Sondaje" role="admin">
        <div className="grid min-w-screen overflow-x-auto sm:overflow-x-visible">
          <div className="bg-primary text-white rounded-t-xl max-w-full flex flex-col w-full overflow-x-auto sm:overflow-x-visible">
            <div className="flex flex-row items-center justify-between p-4">
              <h1 className="font-bold text-2xl mb-4">Sondaje</h1>
              <AddPollButton />
            </div>
            <div className="p-4 flex gap-6 flex-col sm:flex-row">
              <PollsUserFilter setOptions={setOptions} />
              <PollsDateFilter setOptions={setOptions} />
              <PollsPriorityFilter setOptions={setOptions} />
              <PollsCompletedFilter setOptions={setOptions} />
              <PollsActiveFilter setOptions={setOptions} />
            </div>
          </div>
          <PollsTabsStatusFilterAdmin setOptions={setOptions} />
          <div className="flex my-6 gap-6">
            <div className="flex flex-col gap-4 w-full ">
              {status === 'loading' && <PollsListLoading />}
              {status === 'error' && <PollsListError />}
              {status === 'success' && (
                <PollsListSuccess data={data} role={me.role} refetch={refetch} />
              )}
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
