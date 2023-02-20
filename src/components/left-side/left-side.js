// Codes By Mahdi Tasha
import TopSideComponent from './top-side'
import BottomSideComponent from './bottom-side';

export default function LeftSideComponent() {
    return (
        <div>
            <TopSideComponent />
            <BottomSideComponent />
        </div>
    );
}