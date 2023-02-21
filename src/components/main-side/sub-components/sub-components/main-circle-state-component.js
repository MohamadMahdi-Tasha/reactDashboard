// Codes By Mahdi Tasha
import MainSvgState from "./main-svg-state";

export default function MainCircleStateComponent(props) {
    return (
        <div>
            <div>
                <h6>{props.title}</h6>
                <h6>{props.value.toLocaleString()}K</h6>
            </div>
            <MainSvgState for={props.title} value={props.svgValue}/>
        </div>
    );
}
