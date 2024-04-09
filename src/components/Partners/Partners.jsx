import brand1 from "../../assets/images/brand-1.png";
import brand2 from "../../assets/images/brand-2.png";
import brand3 from "../../assets/images/brand-6.png";
import brand4 from "../../assets/images/brand-4.png";
import brand5 from "../../assets/images/brand-5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Partners = () => {
  return (
    <div className='max-w-screen-xl mx-auto my-20 px-5 lg:px-0'>
      <h3 className='mb-5 text-center text-colorTertiary uppercase font-bold text-3xl'>
        Brands <span className='text-colorPrimary'>&</span> Partners
      </h3>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className='mySwiper'>
        <SwiperSlide>
          <img src={brand1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand4} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand5} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
