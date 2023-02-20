// Codes By Mahdi Tasha
import LeftSideComponent from '../components/left-side/left-side.js';
import MainSideComponent from '../components/main-side/main-side.js';
import RightSideComponent from '../components/right-side/right-side.js';

export default function Dashboard() {
    return (
        <div>
            <LeftSideComponent />
            <MainSideComponent />
            <RightSideComponent />
        </div>
    );
}