// Codes By Mahdi Tasha
import {useState} from "react";

export default function ThemeToggler() {
    const [theme, setTheme] = useState('dark')
    const [title, setTitle] = useState('Light Mode Toggler')

    function handleClick() {
        if (theme === 'dark') {
            setTheme('light');
            setTitle('Dark Mode Toggler');
        } else {
            setTheme('dark');
            setTitle('Light Mode Toggler');
        }
    }

    return (
        <li className='left-side__top-item-btn'>
            <button className={`left-side__top-theme-btn left-side__top-theme-btn--theme-${theme}`} onClick={handleClick}>
                <svg className='left-side__top-theme-icon' width="17" height="17" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8182 0H5.18182C2.32318 0 0 2.24167 0 5C0 7.75833 2.32318 10 5.18182 10H13.8182C16.6768 10 19 7.75833 19 5C19 2.24167 16.6768 0 13.8182 0ZM13.8182 8.33333H5.18182C3.27318 8.33333 1.72727 6.84167 1.72727 5C1.72727 3.15833 3.27318 1.66667 5.18182 1.66667H13.8182C15.7268 1.66667 17.2727 3.15833 17.2727 5C17.2727 6.84167 15.7268 8.33333 13.8182 8.33333ZM5.18182 2.5C3.74818 2.5 2.59091 3.61667 2.59091 5C2.59091 6.38333 3.74818 7.5 5.18182 7.5C6.61545 7.5 7.77273 6.38333 7.77273 5C7.77273 3.61667 6.61545 2.5 5.18182 2.5Z" fill={(theme === 'dark') ? '#919191' : 'white'}/></svg>
                {title}
            </button>
        </li>
    );
}