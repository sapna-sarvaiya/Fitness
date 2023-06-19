import { Bar,Line } from 'react-chartjs-2';
import 'chart.js/auto';
import jsonData from '../../dashboard/component/josnData';

const CyclingChart = () => {
    const chartData  = {
        labels : jsonData.activities[0].dailyActivity?.map((item, index)=> item.name),
        datasets:[
            {
                label:'duration',
                data:jsonData.activities[1].dailyActivity?.map((item, index)=> item.duration),
                // backgroundColor: 'rgba(0,0,0,0)',
                backgroundColor: "gray",
      borderColor: 'gray',
      borderWidth: 2.5,
      barPercentage: 0.8,
            },
            {
                label:'distance',
                data:jsonData.activities[1].dailyActivity?.map((item, index)=> item.distance),
                // backgroundColor: 'rgba(0,0,0,0)',
                backgroundColor: "blue",
      borderColor: 'blue',
      borderWidth: 2.5,
      barPercentage: 0.8,
            },
            {
                label:'calory',
                data:jsonData.activities[1].dailyActivity?.map((item, index)=> item.calories_burned),
                // backgroundColor: 'rgba(0,0,0,0)',
                backgroundColor: "white",
      borderColor: 'white',
      borderWidth: 2.5,
      barPercentage: 0.8,
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
        <div className=' mb--20 text--white d-flex row'>
            <div className='col-6'>
          <Bar data={chartData} options={chartOptions} />
            </div>
            <div className='col-6'>
          <Line data={chartData} options={chartOptions}/>
          </div>
        </div>
      )
}
export default CyclingChart;