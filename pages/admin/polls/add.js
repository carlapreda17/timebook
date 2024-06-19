import { Layout } from '../../../components';
import { checkAuth, withAuth } from '../../../auth';
import { AddPollForm } from '../../../components/Forms';

const Page = () => {
  return (
    <Layout title="Adaugă Sondaj" role="admin">
      <h2 className="text-2xl font-semibold mb-4 dark:text-slate-300">Sondaj nou</h2>
      <AddPollForm />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
