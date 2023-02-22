// Codes By Mahdi Tasha
import MainLineChart from "./main-line-chart";
import MainSvgState from "./main-svg-state";

export default function MainMiddleComponent() {
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
                <h6>{dayOfWeekName}, {dayOfMonth} {monthName} {year}</h6>
                <MainLineChart data={[200, 250, 300, 250, 260, 300, 350]}/>
            </div>
            <div>
                <div>
                    <h6>Your Finance Target</h6>
                    <button>
                        <svg width="5" height="18" viewBox="0 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-3.95277e-07 8.99997C-3.77904e-07 9.39554 0.117857 9.78222 0.338666 10.1111C0.559476 10.44 0.873322 10.6964 1.24052 10.8477C1.60771 10.9991 2.01176 11.0387 2.40157 10.9616C2.79138 10.8844 3.14944 10.6939 3.43048 10.4142C3.71152 10.1345 3.90291 9.77812 3.98044 9.39016C4.05798 9.00219 4.01819 8.60006 3.86609 8.23461C3.71399 7.86915 3.45643 7.55679 3.12596 7.33703C2.7955 7.11727 2.40697 6.99997 2.00953 6.99997C1.47657 6.99997 0.965437 7.21068 0.588577 7.58576C0.211717 7.96083 -4.18573e-07 8.46954 -3.95277e-07 8.99997ZM-8.78393e-08 16C-7.04663e-08 16.3956 0.117857 16.7822 0.338667 17.1111C0.559476 17.44 0.873322 17.6964 1.24052 17.8478C1.60771 17.9991 2.01176 18.0387 2.40157 17.9616C2.79138 17.8844 3.14944 17.6939 3.43048 17.4142C3.71152 17.1345 3.90291 16.7781 3.98044 16.3902C4.05798 16.0022 4.01819 15.6001 3.86609 15.2346C3.71399 14.8692 3.45643 14.5568 3.12596 14.337C2.7955 14.1173 2.40698 14 2.00953 14C1.47657 14 0.965437 14.2107 0.588577 14.5858C0.211718 14.9608 -1.11136e-07 15.4696 -8.78393e-08 16ZM-7.02714e-07 1.99996C-6.85341e-07 2.39552 0.117856 2.7822 0.338666 3.1111C0.559476 3.44 0.873321 3.69634 1.24051 3.84772C1.60771 3.99909 2.01176 4.0387 2.40157 3.96153C2.79138 3.88436 3.14944 3.69388 3.43048 3.41417C3.71152 3.13447 3.90291 2.7781 3.98044 2.39014C4.05798 2.00217 4.01819 1.60004 3.86609 1.23459C3.71399 0.869133 3.45643 0.556776 3.12596 0.337013C2.7955 0.117248 2.40697 -4.96958e-05 2.00953 -4.96785e-05C1.47657 -4.96553e-05 0.965436 0.210665 0.588577 0.585739C0.211717 0.960814 -7.26011e-07 1.46952 -7.02714e-07 1.99996Z" fill="white"/>
                        </svg>
                    </button>
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
        </div>
    );
}