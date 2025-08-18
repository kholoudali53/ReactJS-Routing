import Navbar from "../commponents/Navbar"
import {Outlet} from "react-router-dom"

const LayoutPage = () => {
    return (
        <>
        <Navbar />  
        <Outlet/>
        </>
    )
}

export default LayoutPage

