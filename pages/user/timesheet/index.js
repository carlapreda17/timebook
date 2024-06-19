import { useState } from 'react';
import { withAuth } from '../../../auth';
import { Layout, LoadMore } from '../../../components';
import {
  AddActivityButton,
  SelectedRowsArea,
  UserName,
  UserTimeSheetLoading,
  UserTimesheetError,
  UserTimesheetSucces,
  UserTimesheetFilters,
  CalendarViewButton,
} from '../../../components/UserTimesheet';
import { useInfiniteQuery } from '../../../hooks';

const Page = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [options, setOptions] = useState({
    order: 'date',
  });
  const { data, refetch, status, ...rest } = useInfiniteQuery('activities', options);

  return (
    <main>
      <Layout title="Timesheet" role="user">
        <div className="bg-primary text-white rounded-t-xl w-full">
          <div className="flex flex-row items-center justify-between p-4">
            <UserName />
            <div className="flex flex-row gap-2">
              <CalendarViewButton />
              <AddActivityButton onHideModal={refetch} />
            </div>
          </div>
          <div className="p-4">
            {selectedRows.length === 0 && <UserTimesheetFilters setOptions={setOptions} />}
            {selectedRows.length > 0 && <SelectedRowsArea rows={selectedRows} refetch={refetch} />}
          </div>
        </div>
        <div className="flex my-6 gap-6 w-full -mr-6">
          {status === 'loading' && <UserTimeSheetLoading />}
          {status === 'error' && <UserTimesheetError />}
          {status === 'success' && (
            <div className="flex flex-col gap-4 w-full">
              <UserTimesheetSucces
                data={data.pages}
                refetch={refetch}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
              />
              <LoadMore {...rest} />
            </div>
          )}
        </div>
      </Layout>
    </main>
  );
};

export default withAuth(Page);
