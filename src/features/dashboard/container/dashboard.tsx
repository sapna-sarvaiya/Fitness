import '../styles/dashboard.scss';
import jsonData from '../component/josnData';
const Dashboard = () => {
    return (
        <>
            <div className='statistics'>
                <div className="col-lg-4">
                    <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                        <i className="uil-envelope-shield fs-2 text-center bg-primary rounded-circle"></i>
                        <div className="ms-3">
                            <div className="d-flex align-items-center">
                                <h3 className="mb-0">1,245</h3> <span className="d-block ms-2">Emails</span>
                            </div>
                            <p className="fs-normal mb-0">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                jsonData.activities.slice(0, 5).map((data, index) => {
                    return <>
                        <div key={index}>
                            {
                                data.name
                            }
                        </div>
                    </>
                })
            }
        </>
    )
}
export default Dashboard;