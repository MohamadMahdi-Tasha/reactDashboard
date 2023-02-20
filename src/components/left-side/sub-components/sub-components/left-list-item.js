// Codes By Mahdi Tasha
export default function LeftListItem(props) {
    let icon;

    if (props.title === 'Dashboard') {
        icon = <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.78475C1 5.5615 1.4605 5.85625 3.93925 3.5575C5.02375 2.6845 6.71125 1 8.1685 1C9.625 1 11.3463 2.67625 12.4405 3.5575C14.9193 5.85625 15.379 5.5615 15.379 9.78475C15.379 16 13.9098 16 8.1895 16C2.46925 16 1 16 1 9.78475Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>;
    } else if (props.title === 'Documents') {
        icon = <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7131 11.3296H5.25977" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.7131 8.32971H5.25977" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.72223 5.33032H5.25977" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8.38038C1 13.9153 2.87522 15.7608 8.5 15.7608C14.1257 15.7608 16 13.9153 16 8.38038C16 2.8455 14.1257 1 8.5 1C2.87522 1 1 2.8455 1 8.38038Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    } else if (props.title === 'Payments') {
        icon = <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="17.5476" height="13.5" rx="3.25" stroke="white" stroke-width="1.5"/><line x1="4.37793" y1="5.91663" x2="11.0412" y2="5.91663" stroke="white" stroke-width="1.5" stroke-linecap="round"/><line x1="14.3555" y1="5.91663" x2="14.8963" y2="5.91663" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>;
    } else if (props.title === 'Calendar') {
        icon = <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.4504C1 3.8253 2.8753 1.95081 8.4996 1.95081C14.1247 1.95081 16 3.8253 16 9.4504C16 15.0755 14.1247 16.95 8.4996 16.95C2.8753 16.95 1 15.0755 1 9.4504Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.22266 6.65918H15.7852" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.0615 9.8429H12.0694" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.50391 9.8429H8.51179" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.93945 9.8429H4.94734" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.0615 12.9579H12.0694" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.50391 12.9579H8.51179" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.93945 12.9579H4.94734" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.7417 0.776978V3.41486" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.26562 0.776978V3.41486" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>;
    } else if (props.title === 'Profile') {
        icon = <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 16.478C3.76371 16.478 1 16.0164 1 14.1676C1 12.3188 3.74618 10.6121 7 10.6121C10.2363 10.6121 13 12.3022 13 14.1511C13 15.9991 10.2538 16.478 7 16.478Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.99344 8.05014C9.11722 8.05014 10.8386 6.47224 10.8386 4.52544C10.8386 2.57863 9.11722 1 6.99344 1C4.86965 1 3.14748 2.57863 3.14748 4.52544C3.14033 6.46567 4.84972 8.04357 6.96634 8.05014C6.9759 8.05014 6.98467 8.05014 6.99344 8.05014Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>;
    }

    return (
        <li>
            <a href="#">
                {icon}
                {props.title}
            </a>
        </li>
    );
}