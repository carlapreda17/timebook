import { DateRange } from '../Fields';
import { MessageNoRows } from '../LogbookTable';
import ChartStats from './ChartStats';

const StatsSuccess = ({ data, setRangeFilter, options }) => {
  return (
    <article className="flex flex-col items-center gap-4">
      <div className="bg-primary text-white rounded-t-xl flex gap-20 w-full">
        <div className="p-4">
          <div className="flex flex-row items-center tablet:grid justify-between">
            <h1 className="header-title">
              {data.lastName} {data.firstName}
            </h1>
            <div>
              <span className="block text-lg tablet:mt-2 tablet:text-sm">
                Ore lucrate -{' '}
                {data.totalHoursWorked.total >= 0
                  ? data.totalHoursWorked.total
                  : `(${Math.abs(data.totalHoursWorked.total)})`}
              </span>
              <span className="block text-lg tablet:mt-2 tablet:text-sm">
                Ore lucrabile ramase -{' '}
                {data.remainedWorkableHours >= 0
                  ? data.remainedWorkableHours
                  : `(${Math.abs(data.remainedWorkableHours)})`}
              </span>
            </div>
          </div>
          <div className="flex justify-between tablet:grid items-end tablet:mt-4">
            <DateRange className="flex gap-5 tablet:grid" onChange={setRangeFilter} options={options}/>
          </div>
        </div>
      </div>

      <>
        {!(data.totalHoursWorked.total > 0) && (
          <div className="w-full">
            <MessageNoRows message={'Date insuficiente pentru raport in intervalul ales.'}/>
          </div>
        )}
        {data.totalHoursWorked.total > 0 && <ChartStats data={data} {...options} />}
      </>
    </article>
  );
};

export default StatsSuccess;
