// Codes By Mahdi Tasha
import MainCircleStateComponent from "./main-circle-state-component";

export default function MainTopComponent() {
    return (
        <div>
            <MainCircleStateComponent title={'Total Finance'} svgValue='75' value={9900}/>
            <MainCircleStateComponent title={'Total Expense'} svgValue='80' value={8240}/>
        </div>
    );
}