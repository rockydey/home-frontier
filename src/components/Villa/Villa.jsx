import { useLoaderData } from "react-router-dom";
import HomeProperty from "../HomeProperty/HomeProperty";

const Villa = () => {
  const properties = useLoaderData();
  const villas = properties.filter(
    (property) => property.segment_name === "Villa"
  );
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {villas.map((property) => (
        <HomeProperty key={property.id} property={property}></HomeProperty>
      ))}
    </div>
  );
};

export default Villa;
