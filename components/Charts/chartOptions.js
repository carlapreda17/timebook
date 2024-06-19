const chartOptions = {
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
const generateOptions = (title) => {
  const clone = JSON.parse(JSON.stringify(chartOptions));
  clone.plugins.title.text = title;

  return clone;
};

export default generateOptions;
