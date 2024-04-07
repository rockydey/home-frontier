import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className='font-poppins'>
      <div className='max-w-screen-xl mx-auto'>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
