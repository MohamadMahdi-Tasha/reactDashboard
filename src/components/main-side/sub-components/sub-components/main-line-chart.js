// Codes By Mahdi Tasha
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip} from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function MainLineChart(props) {
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const options = {
        responsive: false,
        scales: {
            x: {grid: {display: false}, ticks: {color: 'rgba(255, 255, 255, 0.45)',}},
            y: {grid: {display: false}, ticks: {color: 'rgba(255, 255, 255, 0.45)',}}
        }
    };

    const data = {
        labels,
        datasets: [{data: props.data, borderColor: 'white', backgroundColor: 'white', tension: .3, hoverBackgroundColor: '#4C3F91',}],
    };

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

    return (
        <Line options={options} data={data} />
    );
}