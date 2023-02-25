// Codes By Mahdi Tasha
import React from 'react';
import MainTopComponent from "./sub-components/main-top-component";
import MainMiddleComponent from "./sub-components/main-middle-component";
import MainBottomComponent from "./sub-components/main-bottom-component";

export default function BottomSideComponent() {
    return (
        <div className={'main-side__bottom'}>
            <MainTopComponent />
            <MainMiddleComponent />
            <MainBottomComponent />
        </div>
    );
}