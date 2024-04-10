import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import testImg1 from "../../assets/images/review1.jpg";
import testImg2 from "../../assets/images/review2.jpg";
import testImg3 from "../../assets/images/review3.jpg";


const Testimonial = () => {
  return (
    <div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className='mySwiper'>
        <SwiperSlide>
          <div>
            <div className=''>
              <p className='text-colorSecondary text-base font-normal bg-[#fff] p-4 mb-3 rounded-lg'>
                Working with HomeFrontier was an absolute pleasure. Their team
                guided us through every step of the home-buying process with
                professionalism and expertise. Thanks to their dedication, we
                found our dream home quickly and seamlessly. Highly recommend!
              </p>
              <div className='flex gap-3 mx-auto items-center bg-[#fff] w-[45%] rounded-full p-2'>
                <img className='w-20 rounded-full' src={testImg1} alt='' />
                <div className='text-[]'>
                  <p className='text-lg font font-medium text-colorTertiary'>
                    Daniel Mitchell
                  </p>
                  <p className='text-base font-normal text-colorSecondary'>
                    Happy Homeowners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className=''>
              <p className='text-colorSecondary text-base font-normal bg-[#fff] p-4 mb-3 rounded-lg'>
                I can not thank HomeFrontier enough for their exceptional
                service. As a first-time home seller, I was apprehensive, but
                their team made the entire process smooth and stress-free. From
                staging advice to negotiation skills, they exceeded my
                expectations. I would not hesitate to work with them again.
              </p>
              <div className='flex gap-3 mx-auto items-center bg-[#fff] w-[45%] rounded-full p-2'>
                <img className='w-20 rounded-full' src={testImg2} alt='' />
                <div className='text-[]'>
                  <p className='text-lg font font-medium text-colorTertiary'>
                    Sophia Nguyen
                  </p>
                  <p className='text-base font-normal text-colorSecondary'>
                    Satisfied Seller
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className=''>
              <p className='text-colorSecondary text-base font-normal bg-[#fff] p-4 mb-3 rounded-lg'>
                Choosing HomeFrontier was the best decision we made in our home
                search. Their agents truly listened to our needs and
                preferences, and they went above and beyond to find us the
                perfect home. Their professionalism and attention to detail were
                remarkable. We could not be happier with the outcome!
              </p>
              <div className='flex gap-3 mx-auto items-center bg-[#fff] w-[45%] rounded-full p-2'>
                <img className='w-20 rounded-full' src={testImg3} alt='' />
                <div className='text-[]'>
                  <p className='text-lg font font-medium text-colorTertiary'>
                    Alexander Rivera
                  </p>
                  <p className='text-base font-normal text-colorSecondary'>
                    Delighted Homebuyers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
