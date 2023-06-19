import { FaBurn } from 'react-icons/fa';
import jsonData from '../../dashboard/component/josnData';
import { GiCycling, GiDuration, GiPathDistance, GiWeightLiftingUp } from 'react-icons/gi';
import CyclingChart from '../container/cyclingChart';
import { BsHeartPulseFill } from 'react-icons/bs';

const Cycling = () => {
    return (
        <div id='wrapper'>
            <section className='heading'>
                <div>  {jsonData.activities[1].icon}</div> <h1>Cycling Activity</h1>
            </section>
            <div className='row d-flex align-items--center pt--25'>
                <section className='col-lg-6 cards'>
                    <div className='row'>
                        <div className='box col-lg-6 mb--20'>
                            <div className='box-wrapper box-details cursor--pointer cal d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-4 flex--column'>
                                <div className='icon-wrap '>
                                    <figure>
                                        <FaBurn className='icon cal-icon' size={'45px'} />
                                    </figure>
                                </div>
                                <div className='icon-info d-flex align-items--center'>
                                    <h6 className='mb-0 pt--10 pb--10'>Calories Burn </h6>
                                    <div className='ms-3'>
                                        <h3 className='mb-0'>
                                            {jsonData.activities[1].calories_burned}Kal
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='box col-lg-6 mb--20'>
                            <div className='box-wrapper box-details cursor--pointer cal d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-4 flex--column'>
                                <div className='icon-wrap '>
                                    <figure>
                                        <GiDuration className='icon cal-icon' size={'45px'} />
                                    </figure></div>
                                <div className='icon-info d-flex align-items--center'>
                                    <h6 className='mb-0 pt--10 pb--10'>Duration </h6>
                                    <div className='ms-3'>
                                        <h3 className='mb-0'>
                                            {jsonData.activities[1].duration}m
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='box col-lg-6 mb--20'>
                            <div className='box-wrapper box-details cursor--pointer cal d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-4 flex--column'>
                                <div className='icon-wrap '>
                                    <figure>
                                        <GiWeightLiftingUp className='icon cal-icon' size={'45px'} />
                                    </figure></div>
                                <div className='icon-info d-flex align-items--center'>
                                    <h6 className='mb-0 pt--10 pb--10'>Elevation Gain </h6>
                                    <div className='ms-3'>
                                        <h3 className='mb-0'>
                                            {jsonData.activities[1].elevation_gain}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='box col-lg-6 mb--20'>
                            <div className='box-wrapper box-details cursor--pointer cal d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-4 flex--column'>
                                <div className='icon-wrap '>
                                    <figure>
                                        <GiPathDistance
                                            className='icon cal-icon'
                                            size={'45px'}
                                        /></figure></div>
                                <div className='icon-info d-flex align-items--center'>
                                    <h6 className='mb-0 pt--10 pb--10'>Distance </h6>
                                    <div className='ms-3'>
                                        <h3 className='mb-0'>
                                            {jsonData.activities[1].distance}Km
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='box col-lg-6 mb--20'>
                            <div className='box-wrapper box-details cursor--pointer cal d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-4 flex--column'>
                                <div className='icon-wrap '>
                                    <figure>
                                        <BsHeartPulseFill className='icon cal-icon' size={'45px'} />
                                    </figure>
                                </div>
                                <div className='icon-info d-flex align-items--center'>
                                    <h6 className='mb-0 h6t--10 pb--10'>Heart Rate </h6>
                                    <div className='ms-3'>

                                        <h3 className='mb-0'>
                                            {jsonData.activities[1].heart_rate.average}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div></section>
                <section className="charts mt-4 col-lg-6">
                    <div className='chart-container rounded-2 p-5'>
                        <div className='d-flex align-item--center activity-title'>
                            <GiCycling
                                className='icon run-icon ml--20 mt--20'
                                size={'50px'} color='white'
                            />
                            <h3 className='fs-6 mb-3 ml--10 pt--20'>Cycling Activity Chart</h3>
                        </div>
                        <CyclingChart />
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Cycling;
