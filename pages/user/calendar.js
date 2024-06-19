import { withAuth } from '../../auth';
import { Layout } from '../../components';
import { UserCalendar } from '../../components/UserCalendar';

const Page = () => {
  return (
    <Layout title="Timesheet">
      <UserCalendar />
    </Layout>
  );
};

export default withAuth(Page);
