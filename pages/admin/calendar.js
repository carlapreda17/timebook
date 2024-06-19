import { withAuth } from '../../auth';
import { Layout } from '../../components';
import { Calendar } from '../../components/Calendar';

const Page = () => {
  return (
    <Layout role="admin" title="Timebook">
      <Calendar role="admin" />
    </Layout>
  );
};

export default withAuth(Page);
