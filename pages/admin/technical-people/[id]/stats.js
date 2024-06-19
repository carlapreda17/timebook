import { endOfMonth, startOfMonth } from 'date-fns';
import { useState } from 'react';
import { checkAuth, withAuth } from '../../../../auth';
import { Layout, withRouter } from '../../../../components';
import StatsSuccess from '../../../../components/Stats/StatsSuccess';
import { useQuery } from '../../../../hooks';
import StatsLoading from '../../../../components/Stats/StatsLoading';
import StatsError from '../../../../components/Stats/StatsError';

const Page = ({ id }) => {
  const [options, setOptions] = useState({
    order: 'date',
    from: startOfMonth(new Date()),
    to: endOfMonth(new Date()),
  });

  const { data, status } = useQuery(`stats/people/${id}`, options);

  const setRangeFilter = ({ from, to }) => {
    if (from && to) {
      setOptions((prev) => ({
        ...prev,
        from,
        to,
      }));
    } else {
      setOptions((prev) => {
        return { ...prev, from: startOfMonth(new Date()), to: endOfMonth(new Date()) };
      });
    }
  };

  return (
    <Layout title="Raport colaborator" role="admin">
      {status === 'error' && <StatsError />}
      {status === 'loading' && <StatsLoading />}
      {status === 'success' && (
        <StatsSuccess
          {...{
            data,
            setRangeFilter,
            options,
          }}
        />
      )}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(withRouter(Page));
