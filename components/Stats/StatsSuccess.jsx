import { DateRange } from '../Fields';
import { MessageNoRows } from '../LogbookTable';
import ChartStats from './ChartStats';

const StatsSuccess = ({ data, setRangeFilter, options }) => {
  return (
    <article className="flex flex-col items-center gap-4">
      <section className="bg-primary text-white rounded-t-xl flex gap-20 w-full">
        <div>
          <div className="flex flex-row items-center p-4">
            <h1 className="font-bold text-2xl ">
              {data.lastName} {data.firstName}
            </h1>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-end">
              <DateRange className="flex gap-5" onChange={setRangeFilter} options={options} />
            </div>
          </div>
        </div>
        <div className="p-4">
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
      </section>
      <>
        {!(data.totalHoursWorked.total > 0) && (
          <div className="w-full">
            <MessageNoRows message={'Date insuficiente pentru raport in intervalul ales.'} />
          </div>
        )}
        {data.totalHoursWorked.total > 0 && <ChartStats data={data} {...options} />}
      </>
    </article>
  );
};

export default StatsSuccess;
