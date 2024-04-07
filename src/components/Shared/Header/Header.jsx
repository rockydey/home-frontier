import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { Menu } from "lucide-react";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/blogs'>Blogs</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact</NavLink>
      </li>
      <li>
        <NavLink to='/updateProfile'>Update Profile</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className='navbar bg-base-100'>
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
          <Link to='/' className='text-3xl font-semibold text-colorPrimary'>
            <span className='text-colorTertiary'>Home</span>Frontier
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 text-lg text-colorSecondary'>
            {navLinks}
          </ul>
        </div>
        <div className='navbar-end'>
          <Link to='/login'>
            <button className='text-lg font-semibold bg-colorPrimary text-[#fff] px-6 md:px-8 py-2 rounded-md'>
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
