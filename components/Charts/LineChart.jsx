import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const borderColors = [
  'rgba(15, 76, 129, 0.8)',
  'rgba(83, 176, 174, 0.8)',
  'rgba(247, 67, 113, 0.8)',
];
const backgroundColors = ['rgba(15, 76, 129, 1)', 'rgba(83, 176, 174, 1)', 'rgba(247, 67, 113, 1)'];

const LineChart = ({ label, labels, data, ...props }) => {
  const options = {
    responsive: true,
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
        text: label,
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

  return (
    <Line
      options={options}
      data={{
        labels,
        datasets: data.map((element, index) => {
          return {
            label: element.label,
            data: element.data,
            borderColor: borderColors[index],
            backgroundColor: backgroundColors[index],
          };
        }),
      }}
      {...props}
    />
  );
};

export default LineChart;
