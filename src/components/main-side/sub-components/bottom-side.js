// Codes By Mahdi Tasha
import MainCircleStateComponent from "./sub-components/main-circle-state-component";
import React from 'react';
import {Chart as ChartJS,LineElement} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement);

const options = {
    responsive: true,
    scales: {
        x: {grid: {display: false,},},
        y: {grid: {display: false,},},
    }
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            borderColor: 'white',
            data: [200,250,270,300,250,300,350],
            backgroundColor: 'white',
        }
    ],
};

export default function BottomSideComponent() {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    const weekDaysName = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const dayOfWeekName = weekDaysName[dayOfWeek - 1];
    const monthName = date.toLocaleString('default', {month: 'long'});
    const year = date.getFullYear();

    return (
        <div>
            <div>
                <MainCircleStateComponent title={'Total Finance'} svgValue='75' value={9900}/>
                <MainCircleStateComponent title={'Total Expense'} svgValue='80' value={8240}/>
            </div>
            <div>
                <div>
                    <h6>{dayOfWeekName}, {dayOfMonth} {monthName} {year}</h6>
                    <Line options={options} data={data} />
                </div>
            </div>
        </div>
    );
}