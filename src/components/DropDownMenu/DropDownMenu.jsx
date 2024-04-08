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
    <div className='absolute top-[42px] right-[-2px] lg:right-[-50px] '>
      <ul className=' z-[1] p-2 shadow bg-base-100 rounded-box'>
        <li className='text-colorTertiary text-lg font-medium text-center mb-4 '>
          {user.displayName}
        </li>
        <li className="text-center">
          <button
            onClick={handleLogOut}
            className='cursor-pointer text-lg font-semibold bg-colorPrimary text-[#fff] px-6 md:px-8 py-2 rounded-md'>
            LogOut
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
