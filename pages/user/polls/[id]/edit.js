import { Layout } from '../../../../components';
import { checkAuth, withAuth } from '../../../../auth';
import { useRouter } from 'next/router';
import { useQuery } from '../../../../hooks';
import {
  UpdatePollFormError,
  UpdatePollFormLoading,
  UpdatePollFormSuccess,
} from '../../../../components/Forms';

const Page = () => {
  const router = useRouter();
  const query = router.query;
  const id = query.id;
  const { data, status } = useQuery(`/polls/${id}`);

  return (
    <Layout title="Editeaza sondaj">
      {status === 'loading' && <UpdatePollFormLoading />}
      {status === 'error' && <UpdatePollFormError />}
      {status === 'success' && <UpdatePollFormSuccess data={data} role={'user'} />}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
