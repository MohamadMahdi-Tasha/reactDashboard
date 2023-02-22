// Codes By Mahdi Tasha
import MainLineChart from "./main-line-chart";
import MainSvgState from "./main-svg-state";
import MainDropdown from "./main-dropdown";

export default function MainMiddleComponents(props) {
    if (props.type === 'date-chart') {
        const date = new Date();
        const dayOfWeek = date.getDay();
        const dayOfMonth = date.getDate();
        const weekDaysName = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const dayOfWeekName = weekDaysName[dayOfWeek - 1];
        const monthName = date.toLocaleString('default', {month: 'long'});
        const year = date.getFullYear();

        return (
            <div>
                <h6>{dayOfWeekName}, {dayOfMonth} {monthName} {year}</h6>
                <MainLineChart data={[200, 250, 300, 250, 260, 300, 350]}/>
            </div>
        )

    } else {
        return (
            <div>
                <div>
                    <h6>Your Finance Target</h6>
                    <MainDropdown iconType={'vertical'}>
                        <button>opt1</button>
                        <button>opt2</button>
                        <button>opt3</button>
                    </MainDropdown>
                </div>
                <MainSvgState for={'Your Finance Target'} value={78}/>
                <div>
                    <div>
                        <h6><span></span>Result Achieved</h6>
                        <p>Achieved well and smoothly</p>
                    </div>
                    <div>
                        <h6><span></span>In The Process</h6>
                        <p>Waiting in target process</p>
                    </div>
                </div>
            </div>
        );
    }
}