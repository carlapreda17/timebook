import { withAuth } from '../../../../auth';
import { Layout, withRouter } from '../../../../components';
import { AddVacationForUserForm } from '../../../../components/Vacations';

const Page = ({ id }) => {
  return (
    <Layout title="Timebook" role="admin">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Adaugă un concediu</h2>
      <div className="card max-w-md">
        <AddVacationForUserForm id={id} />
      </div>
    </Layout>
  );
};

export default withAuth(withRouter(Page));
