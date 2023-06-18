
import React from 'react';
import Header from '../shared/components/header/header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../features/dashboard/container/dashboard';
import Running from '../features/activity/component/runningActivity';
import Cycling from '../features/activity/component/cycling';
import StrengthTraning from '../features/activity/component/strengthTraining';
import Swimming from '../features/activity/component/swimming';
import Hiking from '../features/activity/component/hiking';
const Layout: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <div className='main-wrapper'>
            <Header />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='running' element={<Running />} />
				<Route path='/cycling' element={<Cycling/>}/>
				<Route path='/strength_training' element={<StrengthTraning/>}/>
				<Route path='/swimming' element={<Swimming/>}/>
				<Route path='/hiking' element={<Hiking/>}/>
            </Routes>
        </div>
    );
};

export default Layout;
