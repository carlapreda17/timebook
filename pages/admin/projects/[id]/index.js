import { React } from 'react';
import { checkAuth, withAuth } from '../../../../auth';
import { Layout, withRouter } from '../../../../components';
import Project from '../../../../components/Project';
import ProjectLoading from '../../../../components/ProjectLoading';
import { useQuery } from '../../../../hooks';

const ProjectPage = ({ id }) => {
  const { data, status } = useQuery(`/stats/project/${id}`);

  return (
    <Layout title="Pagina proiectului" role="admin">
      {status === 'success' && <Project data={data}></Project>}
      {status === 'loading' && <ProjectLoading></ProjectLoading>}
      {status === 'error' && (
        <div className="card">
          <h2 className="text-red-400 text-2xl">Acest proiect nu exista.</h2>
        </div>
      )}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(withRouter(ProjectPage));
