// Codes By Mahdi Tasha
import ProfileButtons from './profile-btns';

export default function ProfileButtonsList() {
    return (
        <ul className='right-side__profile-btns-ul'>
            <ProfileButtons icon={'persons'}/>
            <ProfileButtons icon={'finance'}/>
            <ProfileButtons icon={'list'}/>
        </ul>
    );
}