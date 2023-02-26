// Codes By Mahdi Tasha
import Profile from "./sub-components/profile";
import ProfileAbout from "./sub-components/profile-about";
import PersonRelated from "./sub-components/person-realted";
import ProfileButtonsList from './sub-components/profile-buttons-list';

export default function ProfileCard() {
    return (
        <div className='right-side__profile-card'>
            <Profile/>
            <ProfileButtonsList />
            <hr className='right-side__hr'/>
            <ProfileAbout/>
            <PersonRelated/>
        </div>
    );
}