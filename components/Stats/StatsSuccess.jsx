import { DateRange } from '../Fields';
import {
  AdminCalendarButton,
  LogbookFilters,
  MessageNoRows,
  SelectedRowsArea
} from '../LogbookTable';
import ChartStats from './ChartStats';
import AddActivityButton from "../AddActivityButton";
import ExportButton from "../ExportButton";

const StatsSuccess = ({ data, setRangeFilter, options }) => {
  return (
    <div>
    <div className="flex flex-col gap-4">
      <div className="bg-primary text-white rounded-t-xl">
        <div className="flex flex-row items-center justify-between p-4 tablet:grid">
          <h1 className="header-title">{data.lastName} {data.firstName}</h1>
          <div className="flex flex-col tablet:mt-4">
            <span className="block text-lg">
            Ore lucrate -{' '}
              {data.totalHoursWorked.total >= 0
                ? data.totalHoursWorked.total
                : `(${Math.abs(data.totalHoursWorked.total)})`}
          </span>
            <span className="block text-lg">
            Ore lucrabile ramase -{' '}
              {data.remainedWorkableHours >= 0
                ? data.remainedWorkableHours
                : `(${Math.abs(data.remainedWorkableHours)})`}
          </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between tablet:grid items-end">
            <DateRange className="flex gap-5 tablet:grid" onChange={setRangeFilter} options={options} />
          </div>
        </div>
      </div>
    </div>
        {!(data.totalHoursWorked.total > 0) && (
          <div className="w-full">
            <MessageNoRows message={'Date insuficiente pentru raport in intervalul ales.'}/>
          </div>
        )}
        {data.totalHoursWorked.total > 0 && <ChartStats data={data} {...options} />}
    </div>
  );
};

export default StatsSuccess;
