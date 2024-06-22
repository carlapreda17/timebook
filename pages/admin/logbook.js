import { checkAuth, withAuth } from '../../auth';
import { Layout, LoadMore } from '../../components';
import { useState } from 'react';
import {
  LogbookFilters,
  LogbookTableError,
  LogbookTableLoading,
  LogbookTableSuccess,
  SelectedRowsArea,
  AdminCalendarButton,
} from '../../components/LogbookTable';
import { useInfiniteQuery, useQuery } from '../../hooks';
import AddActivityButton from '../../components/AddActivityButton';
import ExportButton from '../../components/ExportButton';

const Page = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState({});
  const [selectedProject, setSelectedProject] = useState({});

  const [options, setOptions] = useState({
    order: 'date',
  });
  const { data, refetch, status, ...rest } = useInfiniteQuery('activities', options);
  const { data: timeData } = useQuery('activities/time', options);

  return (
    <main>
      <Layout title="Timebook" role="admin">
        <div className="bg-primary text-white rounded-t-xl">
          <div className="flex flex-row items-center justify-between p-4">
            <h1 className="font-bold text-2xl mb-4">Logbook</h1>
            <div className="flex gap-2">
              <AdminCalendarButton />
              <AddActivityButton onHideModal={refetch} isOnLogbook={true} />
            </div>
          </div>
          <div className="p-4">
            {selectedRows.length === 0 && (
              <div className="flex justify-between tablet:grid items-end">
                <LogbookFilters
                  setOptions={setOptions}
                  setSelectedPerson={setSelectedPerson}
                  setSelectedProject={setSelectedProject}
                />
                {status === 'success' && data.pages.length > 0 && (
                  <ExportButton
                    filters={options}
                    selectedPerson={selectedPerson}
                    selectedProject={selectedProject}
                  />
                )}
              </div>
            )}
            {selectedRows.length > 0 && (
              <SelectedRowsArea
                rows={selectedRows}
                onComplete={() => {
                  setSelectedRows([]);
                  refetch();
                }}
              />
            )}
          </div>
        </div>
        <div className="flex my-6 gap-6">
          {status === 'loading' && <LogbookTableLoading />}
          {status === 'error' && <LogbookTableError />}
          {status === 'success' && (
            <div className="flex flex-col gap-4 w-full">
              <LogbookTableSuccess
                data={data.pages}
                refetch={refetch}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
                timeData={timeData}
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

export default withAuth(Page);
