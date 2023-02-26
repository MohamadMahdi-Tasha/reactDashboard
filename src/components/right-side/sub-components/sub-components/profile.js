// Codes By Mahdi Tasha
import profileImage from '../../../../assets/img/dashboard/right-side/img-emmy-profile.png';

export default function Profile(props) {
    return (
        <div className='right-side__profile'>
            <div className='right-side__profile-img-holder'>
                <img className='right-side__profile-img' src={profileImage} alt='Emmy Dansom'/>
            </div>
            <h6 className='right-side__profile-name'>Emmy Dansom</h6>
            <h6 className='right-side__profile-role'>CEO</h6>
        </div>
    );
}