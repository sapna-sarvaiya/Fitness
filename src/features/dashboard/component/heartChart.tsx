import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import jsonData from './josnData';

const HeartRateChart = () => {
    const chartData  = {
        labels : jsonData.activities.map((item, index)=> item.name),
        datasets:[
            {
                label:'heart rate (Max)',
                data:jsonData.activities.map((item, index) => item.heart_rate.max),
                // backgroundColor: 'rgba(0,0,0,0)',
                backgroundColor: "red",
      borderColor: 'red',
      borderWidth: 2.5,
      // barPercentage: 0.8,
            },
            {
                label:'heart rate (avarage)',
                data:jsonData.activities.map((item, index) => item.heart_rate.average),
                // backgroundColor: 'rgba(0,0,0,0)',
                backgroundColor: "blue",
      borderColor: 'blue',
      borderWidth: 2.5,
      // barPercentage: 0.8,
            }
        ]
    };

    const chartOptions = {
        scales: {
          y: {
            display: false,
            beginAtZero: true,
            suggestedMax: 40,
          },
          x: {
            ticks: {
              color: '#ffffff',
            }
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
          <Line data={chartData} options={chartOptions} />
        </div>
      )
}
export default HeartRateChart;