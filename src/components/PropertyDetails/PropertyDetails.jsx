import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { MapPin, BedDouble, Bath, LandPlot, CarFront } from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams();
  const properties = useLoaderData();
  const parseId = parseInt(id);
  const propertyDetail = properties.find((property) => property.id === parseId);

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    image,
    facilities,
    bedrooms,
    bathrooms,
  } = propertyDetail;

  return (
    <div className='mt-20 py-20 max-w-screen-xl mx-auto px-5 lg:px-0'>
      <div className='w-full lg:w-3/5 mx-auto border rounded-2xl border-colorPrimary p-3 md:p-5 lg:p-10'>
        <div className=''>
          <img className='rounded-2xl' src={image} alt='' />
        </div>
        <div className='shadow-lg bg-[#fff] relative mt-[-50px] w-[95%] md:w-11/12 mx-auto'>
          <div className='p-2 md:p-5'>
            <h3 className='text-xl font-medium text-colorPrimary mb-2'>
              {estate_title}
            </h3>
            <p className='text-base text-colorSecondary font-normal flex items-center gap-2'>
              <MapPin width={20} height={20} /> {location}
            </p>
          </div>
          <div className='bg-[#F7F7F7]'>
            <p className='p-2 md:p-5 text-sm font-normal text-colorSecondary'>
              {description}
            </p>
          </div>
          <div className='p-2 md:p-5'>
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
            <div className=''>
              <div className='mb-3 flex flex-wrap items-center justify-between'>
                <p className='text-lg font-medium text-colorTertiary'>
                  Price:
                  <span className='font-normal ml-1'>{price}</span>,
                </p>
                <p className='text-lg font-medium text-colorTertiary'>
                  Segment Name:{" "}
                  <span className='font-normal ml-1'>{segment_name}</span>,
                </p>
                <p className='text-lg font-medium text-colorTertiary'>
                  Status: <span className='font-normal ml-1'>For {status}</span>
                </p>
              </div>
              <p className='text-lg font-medium text-colorTertiary'>
                Facilities:
                <span className='ml-2'>
                  {facilities.map((facility, idx) => (
                    <span className='text-colorPrimary mr-2' key={idx}>
                      #{facility},{" "}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
