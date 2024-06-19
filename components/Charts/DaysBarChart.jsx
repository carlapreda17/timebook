import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { endOfMonth, startOfMonth } from 'date-fns';
import getDaysInRange from '../../functions/getDaysInRange';
import { useQuery } from '../../hooks';
import { chartColors, generateOptions, DaysBarChartArrows } from '.';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DaysBarChart = ({ durationType, id }) => {
  const [dates, setDates] = useState({
    startDate: startOfMonth(new Date()),
    endDate: endOfMonth(new Date()),
  });
  const [monthNumber, setMonthNumber] = useState(new Date().getMonth());
  const { data, status } = useQuery(`/stats/project/${id}/full-month`, { monthNumber });
  const labels = getDaysInRange(dates.startDate, dates.endDate);

  const getData = (data, durationType) => {
    const dataArray = new Array(labels.length).fill(0);
    //format of element name is '2022-10-31'
    data.map(
      (element) =>
        (dataArray[Number(element.name.slice(-2)) - 1] = Math.floor(element[durationType] / 60))
    );

    return dataArray;
  };

  if (status !== 'success') {
    return null;
  }

  return (
    <>
      <DaysBarChartArrows
        dates={dates}
        setDates={setDates}
        monthNumber={monthNumber}
        setMonthNumber={setMonthNumber}
      />
      <Bar
        options={generateOptions()}
        data={{
          labels,
          datasets: [
            {
              label: 'Durata totala',
              data: getData(data.fullMonth, durationType),
              backgroundColor: chartColors.opacity100,
            },
          ],
        }}
      />
    </>
  );
};

export default DaysBarChart;
