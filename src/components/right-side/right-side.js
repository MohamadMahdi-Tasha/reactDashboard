// Codes By Mahdi Tasha
import ProfileCard from './sub-components/profile-card';
import SavedMoneyCard from './sub-components/saved-money-card';

export default function RightSideComponent() {
    return (
        <div className='right-side'>
             <ProfileCard name={'emmy'} />
             <SavedMoneyCard value={145000} />
        </div>
    );
}