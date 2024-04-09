import bannerImg1 from "../../assets/images/banner-1.jpg";
import bannerImg2 from "../../assets/images/banner-2.jpg";
import bannerImg3 from "../../assets/images/banner-3.jpg";
import bannerImg4 from "../../assets/images/banner-4.jpg";
import bannerImg5 from "../../assets/images/banner-5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'>
        <SwiperSlide>
          <div
            className='hero h-[50vh] md:h-[65vh] lg:h-[95vh] bg-center bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${bannerImg1})` }}>
            <div className='hero-overlay bg-opacity-25'></div>
            <div className='hero-content text-[#fff] text-center'>
              <div className='w-11/12'>
                <h2 className='text-2xl md:text-4xl lg:text-5xl leading-tight font-bold mb-8'>
                  Welcome Home to Comfort & Luxury
                </h2>
                <p className='text-base md:text-xl font-medium'>
                  Experience the pinnacle of residential living with our curated
                  selection of luxurious properties.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero h-[50vh] md:h-[65vh] lg:h-[95vh] bg-center bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${bannerImg2})` }}>
            <div className='hero-overlay bg-opacity-25'></div>
            <div className='hero-content text-[#fff] text-center'>
              <div className='w-11/12'>
                <h2 className='text-2xl md:text-4xl lg:text-5xl leading-tight font-bold mb-8'>
                  Discover Your Dream Home
                </h2>
                <p className='text-base md:text-xl font-medium'>
                  Embark on a journey to find the perfect residence that
                  reflects your unique lifestyle.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero h-[50vh] md:h-[65vh] lg:h-[95vh] bg-center bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${bannerImg3})` }}>
            <div className='hero-overlay bg-opacity-25'></div>
            <div className='hero-content text-[#fff] text-center'>
              <div className='w-11/12'>
                <h2 className='text-2xl md:text-4xl lg:text-5xl leading-tight font-bold mb-8'>
                  Unlock the Door to Your Future
                </h2>
                <p className='text-base md:text-xl font-medium'>
                  Step into a world of endless possibilities as you explore our
                  diverse range of homes.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero h-[50vh] md:h-[65vh] lg:h-[95vh] bg-center bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${bannerImg4})` }}>
            <div className='hero-overlay bg-opacity-25'></div>
            <div className='hero-content text-[#fff] text-center'>
              <div className='w-11/12'>
                <h2 className='text-2xl md:text-4xl lg:text-5xl leading-tight font-bold mb-8'>
                  Where Every House Tells a Story
                </h2>
                <p className='text-base lg:text-xl font-medium'>
                  We understand that a home is more than just four walls it is a
                  reflection of your aspirations and dreams.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero h-[50vh] md:h-[65vh] lg:h-[95vh] bg-center bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${bannerImg5})` }}>
            <div className='hero-overlay bg-opacity-25'></div>
            <div className='hero-content text-[#fff] text-center'>
              <div className='w-11/12'>
                <h2 className='text-2xl md:text-4xl lg:text-5xl leading-tight font-bold mb-8'>
                  Experience the Magic of Home ownership
                </h2>
                <p className='text-base md:text-xl font-medium'>
                  Transform your dreams into reality with our comprehensive
                  range of residential properties and cherished for a lifetime.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
