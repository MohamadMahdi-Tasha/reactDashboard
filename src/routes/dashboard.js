// Codes By Mahdi Tasha
import LeftSideComponent from '../components/left-side/left-side.js';
import MainSideComponent from '../components/main-side/main-side.js';
import RightSideComponent from '../components/right-side/right-side.js';
import '../dist/style.css';

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <LeftSideComponent />
            <MainSideComponent />
            <RightSideComponent />
        </div>
    );
}