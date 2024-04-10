import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Experience from "../../components/Experience/Experience";
import Partners from "../../components/Partners/Partners";
import PopularPlace from "../../components/PopularPlace/PopularPlace";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });

  const navLinks = (
    <>
      <li className='bg-[#fff] shadow-lg px-3 md:px-4 py-1 rounded'>
        <Link
          className='focus:text-colorPrimary focus:border-b-2 focus:border-b-colorPrimary'
          to='/'>
          All
        </Link>
      </li>
      <li className='bg-[#fff] shadow-lg px-3 md:px-4 py-1 rounded'>
        <Link
          className='focus:text-colorPrimary focus:border-b-2 focus:border-b-colorPrimary'
          to='/apartment'>
          Apartment
        </Link>
      </li>
      <li className='bg-[#fff] shadow-lg px-3 md:px-4 py-1 rounded'>
        <Link
          className='focus:text-colorPrimary focus:border-b-2 focus:border-b-colorPrimary'
          to='/house'>
          House
        </Link>
      </li>
      <li className='bg-[#fff] shadow-lg px-3 md:px-4 py-1 rounded'>
        <Link
          className='focus:text-colorPrimary focus:border-b-2 focus:border-b-colorPrimary'
          to='/villa'>
          Villa
        </Link>
      </li>
    </>
  );
  return (
    <div className=''>
      <Banner />
      <div className='py-20 bg-[#faf8f8]'>
        <div className='text-center'>
          <p className='text-lg font-normal uppercase text-colorPrimary mb-3'>
            Best Sale And Rent Properties
          </p>
          <h2 className='text-colorTertiary uppercase text-3xl font-bold'>
            FEATURED <span className='text-colorPrimary'>PROPERTIES</span>
          </h2>
        </div>
        <nav>
          <ul className='flex justify-center gap-3 mt-6 mb-10 text-colorSecondary text-base font-medium uppercase'>
            {navLinks}
          </ul>
        </nav>
        <div className='max-w-screen-xl mx-auto px-5 lg:px-0'>
          <Outlet />
        </div>
      </div>
      <Experience />
      <Partners />
      <PopularPlace />
    </div>
  );
};

export default Home;
