// Codes By Mahdi Tasha
import MainSearchComponent from "./sub-components/main-search-component";
import MainNotifableButton from "./sub-components/main-notifable-button";

export default function TopSideComponent(props) {
    return (
        <div className='main-side__top'>
            <MainSearchComponent />
            <div className='main-side__top-notif-btns-holder'>
                <MainNotifableButton type={'massage'} notificationsCount={2}/>
                <MainNotifableButton type={'notifications'} notificationsCount={4}/>
            </div>
            <button className='main-side__top-left-side-toggler' onClick={props.onOpenLeftSideButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
        </div>
    );
}