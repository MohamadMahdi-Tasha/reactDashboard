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
    } else if (props.title === 'Setting') {
        icon = <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.158 6.89478C9.32084 6.89478 10.2633 7.83719 10.2633 9.00004C10.2633 10.1629 9.32084 11.1053 8.158 11.1053C6.99515 11.1053 6.05273 10.1629 6.05273 9.00004C6.05273 7.83719 6.99515 6.89478 8.158 6.89478Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0362 5.00021C14.4606 3.9962 13.1863 3.65266 12.1903 4.23244C11.324 4.73569 10.2413 4.106 10.2413 3.09867C10.2413 1.93995 9.30811 1 8.1577 1C7.00729 1 6.07407 1.93995 6.07407 3.09867C6.07407 4.106 4.99138 4.73569 4.12589 4.23244C3.12909 3.65266 1.8548 3.9962 1.27918 5.00021C0.704388 6.00421 1.04546 7.2877 2.04227 7.86665C2.90776 8.37073 2.90776 9.62927 2.04227 10.1334C1.04546 10.7131 0.704388 11.9966 1.27918 12.9998C1.8548 14.0038 3.12909 14.3473 4.12506 13.7684H4.12589C4.99138 13.2643 6.07407 13.894 6.07407 14.9013C6.07407 16.06 7.00729 17 8.1577 17C9.30811 17 10.2413 16.06 10.2413 14.9013C10.2413 13.894 11.324 13.2643 12.1903 13.7684C13.1863 14.3473 14.4606 14.0038 15.0362 12.9998C15.6118 11.9966 15.2699 10.7131 14.274 10.1334H14.2731C13.4076 9.62927 13.4076 8.37073 14.274 7.86665C15.2699 7.2877 15.6118 6.00421 15.0362 5.00021Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    } else if (props.title === 'Logout') {
        icon = <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9991 8.67566H7.13623" stroke="#CD5656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6016 6.28711L16.9999 8.67562L14.6016 11.0641" stroke="#CD5656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5503 4.99724C12.28 2.06484 11.1824 1 6.81655 1C1.00008 1 1.00008 2.89213 1.00008 8.57673C1.00008 14.2613 1.00008 16.1535 6.81655 16.1535C11.1824 16.1535 12.28 15.0886 12.5503 12.1562" stroke="#CD5656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
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