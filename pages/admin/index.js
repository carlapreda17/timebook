import { checkAuth, withAuth } from '../../auth';
import { Layout } from '../../components';
import DashboardCard from '../../components/DashboardCard';
import { useQuery } from '../../hooks';

const Page = () => {
  const cards = [
    {
      title: 'Proiecte',
      text: 'Vizualizeaza lista completa a proiectelor din cadrul companiei.',
      url: 'admin/projects',
      image: 'images/projects-card.png',
    },
    {
      title: 'Persoane tehnice',
      text: 'Vizualizeaza lista completa a persoanelor tehnice din cadrul companiei.',
      url: 'admin/technical-people',
      image: 'images/timesheets-card.png',
    },
    {
      title: 'Concedii',
      text: 'Vizualizeaza concediile persoanelor tehnice din cadrul companiei.',
      url: 'admin/vacation-situations',
      image: 'images/vacation-card.png',
    },
  ];

  const { data, status } = useQuery(`/profile`);
  return (
    <Layout role="admin" title="Timebook">
      <div className="prose max-w-full">
        <h2 className="font-semibold mb-4 text-xl text-body dark:text-white">
          {status === 'loading' && (
            <div className="h-8 bg-gray-200 rounded-full w-52 dark:bg-slate-700" />
          )}
          {status === 'error' && <>Pagina nu a putut fi incarcata!</>}
          {status === 'success' && <>Bine ai venit, {data.first_name}!</>}
        </h2>

        {status !== 'error' && (
          <>
            <div className="flex flex-col md:flex-row gap-6">
              {cards.map((card, index) => (
                <DashboardCard
                  key={index}
                  title={card.title}
                  text={card.text}
                  url={card.url}
                  image={card.image}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
