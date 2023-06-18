import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import jsonData from './josnData';

const NavBarChart = () => {
    const chartData  = {
        // labels : Object.values(jsonData.user).map((item)=> console.log('item', item))
        datasets:[
            {
                label:'height',
                data:jsonData.user.height,
                // backgroundColor: 'rgba(0,0,0,0)',
                backgroundColor: "red",
      borderColor: 'red',
      borderWidth: 2.5,
      barPercentage: 0.8,
            },
            {
                label:'weight',
                data:jsonData.user.weight,
                // backgroundColor: 'rgba(0,0,0,0)',
                backgroundColor: "blue",
      borderColor: 'blue',
      borderWidth: 2.5,
    //   barPercentage: 0.8,
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
export default NavBarChart;