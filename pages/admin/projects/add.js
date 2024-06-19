import { Layout } from '../../../components';
import AddProjectForm from '../../../components/Forms/AddProjectForm';
import { checkAuth, withAuth } from '../../../auth';

const Page = () => {
  return (
    <Layout title="Adaugă Proiect" role="admin">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Proiect nou</h2>
      <div className="card max-w-md">
        <AddProjectForm />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
