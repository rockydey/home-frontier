import { useEffect } from "react";
import agent1 from "../../assets/images/avatar-5.jpg";
import agent2 from "../../assets/images/avatar-6.jpg";
import agent3 from "../../assets/images/avatar-8.jpg";
import agent4 from "../../assets/images/avatar-7.jpg";
import { Facebook, Twitter, Instagram } from "lucide-react";
import testBg from "../../assets/images/testimonial-bg.jpg";
import Testimonial from "../../components/Testimonial/Testimonial";

const Agents = () => {
  useEffect(() => {
    document.title = "Agents";
  });
  return (
    <div className=''>
      <div className='max-w-screen-xl mx-auto mt-40 mb-20'>
        <h3 className='text-3xl font-bold mb-5 text-colorTertiary text-center'>
          Our Agents
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div>
            <div className='relative'>
              <img src={agent1} alt='' />
              <div className='space-y-4 text-[#fff] absolute top-5 right-5'>
                <div className='bg-[#00000080] cursor-pointer p-4'>
                  <Facebook />
                </div>
                <div className='bg-[#00000080] cursor-pointer p-4'>
                  <Twitter />
                </div>
                <div className='bg-[#00000080] cursor-pointer p-4'>
                  <Instagram />
                </div>
              </div>
            </div>
            <div className='text-center mt-5'>
              <h3 className='text-xl mb-1 font-medium text-colorTertiary'>
                Emily Johnson
              </h3>
              <p className='text-base font-normal text-colorSecondary'>
                Lead Property Consultant
              </p>
            </div>
          </div>
          <div>
            <div className='relative'>
              <img src={agent2} alt='' />
              <div className='space-y-4 text-[#fff] absolute top-5 right-5'>
                <div className='bg-[#00000080] cursor-pointer p-4'>
                  <Facebook />
                </div>
                <div className='bg-[#00000080] cursor-pointer p-4'>
                  <Twitter />
                </div>
                <div className='bg-[#00000080] cursor-pointer p-4'>
                  <Instagram />
                </div>
              </div>
            </div>
            <div className='text-center mt-5'>
              <h3 className='text-xl mb-1 font-medium text-colorTertiary'>
                John Smith
              </h3>
              <p className='text-base font-normal text-colorSecondary'>
                Senior Sales Associate
              </p>
            </div>
          </div>
          <div>
            <div className='relative'>
              <img src={agent3} alt='' />
              <div className='space-y-4 text-[#fff] absolute top-5 right-5'>
                <div className='bg-[#00000080] cursor-pointer p-4'>
                  <Facebook />
                </div>
                <div className='bg-[#00000080] cursor-pointer p-4'>
                  <Twitter />
                </div>
                <div className='bg-[#00000080] cursor-pointer p-4'>
                  <Instagram />
                </div>
              </div>
            </div>
            <div className='text-center mt-5'>
              <h3 className='text-xl mb-1 font-medium text-colorTertiary'>
                Sarah Thompson
              </h3>
              <p className='text-base font-normal text-colorSecondary'>
                Residential Listing Specialist
              </p>
            </div>
          </div>
          <div>
            <div className='relative'>
              <img src={agent4} alt='' />
              <div className='space-y-4 text-[#fff] absolute top-5 right-5'>
                <div className='bg-[#00000080] cursor-pointer p-4'>
                  <Facebook />
                </div>
                <div className='bg-[#00000080] cursor-pointer p-4'>
                  <Twitter />
                </div>
                <div className='bg-[#00000080] cursor-pointer p-4'>
                  <Instagram />
                </div>
              </div>
            </div>
            <div className='text-center mt-5'>
              <h3 className='text-xl mb-1 font-medium text-colorTertiary'>
                Michael Davis
              </h3>
              <p className='text-base font-normal text-colorSecondary'>
                Home Buying Advisor
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${testBg})` }}
        className='bg-center bg-no-repeat bg-cover'>
        <div className='max-w-screen-xl mx-auto py-20'>
          <h4 className='text-3xl font-bold text-[#fff] text-center mb-8'>
            A Testimonial for HomeFrontier
          </h4>
          <div className='w-1/2 mx-auto'>
            <Testimonial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
