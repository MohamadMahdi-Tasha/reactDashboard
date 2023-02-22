// Codes By Mahdi Tasha
export default function SavedMoneyCard(props) {
    return (
        <div>
            <div>
                <h6>Saved Money</h6>
                <h6><span></span>Your Card</h6>
            </div>
            <h6>${props.value.toLocaleString()}</h6>
        </div>
    );
}