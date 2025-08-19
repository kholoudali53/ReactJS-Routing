import LearnAside from "../../commponents/LearnAside"
import Navbar from "../../commponents/Navbar"
import {Outlet} from "react-router-dom"
const LearnLayout = () => {
    return (
        <>
        <Navbar/>
        <LearnAside/>
        <Outlet/>
        </>
    )
}

export default LearnLayout

