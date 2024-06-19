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
import { chartColors, generateOptions } from '.';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ label, labels, data, durationType }) => {
  const getData = (data, durationType) => {
    const dataArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    data.map(
      (element) => (dataArray[Number(element.name) - 1] = Math.floor(element[durationType] / 60))
    );
    return dataArray;
  };

  return (
    <Bar
      options={generateOptions(label)}
      data={{
        labels,
        datasets: [
          {
            label: 'Durata totala',
            data: getData(data, durationType),
            backgroundColor: chartColors.opacity100,
          },
        ],
      }}
    />
  );
};

export default BarChart;
