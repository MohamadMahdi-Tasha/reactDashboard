// Codes By Mahdi Tasha
import React, { useState, useEffect } from 'react';
import LeftListItem from "./sub-components/left-list-item";
import ThemeToggler from "./sub-components/left-theme-toggler";

export default function TopSideComponent() {
    const [isOpened, setOpenOrClose] = useState(true);
    const handleCloseBtn = () => setOpenOrClose(false);

    return (
        <div className='left-side__top'>
            <button className='left-side__mobile-close-btn' onClick={handleCloseBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                     viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            <ul className={'left-side__top-ul-one'}>
                <LeftListItem title={'Dashboard'} active/>
                <LeftListItem title={'Documents'} />
                <LeftListItem title={'Payments'} />
                <LeftListItem title={'Calendar'} />
                <LeftListItem title={'Profile'} />
            </ul>
            <hr className={'left-side__top-divider'}/>
            <ul className={'left-side__top-ul-two'}>
                <ThemeToggler />
                <LeftListItem title={'Setting'} />
                <LeftListItem title={'Logout'} />
            </ul>
        </div>
    );
}