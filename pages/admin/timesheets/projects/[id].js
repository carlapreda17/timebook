import { withAuth, checkAuth } from '../../../../auth';
import { Layout, LoadMore, withRouter } from '../../../../components';
import { useState } from 'react';
import { useInfiniteQuery } from '../../../../hooks';
import AddActivityButton from '../../../../components/ProjectTable/AddActivityButton';
import ProjectTitle from '../../../../components/ProjectTable/ProjectTitle';
import ProjectFilters from '../../../../components/ProjectTable/ProjectFilters';
import SelectedRowsArea from '../../../../components/ProjectTable/SelectedRowsArea';
import ProjectTimesheetLoading from '../../../../components/ProjectTable/ProjectTimesheetLoading';
import ProjectTimesheetError from '../../../../components/ProjectTable/ProjectTimesheetError';
import ProjectTimesheetSuccess from '../../../../components/ProjectTable/ProjectTimesheetSuccess';
import ExportButton from '../../../../components/ExportButton';
import Link from 'next/link';

const Page = ({ id }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [options, setOptions] = useState({
    order: 'date',
    projectId: id,
  });
  const [selectedPerson, setSelectedPerson] = useState({});
  const [selectedProject, setSelectedProject] = useState({});
  const { data, refetch, status, ...rest } = useInfiniteQuery('activities', options);

  return (
    <main>
      <Layout title="Project Timesheet" role="admin">
        <div className="bg-primary text-white rounded-t-xl">
          <div className="flex flex-row items-center justify-between p-4">
            <div className="flex items-center">
              <ProjectTitle projectId={id} setSelectedProject={setSelectedProject} />
              <div className="">
                <Link href={`/admin/projects/${id}/stats`}>
                  <button className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 rounded-full px-4 ml-2">
                    <i className="fa-solid fa-chart-simple" />
                  </button>
                </Link>
              </div>
            </div>
            <AddActivityButton onHideModal={refetch} projectId={id} />
          </div>
          <div className="p-4">
            {selectedRows.length === 0 && (
              <div className="flex justify-between items-end">
                <ProjectFilters setOptions={setOptions} setSelectedPerson={setSelectedPerson} />
                {status === 'success' && data.pages.length > 0 && (
                  <ExportButton
                    filters={options}
                    selectedPerson={selectedPerson}
                    selectedProject={selectedProject}
                  />
                )}
              </div>
            )}
            {selectedRows.length > 0 && <SelectedRowsArea rows={selectedRows} refetch={refetch} />}
          </div>
        </div>
        <div className="flex my-6 gap-6">
          {status === 'loading' && <ProjectTimesheetLoading />}
          {status === 'error' && <ProjectTimesheetError />}
          {status === 'success' && (
            <div className="flex flex-col gap-4 w-full">
              <ProjectTimesheetSuccess
                data={data.pages}
                refetch={refetch}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
                timeWorked={data.pageParams.duration}
              />
              <LoadMore {...rest} />
            </div>
          )}
        </div>
      </Layout>
    </main>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(withRouter(Page));
