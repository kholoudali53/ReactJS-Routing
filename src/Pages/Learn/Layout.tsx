import LearnAside from "../../commponents/LearnAside"
import Navbar from "../../commponents/Navbar"
import {Outlet} from "react-router-dom"
const LearnLayout = () => {
    return (
  <div className="learn-layout">
    <LearnAside />

    <div className="ml-72">
      <Navbar />
      <Outlet />
    </div>
  </div>
);
}

export default LearnLayout

