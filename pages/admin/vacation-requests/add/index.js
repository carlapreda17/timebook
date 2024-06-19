import { withAuth } from '../../../../auth';
import { Layout } from '../../../../components';
import { AddVacationForm } from '../../../../components/Vacations';

const Page = () => {
  return (
    <Layout title="Timebook" role="admin">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Adaugă un concediu</h2>
      <div className="card max-w-md">
        <AddVacationForm />
      </div>
    </Layout>
  );
};

export default withAuth(Page);
