// Codes By Mahdi Tasha
export default function Profile(props) {
    const rightSideImagesPath = '../../../../assets/img/dashboard/right-side/';
    const nameProp = props.name;
    let profileToSelect;
    const profiles = {
        emmy: {
            name: 'Emmy Dansom',
            img: rightSideImagesPath.concat('img-emmy-profile.png'),
            role: 'CEO'
        },
        jonie: {
            name: 'Jonie Juger',
            img: rightSideImagesPath.concat('img-jonie-profile.png'),
            role: 'Project Manager'
        },
        sarah: {
            name: 'Sarah Hosten',
            img: rightSideImagesPath.concat('img-sarah-profile.png'),
            role: 'Graphic Designer'
        },
        deckrad: {
            name: 'Deckrad Anne',
            img: rightSideImagesPath.concat('img-deckrad-profile.png'),
            role: 'Financial Treasurer'
        }
    }

    switch (nameProp) {
        case "emmy": profileToSelect = profiles.emmy;break;
        case "jonie": profileToSelect = profiles.jonie;break;
        case "sarah": profileToSelect = profiles.sarah;break;
        case "deckrad": profileToSelect = profiles.deckrad;break;
    }

    return (
        <div>
            <img src={profileToSelect.img} alt={profileToSelect.name}/>
            <h6>{profileToSelect.name}</h6>
            <h6>{profileToSelect.role}</h6>
        </div>
    );
}