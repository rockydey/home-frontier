import PropTypes from "prop-types";
import {
  MapPin,
  BedDouble,
  Bath,
  LandPlot,
  CarFront,
  Receipt,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeProperty = ({ property }) => {
  const {
    id,
    estate_title,
    location,
    status,
    area,
    price,
    segment_name,
    image,
    bedrooms,
    bathrooms,
  } = property;
  return (
    <div
      data-aos='zoom-in-up'
      data-aos-duration='1000'
      className='shadow-lg rounded-2xl'>
      <div className='relative'>
        <img className='rounded-t-2xl' src={image} alt='' />
        <p className='absolute left-5 top-5 shadow border-0 bg-colorPrimary px-4 py-1 rounded text-[#fff] text-base font-medium'>
          For {status}
        </p>
        <p className='absolute right-5 top-5 shadow border-0 bg-[#00000080] px-4 py-1 rounded text-[#fff] text-base font-medium'>
          {segment_name}
        </p>
      </div>
      <div className='p-6'>
        <div>
          <h3 className='text-xl font-medium text-colorPrimary mb-2'>
            {estate_title}
          </h3>
          <p className='text-base text-colorSecondary font-normal flex items-center gap-2'>
            <MapPin width={20} height={20} /> {location}
          </p>
        </div>
        <div className='divider'></div>
        <div className='grid grid-cols-2 justify-between gap-3 text-colorSecondary text-base font-normal'>
          <p className='flex items-center gap-2'>
            <BedDouble width={20} height={20} />
            {bedrooms} Bedrooms
          </p>
          <p className='flex items-center gap-2'>
            <Bath width={20} height={20} />
            {bathrooms} Bathrooms
          </p>
          <p className='flex items-center gap-2'>
            <LandPlot width={20} height={20} />
            {area}
          </p>
          <p className='flex items-center gap-2'>
            <CarFront width={20} height={20} />1 Garage
          </p>
        </div>
        <div className='divider'></div>
        <div className='flex justify-between items-center gap-2'>
          <p className='flex items-center gap-2 text-lg font-medium text-colorTertiary'>
            <Receipt width={20} height={20} />
            {price}
          </p>
          <Link to={`/property/${id}`}>
            <button className='text-lg font-semibold bg-colorPrimary text-[#fff] px-6 py-2 rounded-md'>
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

HomeProperty.propTypes = {
  property: PropTypes.object,
};

export default HomeProperty;
