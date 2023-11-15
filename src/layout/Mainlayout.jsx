import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "./shared/LoadingSpinner";

const Mainlayout = () => {
  const loading = useNavigation();
  return (
    <div className="main-bg">
      <div className="container w-4/5 mx-auto p-2">
        <Navbar />
        {loading.state === "loading" ? <LoadingSpinner /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
