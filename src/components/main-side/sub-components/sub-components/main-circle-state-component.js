// Codes By Mahdi Tasha
import MainSvgState from "./main-svg-state";

export default function MainCircleStateComponent(props) {
    return (
        <div className='main-side__circle-state-component'>
            <div className='main-side__circle-state-component-inner-div'>
                <h6 className='main-side__circle-state-component-title'>{props.title}</h6>
                <h6 className='main-side__circle-state-component-subtitle'>{props.value.toLocaleString()}K</h6>
            </div>
            <MainSvgState for={props.title} value={props.svgValue}/>
        </div>
    );
}
