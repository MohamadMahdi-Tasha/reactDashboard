// Codes By Mahdi Tasha
import MainDropdown from "./main-dropdown";

export default function MainBottomTableRow(props) {
    return (
        <tr className='main-side__bottom-table-row'>
            <td className='main-side__bottom-table-cell'>
                <img className='main-side__bottom-table-img' src={props.img} alt={props.name}/>
                <span>{props.name}</span>
            </td>
            <td className='main-side__bottom-table-cell'>{props.progress}</td>
            <td className='main-side__bottom-table-cell'>${props.achieved.toLocaleString()}</td>
            <td className='main-side__bottom-table-cell' data-status={props.status}>{props.status}</td>
            <td className='main-side__bottom-table-cell'>
                <MainDropdown iconType={'horizontal'}>
                    <button>opt1</button>
                    <button>opt2</button>
                    <button>opt3</button>
                </MainDropdown>
            </td>
        </tr>
    );
}