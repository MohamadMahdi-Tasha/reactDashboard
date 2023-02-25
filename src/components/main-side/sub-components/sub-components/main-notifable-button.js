// Codes By Mahdi Tasha

export default function MainNotifableButton(props) {
    let icon;

    (props.type === "massage")
        ? icon = <svg width="28" height="28" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2023 9.02527C21.2023 9.02527 16.9223 14.1621 13.7918 14.1621C10.6626 14.1621 6.33447 9.02527 6.33447 9.02527" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1.07861 12.9583C1.07861 3.84087 4.25322 0.802612 13.777 0.802612C23.3008 0.802612 26.4754 3.84087 26.4754 12.9583C26.4754 22.0745 23.3008 25.1141 13.777 25.1141C4.25322 25.1141 1.07861 22.0745 1.07861 12.9583Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        : icon = <svg width="28" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.8041 1.35229C4.89172 1.35229 2.32283 6.70595 2.32283 10.245C2.32283 12.8901 2.70632 12.1117 1.24219 15.3383C-0.545743 19.9364 6.6441 21.8158 10.8041 21.8158C14.9628 21.8158 22.1527 19.9364 20.366 15.3383C18.9019 12.1117 19.2854 12.8901 19.2854 10.245C19.2854 6.70595 16.7152 1.35229 10.8041 1.35229Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.8836 25.3496C12.1579 27.2772 9.46586 27.3001 7.72363 25.3496" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>

    return (
        <a href="#" className='main-side__top-btn-link'>
            <button className='main-side__top-btn' tabIndex={'-1'}>
                <span className='main-side__top-btn-inner-span'>
                    {(props.notificationsCount !== 0) ? <span className='main-side__top-btn-notif-count'>{props.notificationsCount}</span> : false}
                    {icon}
                </span>
            </button>
        </a>
    );
}