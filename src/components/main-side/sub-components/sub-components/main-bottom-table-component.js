// Codes By Mahdi Tasha
import ImagePerson1 from "../../../../assets/img/dashboard/main-side/img-person-1.png";
import ImagePerson2 from "../../../../assets/img/dashboard/main-side/img-person-2.png";
import MainBottomTableRow from './main-bottom-table-row';

export default function MainBottomTableComponent() {
    return (
        <div className='main-side__bottom-table-holder'>
            <table>
                <thead className='main-side__bottom-table-head'>
                <th className='main-side__bottom-table-heading'>Name</th>
                <th className='main-side__bottom-table-heading'>Progress</th>
                <th className='main-side__bottom-table-heading'>Achieved</th>
                <th className='main-side__bottom-table-heading'>Status</th>
                <th className='main-side__bottom-table-heading'>View All</th>
                </thead>
                <tbody>
                <MainBottomTableRow img={ImagePerson1} name={'Darby Day'} progress={'Meet The Target'} achieved={145000} status={'Financial Officer'}/>
                <MainBottomTableRow img={ImagePerson2} name={'Helt Diven'} progress={'On Going'} achieved={299000} status={'Project Manager'}/>
                <MainBottomTableRow img={ImagePerson2} name={'Helt Diven'} progress={'On Going'} achieved={299000} status={'Project Manager'}/>
                <MainBottomTableRow img={ImagePerson2} name={'Helt Diven'} progress={'On Going'} achieved={299000} status={'Project Manager'}/>
                <MainBottomTableRow img={ImagePerson2} name={'Helt Diven'} progress={'On Going'} achieved={299000} status={'Project Manager'}/>
                <MainBottomTableRow img={ImagePerson2} name={'Helt Diven'} progress={'On Going'} achieved={299000} status={'Project Manager'}/>
                <MainBottomTableRow img={ImagePerson2} name={'Helt Diven'} progress={'On Going'} achieved={299000} status={'Project Manager'}/>
                </tbody>
            </table>
        </div>
    );
}