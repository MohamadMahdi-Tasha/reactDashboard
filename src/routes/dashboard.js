// Codes By Mahdi Tasha
import LeftSideComponent from '../components/left-side.js';
import MainSideComponent from '../components/main-side.js';
import RightSideComponent from '../components/right-side.js';

export default function Dashboard() {
    return (
        <div>
            <LeftSideComponent />
            <MainSideComponent />
            <RightSideComponent />
        </div>
    );
}