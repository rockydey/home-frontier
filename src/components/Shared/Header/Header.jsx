import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { Menu } from "lucide-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully!"))
      .catch((error) => console.error(error.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/blogs'>Blogs</NavLink>
      </li>
      <li>
        <NavLink to='/agents'>Agents</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to='/updateProfile'>Update Profile</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className='fixed top-0 left-0 right-0 w-full z-50'>
      <div className='bg-base-100'>
        <div className='navbar lg:px-0  max-w-screen-xl mx-auto'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <div tabIndex={0} role='button' className='mr-2 lg:hidden'>
                <Menu />
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg text-colorSecondary space-y-1'>
                {navLinks}
              </ul>
            </div>
            <Link
              to='/'
              className='text-[27px] md:text-3xl font-semibold text-colorPrimary'>
              <span className='text-colorTertiary'>Home</span>Frontier
            </Link>
          </div>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1 text-lg text-colorSecondary'>
              {navLinks}
            </ul>
          </div>
          <div className='navbar-end'>
            {user ? (
              <div className='flex items-center gap-5'>
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className='avatar relative cursor-pointer'>
                  <div className='w-10 rounded-full ring ring-colorPrimary ring-offset-base-100 ring-offset-2'>
                    <img src={user?.photoURL} />
                  </div>
                  {isDropdownVisible && <DropDownMenu />}
                </div>
                <button
                  onClick={handleLogOut}
                  className='cursor-pointer hidden lg:inline-block text-lg font-semibold bg-colorPrimary text-[#fff] px-6 md:px-8 py-2 rounded-md'>
                  LogOut
                </button>
              </div>
            ) : (
              <Link to='/login'>
                <button className='text-lg font-semibold bg-colorPrimary text-[#fff] px-6 md:px-8 py-2 rounded-md'>
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
