// Codes By Mahdi Tasha
import LeftListItem from "./sub-components/left-list-item";
import ThemeToggler from "./sub-components/left-theme-toggler";

export default function TopSideComponent() {
    return (
        <div className='left-side__top'>
            <ul className={'left-side__top-ul-1'}>
                <LeftListItem title={'Dashboard'} active/>
                <LeftListItem title={'Documents'} />
                <LeftListItem title={'Payments'} />
                <LeftListItem title={'Calendar'} />
                <LeftListItem title={'Profile'} />
            </ul>
            <hr className={'left-side__top-divider'}/>
            <ul className={'left-side__top-ul-2'}>
                <ThemeToggler />
                <LeftListItem title={'Setting'} />
                <LeftListItem title={'Logout'} />
            </ul>
        </div>
    );
}