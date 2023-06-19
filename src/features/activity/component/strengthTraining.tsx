import { FaBurn, FaRunning } from 'react-icons/fa';
import jsonData from '../../dashboard/component/josnData';
import { GiDuration, GiPathDistance, GiWeightLiftingUp } from 'react-icons/gi';
import StrengthChart from '../container/strengthTrainingChart';
import { BsHeartPulseFill } from 'react-icons/bs';

const StrengthTraining = () => {

    return (
        <div id='wrapper'>
            <section className='heading'>
                <h1>{jsonData.activities[2].icon} StrengthTraining Activity</h1>
            </section>
            <div className='row d-flex align-items--center'>
                <section className='col-lg-6  '>
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
                                            {jsonData.activities[2].calories_burned}Kal
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
                                            {jsonData.activities[2].duration}m
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
                                    <h6 className='mb-0 pt--10 pb--10'>Weight Lifted </h6>
                                    <div className='ms-3'>
                                        <h3 className='mb-0'>
                                            {jsonData.activities[2].weight_lifted?.average_per_rep}Kg
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='box col-lg-6 mb--20'>
                            <div className='box-wrapper box-details cursor--pointer cal d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-4 flex--column'>
                                <div className='icon-wrap '>
                                    <figure>
                                        <FaRunning
                                            className='icon cal-icon'
                                            size={'45px'}
                                        /></figure></div>
                                <div className='icon-info d-flex align-items--center'>
                                    <h6 className='mb-0 pt--10 pb--10'>Reps </h6>
                                    <div className='ms-3'>
                                        <h3 className='mb-0'>
                                            {jsonData.activities[2].reps?.average_per_set}
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
                                            {jsonData.activities[2].heart_rate.average}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></section>
                <section className="charts mt-4 col-lg-6">
                    <div className='chart-container rounded-2 p-5'>
                        <div className='d-flex align-item--center'>
                            {jsonData.activities[2].icon}
                            <h3 className='fs-6 mb-3 ml--10'>StrengthTraining Activity Chart</h3>

                        </div>
                        <StrengthChart />
                    </div>
                </section>
            </div>
        </div>
    );
};
export default StrengthTraining;
