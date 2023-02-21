// Codes By Mahdi Tasha
import MainCircleStateComponent from "./sub-components/main-circle-state-component";

export default function BottomSideComponent() {
    return (
        <div>
            <div>
                <MainCircleStateComponent title={'Total Finance'} svgValue='75' value={9900}/>
                <MainCircleStateComponent title={'Total Expense'} svgValue='80' value={8240}/>
            </div>
        </div>
    );
}