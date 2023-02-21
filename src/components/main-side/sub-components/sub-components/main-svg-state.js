// Codes By Mahdi Tasha
export default function MainSvgState(props) {
    return (
        <svg width='50' height='50' viewBox="0 0 36 36">
            <path stroke="white" fill='none' strokeWidth='2.8' strokeLinecap='round' stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <text x='12px' fill='white' y="20px" fontWeight='600' fontSize="7px">{props.value}%</text>
            <path stroke={`url(#${(props.for === 'Total Finance') ? 'total-finance-gradiant' : 'total-expense-gradiant'}`} fill='none' strokeWidth='2.8' strokeLinecap='round' stroke-dasharray={`${props.value}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <defs>
                <linearGradient id="total-finance-gradiant" x1="0" y1="-3" x2="86.1229" y2="23.6359" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D57DFF"/>
                    <stop stop-color="#A645B6"/>
                </linearGradient>
                <linearGradient id="total-expense-gradiant" x1="0" y1="-3" x2="86.1229" y2="23.6359" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B6A2FF"/>
                    <stop stop-color="#9D5EFF"/>
                </linearGradient>
            </defs>
        </svg>
    );
}