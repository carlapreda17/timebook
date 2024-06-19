import { Layout } from '../../components';
import { MyProfile } from '../../components/MyProfile';
import { checkAuth, withAuth } from '../../auth';
import { useQuery } from '../../hooks';

const Page = () => {
  const { data, status } = useQuery(`/profile`);
  return (
    <Layout title="Profilul meu">
      {status === 'success' && (
        <div className="flex gap-12">
          <MyProfile data={data} status={status} />
        </div>
      )}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
