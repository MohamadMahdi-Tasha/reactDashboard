// Codes By Mahdi Tasha
import MainSearchComponent from "./sub-components/main-search-component";
import MainNotifableButton from "./sub-components/main-notifable-button";

export default function TopSideComponent() {
    return (
        <div>
            <MainSearchComponent />
            <MainNotifableButton type={'massage'} notificationsCount={2}/>
            <MainNotifableButton type={'notifications'} notificationsCount={4}/>
        </div>
    );
}