import { Link } from "react-router-dom";
import footerBg from "../../../assets/images/footer-bg.jpg";
import "./Footer.css";
import {
  MapPin,
  MailCheck,
  ChevronRight,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${footerBg})` }}
      className='bg-center bg-no-repeat bg-cover'>
      <div className='max-w-screen-xl mx-auto pt-20'>
        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 lg:px-0'>
          <aside className='space-y-3'>
            <div>
              <Link to='/' className='text-3xl font-semibold text-colorPrimary'>
                <span className='text-[#fff]'>Home</span>Frontier
              </Link>
              <div className='space-y-1'>
                <div className='w-16 h-[1px] bg-[#ffffff2e]'></div>
                <div className='w-10 h-[1px] bg-[#ffffff2e]'></div>
              </div>
            </div>
            <div className='text-base font-light space-y-1 text-[#cecece]'>
              <p>HomeFrontier Real Estate Ltd.</p>
              <p>Providing reliable sweet residential since 2022</p>
            </div>
          </aside>
          <nav className='space-y-3'>
            <div>
              <h6 className='text-[#e8e7e7] text-2xl font-normal'>
                Contact Info
              </h6>
              <div className='space-y-1'>
                <div className='w-16 h-[1px] bg-[#ffffff2e]'></div>
                <div className='w-10 h-[1px] bg-[#ffffff2e]'></div>
              </div>
            </div>
            <div className='text-[#cecece] space-y-3'>
              <div className='flex items-center gap-2 cursor-pointer'>
                <div className='bg-[#1b1e83] w-10 h-10 rounded-full flex items-center justify-center'>
                  <MapPin />
                </div>
                <p className='text-base font-normal'>
                  {" "}
                  123 Sydney St. South Wales City
                </p>
              </div>
              <div className='flex items-center gap-2 cursor-pointer'>
                <div className='bg-[#1b1e83] w-10 h-10 rounded-full flex items-center justify-center'>
                  <MailCheck />
                </div>
                <p className='text-base font-normal'>
                  {" "}
                  contact@homeFrontier.com
                </p>
              </div>
              <div className='flex items-center gap-2 cursor-pointer'>
                <div className='bg-[#1b1e83] w-10 h-10 rounded-full flex items-center justify-center'>
                  <MapPin />
                </div>
                <p className='text-base font-normal'>
                  {" "}
                  123 Sydney St. South Wales City
                </p>
              </div>
            </div>
          </nav>
          <nav className='space-y-3 lg:ml-12'>
            <div>
              <h6 className='text-[#e8e7e7] text-2xl font-normal'>
                Useful Links
              </h6>
              <div className='space-y-1'>
                <div className='w-16 h-[1px] bg-[#ffffff2e]'></div>
                <div className='w-10 h-[1px] bg-[#ffffff2e]'></div>
              </div>
            </div>
            <div className='text-[#cecece] space-y-3'>
              <div className='flex items-center gap-1 cursor-pointer'>
                <ChevronRight />
                <Link className='text-base font-normal'>Terms of use</Link>
              </div>
              <div className='flex items-center gap-1 cursor-pointer'>
                <ChevronRight />
                <Link className='text-base font-normal'>Privacy policy</Link>
              </div>
              <div className='flex items-center gap-1 cursor-pointer'>
                <ChevronRight />
                <Link className='text-base font-normal'>Cookie policy</Link>
              </div>
            </div>
          </nav>
          <nav className='space-y-3'>
            <div>
              <h6 className='text-[#e8e7e7] text-2xl font-normal'>Subscribe</h6>
              <div className='space-y-1'>
                <div className='w-16 h-[1px] bg-[#ffffff2e]'></div>
                <div className='w-10 h-[1px] bg-[#ffffff2e]'></div>
              </div>
            </div>
            <div className='text-[#cecece] space-y-3'>
              <p className='text-base font-normal'>
                Let us guide you through every step of the process with
                expertise and dedication.
              </p>
              <div className='flex'>
                <input
                  type='email'
                  placeholder='Email Address'
                  className='rounded-s px-4 focus:outline-none text-colorTertiary text-base font-normal'
                />
                <div className='bg-colorPrimary p-3 text-[#fff] rounded-e cursor-pointer'>
                  <Send />
                </div>
              </div>
            </div>
          </nav>
        </footer>
      </div>
      <div className='border-t border-[#ffffff2e] my-10'></div>
      <div className='max-w-screen-xl mx-auto pb-10 flex flex-col px-5 lg:px-0 lg:flex-row items-center justify-center lg:justify-between space-y-5 lg:space-y-0'>
        <div className='text-[#e8e7e7] text-lg font-light'>
          <p className='text-center lg:text-left'>
            &copy; 2022 HomeFrontier. All Rights Reserved.
          </p>
        </div>
        <div className='flex items-center gap-3 text-[#e8e7e7]'>
          <div className='bg-[#1b1e83] p-3 hover:bg-[#3b5999] cursor-pointer'>
            <Facebook />
          </div>
          <div className='bg-[#1b1e83] p-3 hover:bg-[#46c1f6] cursor-pointer'>
            <Twitter />
          </div>
          <div className='bg-[#1b1e83] p-3 hover:bg-[#e1306c] cursor-pointer'>
            <Instagram />
          </div>
          <div className='bg-[#1b1e83] p-3 hover:bg-[#de463b] cursor-pointer'>
            <Youtube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
