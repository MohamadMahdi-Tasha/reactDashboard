// Codes By Mahdi Tasha
import MainLineChart from "./main-line-chart";
import MainSvgState from "./main-svg-state";
import MainDropdown from "./main-dropdown";

export default function MainMiddleComponents(props) {
    if (props.type === 'date-chart') {
        const date = new Date();
        const dayOfWeek = date.getDay();
        const dayOfMonth = date.getDate();
        const weekDaysName = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const dayOfWeekName = weekDaysName[dayOfWeek];
        const monthName = date.toLocaleString('default', {month: 'long'});
        const year = date.getFullYear();

        return (
            <div className='main-side__middle-comp'>
                <h6 className='main-side__middle-com-title'>
                    {dayOfWeekName} , {dayOfMonth} {monthName} {year}
                </h6>
                <MainLineChart data={[200, 250, 300, 250, 260, 300, 350]}/>
            </div>
        )

    } else {
        return (
            <div className='main-side__middle-comp'>
                <div className='main-side__middle-comp-top'>
                    <h6 className='main-side__middle-comp-top-title'>Your Finance Target</h6>
                    <MainDropdown iconType={'vertical'}>
                        <button tabIndex='-1'>opt1</button>
                        <button tabIndex='-1'>opt2</button>
                        <button tabIndex='-1'>opt3</button>
                    </MainDropdown>
                </div>
                <div className='main-side__middle-comp-svg-holder'><MainSvgState for={'Your Finance Target'} value={78}/></div>
                <div className='main-side__middle-comp-bottom-holder'>
                    <div className='main-side__middle-comp-bottom-item'>
                        <h6 className='main-side__middle-comp-bottom-title'>Result Achieved</h6>
                        <p className='main-side__middle-comp-bottom-subtitle'>Achieved well and smoothly</p>
                    </div>
                    <div className='main-side__middle-comp-bottom-item'>
                        <h6 className='main-side__middle-comp-bottom-title'>In The Process</h6>
                        <p className='main-side__middle-comp-bottom-subtitle'>Waiting in target process</p>
                    </div>
                </div>
            </div>
        );
    }
}