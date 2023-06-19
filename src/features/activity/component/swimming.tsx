import { FaBurn, FaSwimmer } from 'react-icons/fa';
import jsonData from '../../dashboard/component/josnData';
import { GiDuration, GiWeightLiftingUp } from 'react-icons/gi';
import SwimmmingChart from '../container/swimmingChart';
import { BsHeartPulseFill } from 'react-icons/bs';

const Swimming = () => {

    return (
        <div id='wrapper'>
            <section className='heading d-flex'>
                <div className='ml--10'> {jsonData.activities[3].icon}</div><h1> Swimming Activity</h1>
            </section>
            <div className='row d-flex align-items--center pt--25'>
                <section className='col-lg-6 cards pt--50 '>
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
                                            {jsonData.activities[0].calories_burned}Kal
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
                                            {jsonData.activities[0].duration}m
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
                                            {jsonData.activities[0].elevation_gain}
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
                                            {jsonData.activities[0].heart_rate.average}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></section>
                <section className="charts mt-4 col-lg-6">
                    <div className='chart-container rounded-2 p-5'>
                        <div className='d-flex align-item--center activity-title'>
                            <FaSwimmer
                                className='icon run-icon ml--20 mt--20'
                                size={'50px'} color='white'
                            />
                            <h3 className='fs-6 mb-3 ml--10 pt--20'>Swimming Activity Chart</h3>
                        </div>
                        <SwimmmingChart />
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Swimming;
