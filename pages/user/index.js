import { useEffect } from 'react';
import { checkAuth, withAuth } from '../../auth';
import { Layout } from '../../components';
import { router } from '../../lib';

const Page = () => {
  useEffect(() => {
    router.push('/user/calendar');
  }, []);

  return (
    <Layout>
      <div className="prose max-w-full"></div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
