import popular1 from "../../assets/images/popular-places-1.jpg";
import popular2 from "../../assets/images/popular-places-2.jpg";
import popular3 from "../../assets/images/popular-places-3.jpg";
import popular4 from "../../assets/images/popular-places-4.jpg";
import popular6 from "../../assets/images/popular-places-6.jpg";

const PopularPlace = () => {
  return (
    <div className='max-w-screen-xl mx-auto mb-20 px-5 lg:px-0'>
      <p className='text-center text-lg font-normal text-colorPrimary mb-3'>
        Find Your City
      </p>
      <h3 className='text-center mb-5 text-colorTertiary text-3xl font-bold'>
        MOST POPULAR <span className='text-colorPrimary'>PLACES</span>
      </h3>
      <div className='flex flex-col lg:flex-row items-center gap-6'>
        <div>
          <div className='relative'>
            <div className=''>
              <img className='lg:h-[566px]' src={popular6} alt='' />
            </div>
            <div className='absolute left-5 bottom-5 text-[#fff]'>
              <h5 className='text-xl font-medium'>United States</h5>
              <p className='text-base font-normal'>84 Properties</p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='relative'>
            <div className=''>
              <img className='lg:h-[271px]' src={popular1} alt='' />
            </div>
            <div className='absolute left-5 bottom-5 text-[#fff]'>
              <h5 className='text-xl font-medium'>Sydney</h5>
              <p className='text-base font-normal'>57 Properties</p>
            </div>
          </div>
          <div className='relative'>
            <div className=''>
              <img className='lg:h-[271px]' src={popular2} alt='' />
            </div>
            <div className='absolute left-5 bottom-5 text-[#fff]'>
              <h5 className='text-xl font-medium'>California</h5>
              <p className='text-base font-normal'>63 Properties</p>
            </div>
          </div>
          <div className='relative'>
            <div className=''>
              <img className='lg:h-[271px]' src={popular3} alt='' />
            </div>
            <div className='absolute left-5 bottom-5 text-[#fff]'>
              <h5 className='text-xl font-medium'>London</h5>
              <p className='text-base font-normal'>49 Properties</p>
            </div>
          </div>
          <div className='relative'>
            <div className=''>
              <img className='lg:h-[271px]' src={popular4} alt='' />
            </div>
            <div className='absolute left-5 bottom-5 text-[#fff]'>
              <h5 className='text-xl font-medium'>Rome</h5>
              <p className='text-base font-normal'>73 Properties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPlace;
