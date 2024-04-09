import { useLoaderData } from "react-router-dom";
import HomeProperty from "../HomeProperty/HomeProperty";

const House = () => {
  const properties = useLoaderData();
  const houses = properties.filter(
    (property) => property.segment_name === "House"
  );
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {houses.map((property) => (
        <HomeProperty key={property.id} property={property}></HomeProperty>
      ))}
    </div>
  );
};

export default House;
