import { useState } from 'react';
import { Layout, LoadMore, withRouter } from '../../../../components';
import PersonName from '../../../../components/PersonName';
import { useInfiniteQuery } from '../../../../hooks';
import AddActivityButton from '../../../../components/PersonalTimesheetTable/AddActivityButton';
import PersonalTimesheetFilters from '../../../../components/PersonalTimesheetTable/PersonalTimesheetFilters';
import SelectedRowsArea from '../../../../components/PersonalTimesheetTable/SelectedRowsArea';
import PersonalTimesheetTableSuccess from '../../../../components/PersonalTimesheetTable/PersonalTimesheetTableSuccess';
import PersonalTimesheetLoading from '../../../../components/PersonalTimesheetTable/PersonalTimesheetLoading';
import PersonNameLoading from '../../../../components/PersonalTimesheetTable/PersonNameLoading';
import PersonNameError from '../../../../components/PersonalTimesheetTable/PersonNameError';
import PersonalTimesheetError from '../../../../components/PersonalTimesheetTable/PersonalTimesheetError';
import ExportButton from '../../../../components/ExportButton';
import { withAuth } from '../../../../auth';
import SeePersonStatsButton from '../../../../components/PersonalTimesheetTable/SeePersonStatsButton';

const Page = ({ id }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState({});
  const [selectedProject, setSelectedProject] = useState({});

  const [options, setOptions] = useState({
    userId: id,
    order: 'date',
  });
  const { data, status, refetch, ...rest } = useInfiniteQuery(`activities`, options);

  return (
    <Layout title="Timebook" role="admin">
      <div className="bg-primary text-white rounded-t-xl">
        <div className="flex flex-row items-center justify-between p-4">
          {status === 'loading' && <PersonNameLoading />}
          {status === 'error' && <PersonNameError />}
          {status === 'success' && (
            <div className="flex items-center">
              <h1 className="font-bold text-2xl mb-1">
                <PersonName id={id} setSelectedPerson={setSelectedPerson} />
              </h1>
              <SeePersonStatsButton id={id} />
            </div>
          )}
          <AddActivityButton id={id} onHideModal={refetch} />
        </div>
        <div className="p-4">
          {selectedRows.length === 0 && (
            <div className="flex justify-between items-end">
              <PersonalTimesheetFilters
                setOptions={setOptions}
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
        {status === 'loading' && <PersonalTimesheetLoading />}
        {status === 'error' && <PersonalTimesheetError />}
        {status === 'success' && (
          <div className="flex flex-col gap-4 w-full">
            <PersonalTimesheetTableSuccess
              data={data?.pages}
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
  );
};

export default withRouter(withAuth(Page));
