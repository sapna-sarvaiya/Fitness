import '../styles/dashboard.scss';
import React, { useState, useEffect } from 'react';
import { Progress, Space } from 'antd';
import { BsHeartPulseFill } from "react-icons/bs";
import { GiDuration ,GiPathDistance} from "react-icons/gi";


import {GiBurningMeteor,GiBodyHeight,GiWeightLiftingUp,GiCycling,GiHiking} from 'react-icons/gi';
import { FaChild,FaRunning,FaSwimmer,FaBurn } from "react-icons/fa";
import { GrYoga} from "react-icons/gr";


import jsonData from '../component/josnData';
import HeartRateChart from '../component/heartChart';
import CaloryChart from '../component/caloryChart';
import NavBarChart from '../component/navbarChart';
import DurationChart from '../component/durationChart';


const Dashboard = () => {
const [totalCalory, setTotalCalory] = useState(0);
const [totalDuration, setTotalDuration] = useState(0);
const [maxHeartRate,setMaxHeartRate]=useState(0);
const[totalDistance,setTotalDistance]=useState(0);
useEffect(() => {
  
  const totalCal = jsonData.activities.reduce((total, item) => item.calories_burned + total, 0)
  const totaltime = jsonData.activities.reduce((total, item) => item.duration + total, 0)/60
  const totalMaxHeartRate = jsonData.activities.reduce((total,item)=>item.heart_rate.max + total ,0)/5
  const distance = jsonData.activities[0].distance ?jsonData.activities[0].distance :0;
  
  setTotalCalory(totalCal);
  setTotalDuration(totaltime);
  setMaxHeartRate(totalMaxHeartRate);
  setTotalDistance(distance);
}, [jsonData])

    return (
        <>

<div id="wrapper">
  <section className='heading'> <h1>DashBoard</h1></section>
    <section className="statistics mt-4 pb--50 pt--50">
  
                <div className="row">
                    <div className="box col-lg-3">
                     <div className='box-wrapper cursor--pointer cal d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3 flex--column'>
                      <FaBurn className='icon cal-icon' size={'45px'}/>
                            <p className="fs-normal mb-0 pt--10 pb--10">Total Calory</p>
                        <div className="ms-3">
                                <h3 className="mb-0">{totalCalory}Kal</h3>
                        </div>
                        </div>
                    </div>
                    <div className="box col-lg-3">
                   <div className='box-wrapper cursor--pointer heart d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3 flex--column'>
                    <BsHeartPulseFill className='icon heart-icon' size={'45px'}/>
                            <p className="fs-normal mb-0 pt--10 pb--10">Max HeartRate </p>
                        <div className="ms-3">
                                <h3 className="mb-0">{maxHeartRate}</h3>
                        </div>
                        </div>
                    </div>
                    <div className="box  col-lg-3 ">
                    <div className='box-wrapper cursor--pointer time d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3 flex--column'>
                      <GiDuration className='icon time-icon' size={'45px'}/>
                            <p className="fs-normal mb-0 pt--10 pb--10">Total Duration</p>
                        <div className="ms-3">
                                <h3 className="mb-0">{totalDuration}Hrs</h3>
                        </div>
                        </div>
                    </div>
                    <div className="box col-lg-3">
                     <div className='box-wrapper cursor--pointer map d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3 flex--column'>
                      <GiPathDistance className='icon map-icon' size={'45px'}/>
                            <p className="fs-normal mb-0 pt--10 pb--10">Total Running Distance</p>
                        <div className="ms-3">
                                <h3 className="mb-0">{totalDistance}Km</h3>
                        </div>
                        </div>
                    </div>
           
            </div>
      
    </section>
    <section className="charts mt-4">
    <div className="row">
    <div className="col-lg-4">
          <div className="chart-container rounded-2 p-5">
          <div className='d-flex'>
            <h3 className="fs-6 mb-3">Duration</h3>
            <GiDuration className='icon time-icon ml--20' size={'70px'}/>
            </div>
            <DurationChart/>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="chart-container rounded-2 p-5 height--100px">
            <div className='d-flex'>
            <h3 className="fs-6 mb-3">Heart Rate</h3>
           <BsHeartPulseFill className='icon ml--20 heart-icon' size={'60px'}/>
           </div>
            <HeartRateChart/>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="chart-container rounded-2 p-5">
          <div className='d-flex'>
            <h3 className="fs-6 mb-3">calory</h3>
            <GiBurningMeteor className='icon cal-icon ml--20' size={'60px'}/>
            </div>
            <CaloryChart/>
          </div>
        </div>
        </div>
    </section>
  
</div>

           

        </>
    )
}
export default Dashboard;