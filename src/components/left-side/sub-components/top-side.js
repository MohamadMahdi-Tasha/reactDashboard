// Codes By Mahdi Tasha
import LeftListItem from "./sub-components/left-list-item";

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
        </div>
    );
}