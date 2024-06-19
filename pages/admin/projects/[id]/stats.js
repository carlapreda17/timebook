import { useState, useEffect } from 'react';
import { Layout, Plural, withRouter } from '../../../../components';
import { withAuth } from '../../../../auth';
import { useQuery } from '../../../../hooks';
import { PieChart, BarChart, DaysBarChart, chartLabels } from '../../../../components/Charts';
import { DurationFilter } from '../../../../components/Stats';
import { approximatedHours } from '../../../../functions';

const Page = ({ id }) => {
  const [durationType, setDurationType] = useState('duration_total');
  const [totalHours, setTotalHours] = useState();
  const { data, status } = useQuery(`/stats/project/${id}`);

  useEffect(() => {
    if (status === 'success') {
      const newTotal = calcutateTotal(data, durationType);
      setTotalHours(approximatedHours(newTotal));
    }
  }, [durationType, status]);

  const calcutateTotal = (data, durationType) =>
    data.stats.byUser.reduce((sum, user) => sum + user[durationType], 0);

  return (
    <Layout title="Statistici" role="admin">
      <div className="flex flex-col items-center gap-8">
        {status === 'success' && (
          <>
            <div className="bg-primary text-white rounded-t-xl w-full">
              <div className="flex flex-row items-center justify-between p-4">
                <div className="flex flex-col">
                  <h1 className="font-bold text-2xl mb-4">{data.project.name}</h1>
                  <DurationFilter setFilter={setDurationType} />
                  <h3 className="mt-4 font-bold">
                    Total: <Plural count={totalHours} one="ora" many="ore" />
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full flex gap-2">
              <div className="w-1/3 bg-white rounded-lg shadow-lg p-4">
                <PieChart
                  label="Ore lucrate dupa persoana"
                  labels={data.stats.byUser.map((element) => element.name)}
                  durationType={durationType}
                  data={data.stats.byUser}
                />
              </div>
              <div className="w-2/3 h-full bg-white rounded-lg shadow-lg p-4">
                <BarChart
                  label="Ore lucrate dupa luni"
                  labels={chartLabels.month}
                  data={data.stats.byMonth}
                  durationType={durationType}
                />
              </div>
            </div>
            <div className="w-full bg-white p-4 rounded-lg shadow-lg">
              <DaysBarChart durationType={durationType} id={id} />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default withRouter(withAuth(Page));
