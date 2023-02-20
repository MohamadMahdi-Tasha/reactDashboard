// Codes By Mahdi Tasha
import LeftListItem from "./sub-components/left-list-item";
import ThemeToggler from "./sub-components/left-theme-toggler";

export default function TopSideComponent() {
    return (
        <div>
            <ul>
                <LeftListItem title={'Dashboard'} />
                <LeftListItem title={'Documents'} />
                <LeftListItem title={'Payments'} />
                <LeftListItem title={'Calendar'} />
                <LeftListItem title={'Profile'} />
            </ul>
            <hr/>
            <ul>
                <ThemeToggler />
                <LeftListItem title={'Setting'} />
                <LeftListItem title={'Logout'} />
            </ul>
        </div>
    );
}