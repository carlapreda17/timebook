import { checkAuth, withAuth } from '../../auth';
import { Layout } from '../../components';
import LineChart from '../../components/Charts/LineChart';
import PieChart from '../../components/Charts/PieChart';

const pieData = [
  {
    name: 'Leonard Ionescu',
  },
  {
    name: 'Serban Capatina',
  },
  {
    name: 'Bogdan Posedaru',
  },
  {
    name: 'Pam Beasley',
  },
  {
    name: 'Alexandra Sfetcu',
  },
];

const lineData = [
  {
    name: 'Ianuarie',
    duration_total: 320,
  },
  {
    name: 'Februarie',
    duration_total: 340,
  },
  {
    name: 'Martie',
    duration_total: 200,
  },
];

const lineData2 = [
  {
    name: '1 Ian',
    duration_total: 21,
  },
  {
    name: '2 Ian',
    duration_total: 18,
  },
  {
    name: '3 Ian',
    duration_total: 20,
  },
  {
    name: '4 Ian',
    duration_total: 16,
  },
];

const Page = () => {
  return (
    <Layout role="admin" title="Charts">
      <div className="flex flex-col items-center gap-8">
        <div className="w-10/12 bg-white p-4 rounded-lg shadow-lg">
          <LineChart
            label={'Ore lucrate intr-un an'}
            labels={lineData.map((element) => element.name)}
            data={[
              { label: 'ore lucrate', data: lineData.map((element) => element.duration_total) },
            ]}
          />
        </div>
        <div className="w-10/12 bg-white p-4 rounded-lg shadow-lg">
          <LineChart
            label={'Ore lucrate intr-o luna'}
            labels={lineData2.map((element) => element.name)}
            data={[
              { label: 'ore lucrate', data: lineData2.map((element) => element.duration_total) },
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
