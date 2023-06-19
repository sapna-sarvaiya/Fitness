import NavBarChart from '../component/navbarChart';
import Logo from '../../../assets/images/logo.png';
import { Progress, Space } from 'antd';
import jsonData from './josnData';
import { BsHeartPulseFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NavBar = () => {
    return (
        <>
            <aside
                className='sidebar top-0 left-0 overflow-auto h-100 float-left'
                id='show-side-navigation1'>
                <div className='box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3 flex--column justify-content--start height-100vh border-radius--xxl mt--10'>
                    <div className='logo-wrapper mb--10 cursor--pointer'>
                        <Link to={'/'}>
                            <img src={Logo} width='95px' height='90px' className='mt---40' />
                        </Link>
                    </div>
                    <ul className='nav-list'>
                        <li className='has-dropdown pb--15 pt--15'>
                            <Link to={'/'}><FaHome size={'35px'} /></Link>
                        </li>
                        {jsonData.activities.map((item, index) => (
                            <li className='has-dropdown pb--15 pt--15'>
                                <Link
                                    to={`${item.name
                                        .toLowerCase()
                                        .replace(' ', '_')}`}>
                                    {item.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};
export default NavBar;
