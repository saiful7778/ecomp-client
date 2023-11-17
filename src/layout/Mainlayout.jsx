import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "./shared/LoadingSpinner";

const Mainlayout = () => {
  const loading = useNavigation();
  return (
    <div className="main-bg">
      <div className="container w-full md:w-4/5 mx-auto p-2">
        <header>
          <Navbar />
        </header>
        <main>
          {loading.state === "loading" ? <LoadingSpinner /> : <Outlet />}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
