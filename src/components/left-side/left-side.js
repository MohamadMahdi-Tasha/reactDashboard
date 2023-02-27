// Codes By Mahdi Tasha
import React, { useState} from 'react';
import TopSideComponent from './sub-components/top-side'
import BottomSideComponent from './sub-components/bottom-side';

export default function LeftSideComponent() {
    const [isOpened, setOpenOrClose] = useState(true);

    return (
        <div className='left-side' data-opened={isOpened}>
            <TopSideComponent onCloseButtonClick={() => setOpenOrClose(false)}/>
            <BottomSideComponent />
        </div>
    );
}