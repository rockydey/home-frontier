import { useLoaderData } from "react-router-dom";
import HomeProperty from "../HomeProperty/HomeProperty";

const Apartment = () => {
  const properties = useLoaderData();
  const apartments = properties.filter(
    (property) => property.segment_name === "Apartment"
  );

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {apartments.map((property) => (
        <HomeProperty key={property.id} property={property}></HomeProperty>
      ))}
    </div>
  );
};

export default Apartment;
