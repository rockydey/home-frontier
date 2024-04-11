import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ disable: "mobile" });

const Main = () => {
  return (
    <div className='font-poppins'>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Main;
