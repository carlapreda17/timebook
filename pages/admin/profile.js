import { checkAuth, withAuth } from '../../auth';
import { Layout } from '../../components';
import { MyProfile } from '../../components/MyProfile';
import { AdminList } from '../../components/AdminList';
import { useQuery } from '../../hooks';

const Page = () => {
  const { data, status } = useQuery(`/profile`);
  return (
    <Layout title="Timebook" role="admin">
      {status === 'success' && (
        <div className="flex gap-12">
          <MyProfile data={data} status={status} />
        </div>
      )}
      <AdminList />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
