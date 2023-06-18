import jsonData from "../../../features/dashboard/component/josnData";

const Header = () => {
    let myDate = new Date();
    let currentHrs = myDate.getHours();
    let greet;

    if (currentHrs < 12)
    greet = 'Good Morning';
    else if (currentHrs >= 12 && currentHrs <= 17)
    greet = 'Good Afternoon';
    else if (currentHrs >= 17 && currentHrs <= 24)
    greet = 'Good Evening';

 return (
    <>
 <header className="d-flex justify-content-between px-3 py-4 header">
    <div className="welcome">
      <div className="content">
        <p>{greet} ,</p>
        <h5 className="mb-0">Welcome back Jone Doe!</h5>
      </div>
    </div>
    <div className="profile">
    <div className="sidebar-header d-flex justify-content-center align-items-center ">
    <img
         className="rounded-pill img-fluid border-radius--half"
         width="50"
         src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance"
         alt=""/>
    <div className="ml--10">
      <h5 className="fs-6 mb-0">
        <a className="text-decoration-none" href="javascript:void(0)">{jsonData.user.name}</a>
      </h5>
    </div>
  </div>
  </div>
    </header>
    </>
 )
}
export default Header;