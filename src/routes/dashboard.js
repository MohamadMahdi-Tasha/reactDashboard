// Codes By Mahdi Tasha
import React, { useState } from "react";
import '../dist/style.css';
import LeftSideComponent from '../components/left-side/left-side.js';
import MainSideComponent from '../components/main-side/main-side.js';
import RightSideComponent from '../components/right-side/right-side.js';

export default function Dashboard() {
    const [isOpened, setOpenOrClose] = useState(true);

    return (
        <div className='dashboard'>
            <LeftSideComponent isOpened={isOpened} onCloseButtonClick={() => setOpenOrClose(false)}/>
            <MainSideComponent />
            <RightSideComponent />
        </div>
    );
}