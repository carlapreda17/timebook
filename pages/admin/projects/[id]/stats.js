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
      <div className="flex flex-col items-center m-tablet:items-start gap-8">
        {status === 'success' && (
          <>
            <div className="bg-primary text-white rounded-t-xl w-full">
              <div className="flex flex-row items-center justify-between p-4">
                <div className="flex flex-col">
                  <h1 className="font-bold text-2xl mb-4">{data.project.name}</h1>
                  <DurationFilter setFilter={setDurationType}/>
                  <h3 className="mt-4 font-bold">
                    Total: <Plural count={totalHours} one="ora" many="ore"/>
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full mb-4 laptop:grid lg:flex lg:flex-col">
              <div className="flex gap-2 w-full lg:flex-row laptop:grid">
                <div
                  className="lg:w-1/3 w-full bg-white rounded-lg shadow-lg p-4 tablet:w-9/12 tablet:m-auto mobile:w-[80%] m-tablet:w-1/2">
                  <PieChart
                    label="Ore lucrate dupa persoana"
                    labels={data.stats.byUser.map((element) => element.name)}
                    durationType={durationType}
                    data={data.stats.byUser}
                  />
                </div>
                <div
                  className="flex w-full lg:w-2/3 tablet:w-full overflow-x-auto relative flex-col md:mx-0 rounded-lg bg-white">
                  <BarChart
                    label="Ore lucrate dupa luni"
                    labels={chartLabels.month}
                    data={data.stats.byMonth}
                    durationType={durationType}
                  />
                </div>
              </div>
              <div
                className="flex w-full tablet:w-full overflow-x-auto relative flex-col md:mx-0 rounded-lg bg-white">
                <DaysBarChart durationType={durationType} id={id}/>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default withRouter(withAuth(Page));
