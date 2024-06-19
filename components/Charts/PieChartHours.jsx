import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { generateOptions, chartColors } from '.';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const PieChartHours = ({ label, labels, data, durationType }) => {
  const getData = (data, durationType) => data?.map((element) => element[durationType]);

  return (
    <Pie
      options={generateOptions(label)}
      data={{
        labels,
        datasets: [
          {
            label,
            data: getData(data, durationType),
            backgroundColor: chartColors.opacity80,
            borderColor: chartColors.opacity100,
            borderWidth: 1,
          },
        ],
      }}
    />
  );
};

export default PieChartHours;
