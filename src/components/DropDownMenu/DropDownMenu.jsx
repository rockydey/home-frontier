import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const DropDownMenu = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Log Out Successfully"))
      .catch((error) => console.error(error.message));
  };
  return (
    <div className='absolute top-[42px] lg:top-12 right-[-2px] lg:right-[-50px] '>
      <ul className=' z-[1] p-2 shadow lg:shadow-xl bg-colorPrimary  rounded-box'>
        <li className='text-[#fff] lg:w-32 text-lg font-medium text-center mb-4 lg:mb-0'>
          {user.displayName}
        </li>
        <li className='text-center lg:hidden'>
          <button
            onClick={handleLogOut}
            className='cursor-pointer text-lg font-semibold border border-[#fff] text-[#fff] px-6 md:px-8 py-2 rounded-md'>
            LogOut
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
