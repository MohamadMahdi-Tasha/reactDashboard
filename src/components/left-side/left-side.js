// Codes By Mahdi Tasha
import TopSideComponent from './sub-components/top-side'
import BottomSideComponent from './sub-components/bottom-side';

export default function LeftSideComponent() {
    return (
        <div className='left-side'>
            <TopSideComponent />
            <BottomSideComponent />
        </div>
    );
}