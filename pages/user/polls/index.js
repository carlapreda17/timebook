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
import ProposePollButton from '../../../components/Polls/ProposePollButton';
import { useProfile, useQuery } from '../../../hooks';
import PollsTabsStatusFilterUser from '../../../components/Polls/PollsTabsStatusFilterUser';
import PollsActiveFilter from '../../../components/Polls/PollsActiveFilter';

const Page = () => {
  const { me } = useProfile();

  const [options, setOptions] = useState({
    date: true,
    priority: '',
    hasParticipated: '',
    status: '',
    active: '',
  });
  const { data, status } = useQuery('/polls', options);

  return (
    <main>
      <Layout title="Sondaje" role="user">
        <div className="grid min-w-screen overflow-x-auto sm:overflow-x-visible">
          <div className="bg-primary text-white rounded-t-xl max-w-full flex flex-col w-full overflow-x-auto sm:overflow-x-visible">
            <div className="flex flex-row items-center justify-between p-4">
              <h1 className="font-bold text-2xl mb-4">Sondaje</h1>
              <ProposePollButton />
            </div>
            <div className="p-4 flex gap-6 flex-col sm:flex-row">
              <PollsDateFilter setOptions={setOptions} />
              <PollsPriorityFilter setOptions={setOptions} />
              <PollsCompletedFilter setOptions={setOptions} />
              <PollsActiveFilter setOptions={setOptions} />
            </div>
          </div>
          <PollsTabsStatusFilterUser setOptions={setOptions} />
          <div className="flex my-6 gap-6">
            <div className="flex flex-col gap-4 w-full ">
              {status === 'loading' && <PollsListLoading />}
              {status === 'error' && <PollsListError />}
              {status === 'success' && <PollsListSuccess data={data} role={me.role} />}
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
