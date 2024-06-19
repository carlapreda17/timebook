import { React } from 'react';
import { checkAuth, withAuth } from '../../../../auth';
import { Layout, withRouter } from '../../../../components';
import { useProfile, useQuery } from '../../../../hooks';
import { PollError, PollLoading, PollSuccess } from '../../../../components/Polls';

const Page = ({ id }) => {
  const { data, status, refetch } = useQuery(`/polls/${id}`);
  const { me } = useProfile();

  return (
    <Layout title="Pagina sondajului">
      {status === 'loading' && <PollLoading />}
      {status === 'error' && <PollError />}
      {status === 'success' && <PollSuccess data={data} refetch={refetch} role={me.role} />}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(withRouter(Page));
