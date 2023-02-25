// Codes By Mahdi Tasha
import MainMiddleComponents from './main-middle-components';

export default function MainMiddleComponent() {
    return (
        <div className='main-side__middle'>
            <MainMiddleComponents type={'date-chart'}/>
            <MainMiddleComponents type={'finance-chart'}/>
        </div>
    );
}