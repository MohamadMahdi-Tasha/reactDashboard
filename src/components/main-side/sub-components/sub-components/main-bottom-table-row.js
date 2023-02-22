// Codes By Mahdi Tasha
import MainDropdown from "./main-dropdown";

export default function MainBottomTableRow(props) {
    return (
        <tr>
            <td>
                <img src={props.img} alt={props.name}/>
                <span>{props.name}</span>
            </td>
            <td>{props.progress}</td>
            <td>${props.achieved.toLocaleString()}</td>
            <td>
                <span></span>
                {props.status}
            </td>
            <td>
                <MainDropdown iconType={'horizontal'}>
                    <button>opt1</button>
                    <button>opt2</button>
                    <button>opt3</button>
                </MainDropdown>
            </td>
        </tr>
    );
}