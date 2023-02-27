// Codes By Mahdi Tasha
import React from 'react';
import TopSideComponent from './sub-components/top-side'
import BottomSideComponent from './sub-components/bottom-side';

export default function LeftSideComponent(props) {
    return (
        <div className='left-side' data-opened={props.isOpened}>
            <TopSideComponent onCloseButtonClick={props.onCloseButtonClick}/>
            <BottomSideComponent />
        </div>
    );
}