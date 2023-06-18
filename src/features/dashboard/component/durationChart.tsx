import { Line , Bar} from 'react-chartjs-2';
import 'chart.js/auto';
import jsonData from './josnData';

const DurationChart = () => {
    const chartData  = {
        labels : jsonData.activities.map((item, index)=> item.name),
        datasets:[
            {
                label:'Duration',
                data:jsonData.activities.map((item, index) => item.duration),
                // backgroundColor: 'rgba(0,0,0,0)',
                backgroundColor: "green",
      borderColor: 'transparent',
      borderWidth: 2.5,
      barPercentage: 0.8,
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
          <Bar data={chartData} options={chartOptions} />
        </div>
      )
}
export default DurationChart;