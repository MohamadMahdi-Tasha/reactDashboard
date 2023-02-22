// Codes By Mahdi Tasha
export default function RelatedProfile(props) {
    const rightSideImagesPath = '../../../../assets/img/dashboard/right-side/';
    const nameProp = props.name;
    let profileToSelect;
    const profiles = {
        emmy: {
            name: 'Emmy Dansom',
            img: rightSideImagesPath.concat('img-emmy-profile.png'),
            role: 'CEO',
            isOnline: false
        },
        jonie: {
            name: 'Jonie Juger',
            img: rightSideImagesPath.concat('img-jonie-profile.png'),
            role: 'Project Manager',
            isOnline: false
        },
        sarah: {
            name: 'Sarah Hosten',
            img: rightSideImagesPath.concat('img-sarah-profile.png'),
            role: 'Graphic Designer',
            isOnline: true
        },
        deckrad: {
            name: 'Deckrad Anne',
            img: rightSideImagesPath.concat('img-deckrad-profile.png'),
            role: 'Financial Treasurer',
            isOnline: false
        }
    }

    switch (nameProp) {
        case "emmy": profileToSelect = profiles.emmy;break;
        case "jonie": profileToSelect = profiles.jonie;break;
        case "sarah": profileToSelect = profiles.sarah;break;
        case "deckrad": profileToSelect = profiles.deckrad;break;
    }

    return (
        <li>
            <div>
                <img src={profileToSelect.img} alt={profileToSelect.name} />
            </div>
            <div>
                <h6>{profileToSelect.name}</h6>
                <h6>{profileToSelect.role}</h6>
            </div>
        </li>
    );
}