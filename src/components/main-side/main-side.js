// Codes By Mahdi Tasha
import TopSideComponent from './sub-components/top-side';
import BottomSideComponent from "./sub-components/bottom-side";

export default function MainSideComponent() {
    return (
        <div className='main-side'>
            <TopSideComponent />
            <BottomSideComponent />
        </div>
    );
}