// Codes By Mahdi Tasha
import MainCircleStateComponent from "./sub-components/main-circle-state-component";
import React from 'react';
import MainLineChart from "./sub-components/main-line-chart";

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
                    <MainLineChart data={[200, 250, 300, 250, 260, 300, 350]}/>
                </div>
            </div>
        </div>
    );
}