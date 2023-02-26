// Codes By Mahdi Tasha
import Profile from "./sub-components/profile";
import ProfileAbout from "./sub-components/profile-about";
import PersonRelated from "./sub-components/person-realted";

export default function ProfileCard(props) {
    return (
        <div className='right-side__profile-card'>
            <Profile/>
            <ul>
                <li>
                    <a href="#">
                        <button>
                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9726 17.8682C7.73355 17.8682 4.96655 17.3782 4.96655 15.4162C4.96655 13.4542 7.71555 11.7462 10.9726 11.7462C14.2116 11.7462 16.9786 13.4382 16.9786 15.3992C16.9786 17.3602 14.2296 17.8682 10.9726 17.8682Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9726 8.94875C13.0986 8.94875 14.8226 7.22575 14.8226 5.09976C14.8226 2.97376 13.0986 1.24976 10.9726 1.24976C8.84659 1.24976 7.12257 2.97376 7.12257 5.09976C7.11659 7.21775 8.82659 8.94175 10.9456 8.94875H10.9726Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.3623 7.89166C18.5993 7.56066 19.5113 6.43266 19.5113 5.08966C19.5113 3.68866 18.5183 2.51866 17.1963 2.24866" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.9434 11.0444C19.6974 11.0444 21.1954 12.2334 21.1954 13.2954C21.1954 13.9204 20.6784 14.6014 19.8944 14.7854" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.58384 7.89166C3.34584 7.56066 2.43384 6.43266 2.43384 5.08966C2.43384 3.68866 3.42784 2.51866 4.74884 2.24866" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.00176 11.0444C2.24776 11.0444 0.749756 12.2334 0.749756 13.2954C0.749756 13.9204 1.26676 14.6014 2.05176 14.7854" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <button>
                            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.01294 13.4923L9.07019 9.68532L12.5575 12.3088L15.5494 8.60852" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0365 1.25208C20.1213 1.25208 20.9998 2.09393 20.9998 3.13353C20.9998 4.17215 20.1213 5.01499 19.0365 5.01499C17.9517 5.01499 17.0732 4.17215 17.0732 3.13353C17.0732 2.09393 17.9517 1.25208 19.0365 1.25208Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.1484 8.02507C20.2843 8.90119 20.3466 9.88792 20.3466 10.9951C20.3466 17.7867 17.985 20.0499 10.898 20.0499C3.81212 20.0499 1.44946 17.7867 1.44946 10.9951C1.44946 4.2044 3.81212 1.94019 10.898 1.94019C12.0319 1.94019 13.0441 1.99794 13.9451 2.12324" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <button>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7443 14.1964H6.83252" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7443 10.4366H6.83252" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.85174 6.67737H6.83276" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.61011 10.5001C1.61011 17.4371 3.90913 19.7501 10.8051 19.7501C17.7022 19.7501 20.0001 17.4371 20.0001 10.5001C20.0001 3.56312 17.7022 1.25012 10.8051 1.25012C3.90913 1.25012 1.61011 3.56312 1.61011 10.5001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </a>
                </li>
            </ul>
            <hr/>
            <ProfileAbout/>
            <PersonRelated/>
        </div>
    );
}