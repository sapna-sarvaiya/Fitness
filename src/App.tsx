import React from 'react';
import '../src/assets/styles/app.scss';
import './App.css';
import NavBar from './features/dashboard/component/navbar';
import Layout from './hoc/layout';
function App() {
    return (
        <div className='App'>
            <NavBar />
            <Layout />
        </div>
    );
}

export default App;
