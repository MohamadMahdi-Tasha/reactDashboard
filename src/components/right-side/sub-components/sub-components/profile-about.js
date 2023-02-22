// Codes By Mahdi Tasha
export default function ProfileAbout(props) {
    const personProp = props.person;
    let profileToSelect;
    const profiles = {
        emmy: 'Organized activities to make money and sell goods and services for a profit',
        jonie: 'Organized activities to make money and sell goods and services for a profit',
        sarah: 'Organized activities to make money and sell goods and services for a profit',
        deckrad: 'Organized activities to make money and sell goods and services for a profit'
    }

    switch (personProp) {
        case "emmy": profileToSelect = profiles.emmy;break;
        case "jonie": profileToSelect = profiles.jonie;break;
        case "sarah": profileToSelect = profiles.sarah;break;
        case "deckrad": profileToSelect = profiles.deckrad;break;
    }

    return (
        <>
            <h6>About</h6>
            <p>{profileToSelect}</p>
        </>
    );
}