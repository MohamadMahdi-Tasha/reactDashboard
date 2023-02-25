// Codes By Mahdi Tasha
import BottomImage from './../../../assets/img/dashboard/left-side/img-bottom.png';

export default function BottomSideComponent() {
    return (
        <a className='left-side__bottom' href={'#'}>
            <img className='left-side__bottom-img' src={BottomImage} alt="Upgrade To Pro"/>
            <span className='left-side__bottom-title'>Upgrade to Pro</span>
            <span className='left-side__bottom-subtitle'>Check your magic on this Pro Dashboard</span>
        </a>
    );
}