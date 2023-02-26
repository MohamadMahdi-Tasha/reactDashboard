// Codes By Mahdi Tasha
export default function RelatedProfile(props) {
    return (
        <li className='right-side__related-li'>
            <div className='right-side__related-img-holder'><img className='right-side__related-img' src={props.img} alt={props.name} /></div>
            <div className='right-side__related-content'>
                <h6 className='right-side__related-name'>{props.name}</h6>
                <h6 className='right-side__related-role'>{props.role}</h6>
            </div>
        </li>
    );
}