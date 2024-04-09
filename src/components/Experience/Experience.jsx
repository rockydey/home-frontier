import experienceImg from "../../assets/images/experience.jpg";
import { LiaTrophySolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import { MdOutlineAddHomeWork } from "react-icons/md";
import CountUp from "react-countup";

const Experience = () => {
  return (
    <div
      style={{ backgroundImage: `url(${experienceImg})` }}
      className='bg-center bg-no-repeat bg-cover py-40 px-5 lg:px-0'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='flex items-center gap-3 p-3 border border-dashed border-[#fff] rounded-lg'>
          <div className='text-5xl p-3 bg-[#fff] text-colorTertiary'>
            <LiaTrophySolid />
          </div>
          <div className='text-[#fff]'>
            <p className='text-3xl font-bold'>
              <CountUp end={396} duration={10} />
            </p>
            <p className='text-lg font-medium uppercase'>Awards wining</p>
          </div>
        </div>
        <div className='flex items-center gap-3 p-3 border border-dashed border-[#fff] rounded-lg'>
          <div className='text-5xl p-3 bg-[#fff] text-colorTertiary'>
            <FaRegFaceLaughBeam />
          </div>
          <div className='text-[#fff]'>
            <p className='text-3xl font-bold'>
              <CountUp end={1276} duration={10} />
            </p>
            <p className='text-lg font-medium uppercase'>Happy Clients</p>
          </div>
        </div>
        <div className='flex items-center gap-3 p-3 border border-dashed border-[#fff] rounded-lg'>
          <div className='text-5xl p-3 bg-[#fff] text-colorTertiary'>
            <BsGraphUpArrow />
          </div>
          <div className='text-[#fff]'>
            <p className='text-3xl font-bold'>
              <CountUp end={177} duration={10} />
            </p>
            <p className='text-lg font-medium uppercase'>Done Projects</p>
          </div>
        </div>
        <div className='flex items-center gap-3 p-3 border border-dashed border-[#fff] rounded-lg'>
          <div className='text-5xl p-3 bg-[#fff] text-colorTertiary'>
            <MdOutlineAddHomeWork />
          </div>
          <div className='text-[#fff]'>
            <p className='text-3xl font-bold'>
              <CountUp end={967} duration={10} />
            </p>
            <p className='text-lg font-medium uppercase'>Properties Sold</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
