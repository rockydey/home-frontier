import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className='font-poppins max-w-screen-xl mx-auto'>
      <Outlet />
    </div>
  );
};

export default Main;
