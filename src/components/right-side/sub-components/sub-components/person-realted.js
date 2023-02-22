// Codes By Mahdi Tasha
import RelatedProfile from './related-profile';

export default function PersonRealted(props) {
    const nameProp = props.person;
    let profileToSelect;
    const relatedProfiles = {
        emmy: ['jonie', 'sarah', 'deckrad'],
        jonie: ['emmy', 'sarah', 'deckrad'],
        sarah: ['emmy', 'jonie', 'deckrad'],
        deckrad: ['emmy', 'jonie', 'sarah']
    }

    switch (nameProp) {
        case "emmy": profileToSelect = relatedProfiles.emmy;break;
        case "jonie": profileToSelect = relatedProfiles.jonie;break;
        case "sarah": profileToSelect = relatedProfiles.sarah;break;
        case "deckrad": profileToSelect = relatedProfiles.deckrad;break;
    }

    return (
        <ul>{profileToSelect.map(profile => <RelatedProfile name={profile} />)}</ul>
    );
}