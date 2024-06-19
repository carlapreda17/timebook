import { Layout } from '../../../components';
import { checkAuth, withAuth } from '../../../auth';
import { AddPollForm } from '../../../components/Forms';

const Page = () => {
  return (
    <Layout title="Propune Sondaj">
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">Sondaj nou</h2>
      <AddPollForm />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
