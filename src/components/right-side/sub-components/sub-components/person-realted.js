// Codes By Mahdi Tasha
import RelatedProfile from './related-profile';
import jonieImg from '../../../../assets/img/dashboard/right-side/img-jonie-profile.png';
import sarahImg from '../../../../assets/img/dashboard/right-side/img-sarah-profile.png';
import deckradImg from '../../../../assets/img/dashboard/right-side/img-deckrad-profile.png';

export default function PersonRealted() {
    return (
        <ul>
            <RelatedProfile img={jonieImg} role={'Project Manager'} name={'Jonie Juger'} />
            <RelatedProfile img={sarahImg} role={'Graphic Designer'} name={'Sarah Hosten'} />
            <RelatedProfile img={deckradImg} role={'Financial Treasurer'} name={'Deckrad Anne'} />
        </ul>
    );
}