import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import jsonData from './josnData';

const CaloriesChart = () => {
  const chartData = {
    labels: jsonData.activities.map((item, index) => item.name),
    datasets: [
      {
        label: 'Calories Burn burn',
        data: jsonData.activities.map((item, index) => item.calories_burned),
        backgroundColor: [
          '#00E396',
          '#FEB019',
          '#FF4560',
          '#775DD0',
          '#58CF6C',
          '#FF9824',
          '#7B43A1',
          'pink'
        ],
        borderColor: [
          '#00E396',
          '#FEB019',
          '#FF4560',
          '#775DD0',
          '#58CF6C',
          '#FF9824',
          '#7B43A1',
          'pink'],
        borderWidth: 1
      },
    ]
  };

  const chartOptions = {
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        suggestedMax: 40,
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: "#ffffff",
        }
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <div className=' mb--20 text--white'>
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  )
}
export default CaloriesChart;