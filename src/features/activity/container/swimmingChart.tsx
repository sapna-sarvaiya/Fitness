import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import jsonData from '../../dashboard/component/josnData';

const SwimmmingChart = () => {
    const chartData = {
        labels: jsonData.activities[2].dailyActivity?.map((item, index) => item.name),
        datasets: [
            {
                label: 'duration',
                data: jsonData.activities[3].dailyActivity?.map((item, index) => item.duration),
                backgroundColor: "gray",
                borderColor: 'gray',
                borderWidth: 2.5,
                barPercentage: 2.8,
            },
            {
                label: 'distance',
                data: jsonData.activities[3].dailyActivity?.map((item, index) => item.distance),
                backgroundColor: "blue",
                borderColor: 'blue',
                borderWidth: 2.5,
                barPercentage: 2.8,
            },
            {
                label: 'Calories Burn',
                data: jsonData.activities[3].dailyActivity?.map((item, index) => item.calories_burned),
                backgroundColor: "white",
                borderColor: 'white',
                borderWidth: 2.5,
                barPercentage: 0.8,
            }
        ]
    };
    const BarChart = {
        labels: jsonData.activities[0].dailyActivity?.map((item, index) => item.name),
        datasets: [
            {
                label: 'Heart Rate (max)',
                data: jsonData.activities[0].dailyActivity?.map((item, index) => item.heart_rate.max),
                backgroundColor: "blue",
                borderColor: 'blue',
                borderWidth: 2.5,
                barPercentage: 0.8,
            },
            {
                label: 'Heart Rate (avg)',
                data: jsonData.activities[0].dailyActivity?.map((item, index) => item.heart_rate.average),
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
        <div className='chart-section mb--20 text--white d-flex row'>
            <div className='col-6 pl--10 chart-wrapper swimming-chart'>
                <Bar data={chartData} options={chartOptions} />
            </div>
            <div className='col-6 pl--15 chart-wrapper swimming-chart'>
                <Line data={BarChart} options={chartOptions} />
            </div>
        </div>
    )
}
export default SwimmmingChart;