// Codes By Mahdi Tasha
import ImagePerson1 from "../../../../assets/img/dashboard/main-side/img-person-1.png";
import ImagePerson2 from "../../../../assets/img/dashboard/main-side/img-person-2.png";
import MainBottomTableRow from './main-bottom-table-row';

export default function MainBottomTableComponent() {
    return (
        <table>
            <thead>
            <th>Name</th>
            <th>Progress</th>
            <th>Achieved</th>
            <th>Status</th>
            <th>View All</th>
            </thead>
            <tbody>
            <MainBottomTableRow img={ImagePerson1} name={'Darby Day'} progress={'Meet The Target'} achieved={145000} status={'Financial Officer'}/>
            <MainBottomTableRow img={ImagePerson2} name={'Helt Diven'} progress={'On Going'} achieved={299000} status={'Project Manager'}/>
            </tbody>
        </table>
    );
}