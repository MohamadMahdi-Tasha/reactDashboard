// Codes By Mahdi Tasha
import ProfileCard from './sub-components/profile-card';
import SavedMoneyCard from './sub-components/saved-money-card';

export default function RightSideComponent() {
    return (
        <div>
             <ProfileCard name={'emmy'} />
             <SavedMoneyCard value={145000} />
        </div>
    );
}