// Codes By Mahdi Tasha
export default function SavedMoneyCard(props) {
    return (
        <div className='right-side__money'>
            <div className='right-side__money-content'>
                <h6 className='right-side__money-title'>Saved Money</h6>
                <h6 className='right-side__money-subtitle'>Your Card</h6>
            </div>
            <h6 className='right-side__money-price'>${props.value.toLocaleString()}</h6>
        </div>
    );
}