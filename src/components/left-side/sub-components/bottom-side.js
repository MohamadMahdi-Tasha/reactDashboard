// Codes By Mahdi Tasha
import BottomImage from './../../../assets/img/dashboard/left-side/img-bottom.png';

export default function BottomSideComponent() {
    return (
        <a className='left-side__bottom' href={'#'}>
            <img src={BottomImage} alt="Upgrade To Pro"/>
            <span>Upgrade to Pro</span>
            <span>Check your magic on this Pro Dashboard</span>
        </a>
    );
}