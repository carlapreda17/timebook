import { isSameDay, isWeekend } from 'date-fns';
import { dateLocaleRo } from '../../functions';
import { LineChart, PieChartHours } from '../Charts';
import NonStandardDaysTables from './NonStandardDaysTables';

const ChartStats = ({ data, from, to }) => {
  const DATES_TYPES = {
    BANK_HOLIDAY_DAY: 'Zi libera',
    VACATION_DAY: 'Zi de concediu',
    WORKABLE_DAY: 'Zi lucratoare',
    WEEKEND_DAY: 'Zi de weekend',
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 16,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 10,
          },
          padding: 12,
        },
      },
      title: {
        display: true,
        text: 'Ore lucrate pe zile',
        font: {
          size: 25,
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
  };

  const getDaysInRange = (startDate, endDate) => {
    const nextDay = (date) => date.setDate(date.getDate() + 1);

    if (!startDate || !endDate) {
      return [];
    }

    const date = new Date(startDate.getTime());

    const dates = [];

    while (date <= endDate) {
      dates.push(dateLocaleRo(date));
      nextDay(date);
    }

    return dates;
  };

  const labels = getDaysInRange(from, to);

  // Computing how many hours are workable in a day
  const getWorkableHours = (to, from, bankHolidayDates, vacationDates) => {
    const workableHoursArray = [];

    for (let i = new Date(from); i <= new Date(to); i.setDate(i.getDate() + 1)) {
      const isWithinBankHolidayDates = bankHolidayDates.find((date) =>
        isSameDay(new Date(date), new Date(i))
      );
      const isWithinVacationDates = vacationDates.find((date) =>
        isSameDay(new Date(date), new Date(i))
      );

      if (isWithinBankHolidayDates || isWithinVacationDates) {
        workableHoursArray.push(0);
      } else if (isWeekend(i)) {
        workableHoursArray.push(0);
      } else {
        workableHoursArray.push(8);
      }
    }

    return workableHoursArray;
  };

  const getData = (data) => {
    const dataArray = new Array(labels.length).fill(0);
    data.map((element) => {
      const index = labels.indexOf(dateLocaleRo(element.date));
      dataArray[index] = element.hoursWorked;
    });

    return dataArray;
  };

  const lineChartData = [
    {
      label: 'ore lucrate',
      data: getData(data.totalHoursWorked.perDay),
    },
    {
      label: 'ore lucrabile',
      data: getWorkableHours(to, from, data.bankHolidayDates, data.vacationDates),
    },
  ];

  const pieChartData = data.totalHoursWorked.perProject.map((project) => {
    return {
      name: project.name,
      duration_total: project.hoursWorked,
    };
  });

  return (
    <section className="w-full flex-col gap-2">
      <div className="flex gap-2 w-full mb-4">
        <div className="w-1/3 bg-white rounded-lg shadow-lg p-4">
          <PieChartHours
            label="Ore lucrate dupa proiect"
            labels={data.totalHoursWorked.perProject.map((project) => project.name)}
            durationType={'duration_total'}
            data={pieChartData}
          />
        </div>
        {labels.length > 1 && labels.length <= 31 && (
          <div className="w-2/3 h-full bg-white rounded-lg shadow-lg p-4">
            <LineChart
              label="Ore lucrate pe zile"
              labels={labels}
              data={lineChartData}
              options={options}
            />
          </div>
        )}
      </div>
      <NonStandardDaysTables nonStandardDays={data.nonStandardDays} DATES_TYPES={DATES_TYPES} />
    </section>
  );
};

export default ChartStats;
