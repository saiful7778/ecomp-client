import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Mainlayout = () => {
  return (
    <div className="main-bg">
      <div className="container w-4/5 mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Mainlayout