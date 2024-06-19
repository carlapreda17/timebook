import { useState } from 'react';
import { checkAuth, withAuth } from '../../../auth';
import { Layout } from '../../../components';
import AddProjectButton from '../../../components/ProjectList/AddProjectButton';
import ProjectListError from '../../../components/ProjectList/ProjectListError';
import ProjectListFilters from '../../../components/ProjectList/ProjectListFilters';
import ProjectListLoading from '../../../components/ProjectList/ProjectListLoading';
import ProjectListSuccess from '../../../components/ProjectList/ProjectListSuccess';
import { useQuery } from '../../../hooks';

const Page = () => {
  const [options, setOptions] = useState({
    order: 'date',
    active: true,
  });
  const { data, refetch, status } = useQuery('/projects', options);

  return (
    <Layout title="Proiecte" role="admin">
      <div className="bg-primary text-white rounded-t-xl">
        <div className="flex flex-row items-center justify-between p-4">
          <h1 className="font-bold text-2xl mb-4">Proiecte</h1>
          <AddProjectButton onHideModal={refetch} />
        </div>
        <div className="p-4">
          <ProjectListFilters setOptions={setOptions} />
        </div>
      </div>
      <div className="flex my-6 gap-6">
        {status === 'loading' && <ProjectListLoading />}
        {status === 'error' && <ProjectListError />}
        {status === 'success' && (
          <div className="flex flex-col gap-4 w-full">
            <ProjectListSuccess data={data} refetch={refetch} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
